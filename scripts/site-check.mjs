import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const html = readFileSync(path.join(root, 'index.html'), 'utf8');
const baselineFile = path.join(root, 'compatibility.json');

if (process.argv.includes('--capture')) {
  if (existsSync(baselineFile)) throw new Error('兼容基线已存在，拒绝覆盖');
  const metadata = JSON.parse(readFileSync(path.join(root, 'version.json'), 'utf8'));
  const assets = [...html.matchAll(/\bsrc=["']([^"']+)["']/g)].map(match => match[1]).filter(value => !/^(?:https?:|data:)/.test(value) && existsSync(path.join(root, value)));
  const anchors = [...new Set([...html.matchAll(/\bhref=["']#([^"']+)["']/g)].map(match => match[1]))];
  writeFileSync(baselineFile, `${JSON.stringify({ anchors, assets: [...new Set(assets)], downloadKeys: Object.keys(metadata.download) }, null, 2)}\n`);
  console.log('官网锚点、资源与下载字段基线已保存');
  process.exit(0);
}

const { validateVersion } = await import('../assets/version.mjs');
const metadata = validateVersion(JSON.parse(readFileSync(path.join(root, 'version.json'), 'utf8')));
const baseline = JSON.parse(readFileSync(baselineFile, 'utf8'));
const errors = [];
if (!baseline || !Array.isArray(baseline.anchors) || !Array.isArray(baseline.downloadKeys)) throw new Error('兼容清单结构错误');
for (const key of baseline.downloadKeys) {
  if (typeof key !== 'string' || !metadata.download.some(item => item.platform === key)) errors.push(`缺失下载平台 ${key}`);
}
for (const anchor of baseline.anchors) {
  if (typeof anchor !== 'string' || !/^[\w-]+$/.test(anchor)) throw new Error('无效锚点');
  if (!html.includes(`id="${anchor}"`)) errors.push(`缺失历史锚点 #${anchor}`);
}
for (const match of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/g)) {
  const value = match[1];
  if (/^(?:https?:|mailto:|data:)/.test(value)) continue;
  if (value.startsWith('#')) {
    if (value.length === 1 || !html.includes(`id="${value.slice(1)}"`)) errors.push(`无效锚点 ${value}`);
    continue;
  }
  if (/^(?:javascript:|file:|\/Users\/)/i.test(value)) {
    errors.push('存在不安全地址');
    continue;
  }
  const local = path.resolve(root, value.split(/[?#]/)[0]);
  if (!local.startsWith(`${root}${path.sep}`) || !existsSync(local)) errors.push(`缺失本地资源 ${value}`);
}
if (/\bon\w+=["']/.test(html)) errors.push('存在内联事件处理器');
if (/screenshot\d*\.(?:png|jpe?g)/i.test(html)) errors.push('官网不得引用产品截图');
if (!/Content-Security-Policy/.test(html)) errors.push('缺少内容安全策略');
if (readFileSync(path.join(root, 'CNAME'), 'utf8').trim() !== 'iolinker.com') errors.push('官网域名不一致');
const workflow = readFileSync(path.join(root, '.github/workflows/deploy.yml'), 'utf8');
if (!/cname:\s*iolinker\.com(?:\s|$)/.test(workflow)) errors.push('官网 CI 域名不一致');
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`官网完整性检查通过：${metadata.download.length} 个平台，历史导航兼容`);
}
