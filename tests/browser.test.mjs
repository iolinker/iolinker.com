import test, { before, after } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { mkdirSync } from 'node:fs';
import { chromium } from 'playwright';
import { createSiteServer } from '../scripts/serve.mjs';

let server;
let browser;
let base;
before(async () => {
  server = createSiteServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  base = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ headless: true });
});
after(async () => {
  await browser?.close();
  if (server) await new Promise(resolve => server.close(resolve));
});

async function context(options = {}) {
  const created = await browser.newContext(options);
  await created.route('https://hm.baidu.com/**', route => route.abort());
  return created;
}

for (const width of [375, 768, 1440]) {
  test(`官网 ${width}px：导航、标签、图片与语言`, async () => {
    const session = await context({ viewport: { width, height: 1000 } });
    const page = await session.newPage();
    const failures = [];
    page.on('pageerror', error => failures.push(error.message));
    await page.goto(base);
    await page.waitForSelector('#downloadLinks a');
    assert.equal(await page.locator('#downloadLinks a').count(), 6);
    mkdirSync(new URL('../test-results/', import.meta.url), { recursive: true });
    await page.screenshot({ path: new URL(`../test-results/website-${width}.png`, import.meta.url).pathname, fullPage: true });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
    if (width <= 768) {
      await page.click('#menuToggle');
      assert.equal(await page.getAttribute('#menuToggle', 'aria-expanded'), 'true');
    }
    await page.click('#languageToggle');
    assert.equal(await page.getAttribute('html', 'lang'), 'en');
    assert.match(await page.locator('meta[name="description"]').getAttribute('content'), /Describe tasks/);
    assert.match(await page.locator('[data-doc="guide/quick-start.html"]').first().getAttribute('href'), /\/guide\/quick-start\.html$/);
    if (width <= 768) await page.keyboard.press('Escape');
    await page.locator('#tab-agent').focus();
    await page.keyboard.press('ArrowRight');
    assert.equal(await page.getAttribute('#tab-workflow', 'aria-selected'), 'true');
    await page.locator('#panel-workflow [data-image]').click();
    assert.ok(await page.locator('#imageDialog').isVisible());
    await page.keyboard.press('Escape');
    assert.ok(await page.locator('#imageDialog').isHidden());
    assert.ok(await page.locator('#panel-workflow [data-image]').evaluate(element => element === document.activeElement));
    assert.deepEqual(failures, []);
    await session.close();
  });
}

test('官网关闭 JavaScript 后仍有内容与文档入口', async () => {
  const session = await context({ javaScriptEnabled: false, viewport: { width: 375, height: 1000 } });
  const page = await session.newPage();
  await page.goto(base);
  assert.ok(await page.locator('h1').isVisible());
  assert.ok(await page.locator('#panel-workflow').isVisible());
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1));
  assert.ok(await page.locator('.navigation a[data-doc]').isVisible());
  await session.close();
});

test('官网减少动画偏好与元数据失败降级', async () => {
  const session = await context({ reducedMotion: 'reduce' });
  await session.route('**/version.json', route => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ latest_version: '<img src=x onerror=alert(1)>', download: { 'darwin/arm64': 'javascript:alert(1)' } }) }));
  const page = await session.newPage();
  await page.goto(base);
  await page.waitForFunction(() => document.getElementById('versionLabel').textContent === '暂时不可用');
  assert.equal(await page.locator('#downloadLinks a').count(), 0);
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), 'auto');
  assert.equal(await page.locator('#versionLabel img').count(), 0);
  await session.close();
});

test('本地预览只暴露站点白名单并包含安全头', async () => {
  const response = await fetch(`${base}/version.json`);
  assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
  for (const pathname of ['/package.json', '/.git/config', '/scripts/site-check.mjs', '/%2e%2e/package.json']) {
    assert.equal((await fetch(`${base}${pathname}`)).status, 404);
  }
});
