import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateVersion, readVersionResponse } from '../assets/version.mjs';

const source = JSON.parse(readFileSync(new URL('../version.json', import.meta.url), 'utf8'));
const copy = () => structuredClone(source);

test('保留全部旧平台并包含 Windows 下载', () => {
  const result = validateVersion(copy());
  assert.equal(result.version, source.latest_version);
  assert.equal(result.download.length, 6);
  assert.ok(result.download.some(item => item.platform === 'windows/amd64'));
});

for (const raw of [null, [], 'v2.4.3', {}, { latest_version: '<img onerror=x>', download: {} }, { latest_version: 'v2.4.3', download: [] }]) {
  test(`拒绝错误元数据类型 ${JSON.stringify(raw)}`, () => assert.throws(() => validateVersion(raw)));
}

for (const url of ['javascript:alert(1)', 'http://iolinker.oss-cn-shenzhen.aliyuncs.com/a', 'https://evil.example/a', 'https://iolinker.oss-cn-shenzhen.aliyuncs.com.evil.example/a', 'https://user:secret@iolinker.oss-cn-shenzhen.aliyuncs.com/a', 'https://iolinker.oss-cn-shenzhen.aliyuncs.com:8443/a', 'https://iolinker.oss-cn-shenzhen.aliyuncs.com/a?redirect=evil', 'https://iolinker.oss-cn-shenzhen.aliyuncs.com/a#x']) {
  test(`拒绝非允许下载地址 ${url}`, () => {
    const value = copy();
    value.download['darwin/arm64'] = url;
    assert.throws(() => validateVersion(value));
  });
}

test('拒绝对象字段和未知平台', () => {
  const value = copy();
  value.download['darwin/arm64'] = { url: 'https://example.com' };
  assert.throws(() => validateVersion(value));
  const unknown = copy();
  unknown.download['unknown/platform'] = 'https://example.com';
  assert.throws(() => validateVersion(unknown));
});

test('只接受 JSON 响应并限制体积', async () => {
  const valid = new Response(JSON.stringify(source), { headers: { 'Content-Type': 'application/json' } });
  assert.equal((await readVersionResponse(valid)).version, source.latest_version);
  await assert.rejects(readVersionResponse(new Response('not json')));
  await assert.rejects(readVersionResponse(new Response('x'.repeat(17000), { headers: { 'Content-Type': 'application/json' } })));
});
