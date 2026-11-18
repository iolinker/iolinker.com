import { copyFileSync, existsSync, mkdirSync, renameSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const retired = ['screenshot2.jpg', 'screenshot6.png'];
for (const filename of retired) {
  const previous = path.join(root, 'dist', filename);
  if (!existsSync(previous)) continue;
  const archive = path.join(root, 'test-results/previous-dist', filename);
  mkdirSync(path.dirname(archive), { recursive: true });
  renameSync(previous, archive);
}
const targets = ['index.html', 'CNAME', 'logo.png', 'favicon.png', 'version.json', 'assets/site.css', 'assets/site.mjs', 'assets/version.mjs', 'assets/analytics.js'];
for (const filename of targets) {
  const destination = path.join(root, 'dist', filename);
  mkdirSync(path.dirname(destination), { recursive: true });
  copyFileSync(path.join(root, filename), destination);
}
for (const filename of retired) {
  if (existsSync(path.join(root, 'dist', filename))) throw new Error('产品截图不得进入发布产物');
}
console.log('静态产物已生成：dist/（原生示意，不包含产品截图、依赖或测试文件）');
