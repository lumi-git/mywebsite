# ronantremoureux.fr

Ronan Tremoureux's personal site. One page, plain HTML, CSS and JS, built with Vite. No framework.

## Run

Needs Node 20.

```
npm ci            # install
npm run dev       # http://localhost:5173
npm run build     # static site in dist/
npm run preview   # serve dist/ on http://localhost:4173
```

## Deploy

`dist/` is the whole site: upload it to any static host. Vercel builds it from `main` (framework preset Vite, output `dist/`).

## Edit

- Text: `src/locales/en.json` (the build fails if `index.html` uses a key that is missing there).
- Page: `index.html`. Styles: `src/styles.css`. Behaviour: `src/main.js`, knobs in `src/config.js`.
- Static files (favicon, CV, robots, sitemap, llms.txt): `public/`.
- What the previous site said, and where each piece went: `CONTENT.md`.

More rules in `CLAUDE.md`.
