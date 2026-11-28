const DOWNLOAD_HOST = 'iolinker.oss-cn-shenzhen.aliyuncs.com';
const PLATFORMS = Object.freeze([
  { key: 'darwin/arm64', file: 'darwin-arm64', label: 'macOS · Apple Silicon' },
  { key: 'darwin/amd64', file: 'darwin-amd64', label: 'macOS · Intel' },
  { key: 'linux/amd64', file: 'linux-amd64', label: 'Linux · x86_64' },
  { key: 'linux/arm64', file: 'linux-arm64', label: 'Linux · ARM64' },
  { key: 'linux/arm', file: 'linux-armv7', label: 'Linux · ARMv7' },
  { key: 'windows/amd64', file: 'windows-amd64', label: 'Windows · x86_64' }
]);

function isRecord(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
}

export function validateVersion(value) {
  if (!isRecord(value) || typeof value.latest_version !== 'string' || value.latest_version.length > 64 || !/^v\d{1,3}\.\d{1,3}\.\d{1,3}(?:-[a-z0-9]+(?:[.-][a-z0-9]+)*)?$/.test(value.latest_version) || !isRecord(value.download)) {
    throw new Error('版本元数据格式错误');
  }
  const keys = Object.keys(value.download);
  if (keys.length > PLATFORMS.length || keys.some(key => !PLATFORMS.some(platform => platform.key === key))) throw new Error('下载平台不受支持');
  const download = PLATFORMS.filter(platform => Object.hasOwn(value.download, platform.key)).map(platform => {
    const raw = value.download[platform.key];
    if (typeof raw !== 'string' || raw.length > 512) throw new Error('下载地址格式错误');
    const url = new URL(raw);
    const expected = `/iolinker-standalone-${platform.file}-${value.latest_version}.tar.gz`;
    if (url.protocol !== 'https:' || url.hostname !== DOWNLOAD_HOST || url.port || url.username || url.password || url.search || url.hash || url.pathname !== expected) throw new Error('下载地址不受允许');
    return { platform: platform.key, label: platform.label, url: url.href };
  });
  if (download.length === 0) throw new Error('没有可用下载信息');
  return { version: value.latest_version, download };
}

export async function readVersionResponse(response) {
  if (!response.ok || !/application\/json/i.test(response.headers.get('content-type') || '')) throw new Error('版本信息无法读取');
  const reader = response.body?.getReader();
  if (!reader) throw new Error('版本响应不完整');
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let size = 0;
  let text = '';
  try {
    for (;;) {
      const chunk = await reader.read();
      if (chunk.done) break;
      size += chunk.value.byteLength;
      if (size > 16384) {
        await reader.cancel();
        throw new Error('版本响应超出限制');
      }
      text += decoder.decode(chunk.value, { stream: true });
    }
    text += decoder.decode();
  } finally {
    reader.releaseLock();
  }
  return validateVersion(JSON.parse(text));
}
