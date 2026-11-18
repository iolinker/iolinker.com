import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(fileURLToPath(new URL('../', import.meta.url)));
const allowed = new Map([
  ['/', ['index.html', 'text/html; charset=utf-8']],
  ['/index.html', ['index.html', 'text/html; charset=utf-8']],
  ['/version.json', ['version.json', 'application/json; charset=utf-8']],
  ['/logo.png', ['logo.png', 'image/png']],
  ['/favicon.png', ['favicon.png', 'image/png']],
  ['/assets/site.css', ['assets/site.css', 'text/css; charset=utf-8']],
  ['/assets/site.mjs', ['assets/site.mjs', 'text/javascript; charset=utf-8']],
  ['/assets/version.mjs', ['assets/version.mjs', 'text/javascript; charset=utf-8']],
  ['/assets/analytics.js', ['assets/analytics.js', 'text/javascript; charset=utf-8']]
]);
const policy = "default-src 'self'; script-src 'self' https://hm.baidu.com; style-src 'self'; img-src 'self' data: https://hm.baidu.com; connect-src 'self' https://hm.baidu.com; object-src 'none'; base-uri 'self'; form-action 'none'; frame-src 'none'";

export function createSiteServer() {
  return createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.setHeader('Content-Security-Policy', policy);
    response.setHeader('Cache-Control', 'no-store');
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', Allow: 'GET, HEAD' });
      response.end('Method not allowed');
      return;
    }
    const raw = request.url || '';
    if (raw.length > 2048 || /[\\\0\r\n]/.test(raw)) {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Invalid request');
      return;
    }
    let entry;
    try {
      const pathname = decodeURIComponent(raw.split('?')[0]);
      entry = allowed.get(pathname);
    } catch {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Invalid request');
      return;
    }
    if (!entry) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
      return;
    }
    try {
      const body = await readFile(path.join(root, entry[0]));
      response.writeHead(200, { 'Content-Type': entry[1], 'Content-Length': body.byteLength });
      response.end(request.method === 'HEAD' ? undefined : body);
    } catch {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Not found');
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  createSiteServer().listen(4173, '127.0.0.1', () => console.log('官网预览：http://127.0.0.1:4173'));
}
