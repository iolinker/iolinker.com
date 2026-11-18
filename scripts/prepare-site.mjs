import { copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const targets = ['index.html', 'CNAME', 'logo.png', 'favicon.png', 'version.json', 'screenshot2.jpg', 'screenshot6.png', 'assets/site.css', 'assets/site.mjs', 'assets/version.mjs', 'assets/analytics.js'];
for (const filename of targets) {
  const destination = path.join(root, 'dist', filename);
  mkdirSync(path.dirname(destination), { recursive: true });
  copyFileSync(path.join(root, filename), destination);
}
console.log('静态产物已生成：dist/（不包含源码工具、依赖或测试文件）');
