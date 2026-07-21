# Vilo

Legacy Angular 8 application containing the original Vilo user-interface prototype.

## Requirements

- Node.js 12.x
- npm 6.x

The project uses an older Angular toolchain. Keep dependency upgrades incremental and test each Angular major version separately.

## Local development

```bash
npm ci
npm start
```

The development server is available at `http://localhost:4200`.

## Quality checks

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build -- --prod
npm audit --omit=dev --audit-level=critical
```

GitHub Actions runs installation, unit tests, a production build and a critical production-dependency audit for every pull request and push to `main`.

## Maintenance notes

- Do not commit generated `dist/` or `node_modules/` content.
- Keep application dependencies separate from Angular CLI and test tooling.
- Replace Protractor and TSLint during a future Angular migration; both are obsolete in modern Angular projects.
