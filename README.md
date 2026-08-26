# MuxBase website

The public landing page for [MuxBase](https://github.com/muxbase-app/muxbase),
an open-source macOS mission control for AI coding agents.

## Local development

```bash
npm install
npm run dev
```

The local preview is available at `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm run build
npm audit
```

`npm run build` produces the static GitHub Pages artifact in `out/`.

## Publishing to GitHub Pages

The production repository must be public and named exactly
`muxbase-app/muxbase-app.github.io`. Before the first push:

1. Open **Settings → Pages** in the empty repository.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push this source to its `main` branch.
4. Follow the **Deploy website to GitHub Pages** run in the Actions tab.
5. After the workflow succeeds, open <https://muxbase-app.github.io/>.

Every later push to `main` deploys automatically. Pull requests run lint,
type checking, a static production build, and a high-severity dependency audit
without deploying.

## Rollback

Revert the problematic commit on `main` and push the revert. The Pages workflow
will deploy the previous source again:

```bash
git revert <commit-sha>
git push origin main
```

## After publication

1. Set <https://muxbase-app.github.io/> as the website in the MuxBase
   organization profile and the main repository About section.
2. Add the URL-prefix property `https://muxbase-app.github.io/` in Google
   Search Console.
3. Verify ownership using Google's HTML verification file committed at the
   repository root.
4. Submit `https://muxbase-app.github.io/sitemap.xml` in Search Console.
5. Inspect the homepage URL and request indexing.

If a custom domain will be used immediately, update the canonical URL, Open
Graph URL, `robots.txt`, and `sitemap.xml` before the first public deployment.
