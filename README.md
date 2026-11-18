# IOLinker public website

A static bilingual website for the agent and workflow automation workspace. Product guides are maintained separately at [doc.iolinker.com](https://doc.iolinker.com).

## Local preview

Requires Node.js 22 or later.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4173`. The preview server is local-only and exposes a fixed allowlist of public files.

## Validation

```sh
npm run check
npm test
npm run test:browser
npm run build
```

Browser tests use Playwright Chromium with the sandbox enabled. Run `npx playwright install chromium` if the matching browser is not installed.

## Publication

`npm run build` validates local resources, historical anchors, download metadata and security cases, then writes only the public-file allowlist to `dist/`. GitHub Actions publishes `dist/` with the `iolinker.com` CNAME after validation.

`version.json` is the sole maintained source of download versions and platform addresses. Existing keys must remain compatible. The site validates the version format, response size, HTTPS protocol, fixed download host and expected package path before creating a link. External package availability is a separate release check.

Current product capabilities must be verified against the customer frontend. Historical screenshots are labelled as such; diagrams are explicitly marked as illustrations, not product screenshots.
