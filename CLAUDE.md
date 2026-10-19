# ronantremoureux.fr

Ronan Tremoureux's personal site. One page, plain HTML, CSS and JS built with Vite: no framework, no UI library.
Keep it that way. Modelled on the nablify website (`~/dev/work/nablify/website`): same stack, tokens, type, mechanics, and rules.

```
npm run dev       # http://localhost:5173
npm run build     # → dist/ (fails if index.html uses a text key missing from en.json)
npm run preview   # serve dist/
```

Vite is pinned to 6 because the machine runs Node 20.17.

## Files

| File | Role |
|---|---|
| `index.html` | The whole page: inline SVG sprite (`linkedin`, `github`), JSON-LD (Person) in the head, every section |
| `src/styles.css` | All styles. Colour and font tokens at the top |
| `src/main.js` | Theme toggle, compact header (hairline; phones: the name scales down) once the big name scrolls under it, contact greetings taking turns, e-mail copy, phone swipe paging (one swipe = one section, tall sections in steps), mobile menu (popover + fallback), rows/cards/skill groups folding to their titles on phones + the project view, footer line dots |
| `src/config.js` | Behaviour knobs only: the greeting turn length. No logic |
| `src/locales/en.json` | Every visible text, the single source |
| `vite.config.js` | Writes `en.json` into the HTML so crawlers and no-JS visitors get English |
| `public/` | `favicon.svg`, `CV.pdf`, `robots.txt`, `sitemap.xml`, `llms.txt` |
| `CONTENT.md` | Map of everything the previous site said (SvelteKit, 2023–24, plus an unfinished Astro draft) and where each piece went. The facts reference |
| `vercel.json` | Pins the Vercel build (Vite preset, `npm ci`, `dist/`) so stale project settings from the SvelteKit site cannot break it. Node 20 via `engines` in `package.json` |
| `CNAME` | GitHub Pages test subdomain (test.ronantremoureux.fr, built from `main` root by Jekyll). Production is Vercel from `main`, output `dist/` |

## Owner decisions — do not undo

- **One page, English only.** No extra pages, no router, no translations (the Astro draft's FR strings are in `CONTENT.md`, not on the site).
- **The first screen is the headline and one quiet line** (designer review, Oct 2026): "Software engineer" (`hero.title`), big, centred, then one sentence in `--fg-2` saying what and where (`hero.sub`, one line on desktop). No buttons, no name there (the header wordmark carries it). At the bottom: the chevron alone (it bobs; no "More" word) and two quiet 13px mono corners on its line: place and the live Luxembourg time (left, `main.js`), GitHub and LinkedIn (right). Phones hide the corners: the dock is there. There is no logo; the name is the mark (header wordmark, footer).
- **Desktop nav is three links:** Who I am · Work · Projects, so the two sides of the bar weigh the same around the centred name. Education and Skills stay on the page and in the phone menu. Nav links are `--fg` at 80% (lighter than the name and the button), full on hover.
- **One section per screen.** Desktop: `scroll-snap-type: y mandatory` on `html`, every `.hero`/`.block` snaps to its start, the footer to its end. Phones: the body is the scroller (fixed to the small viewport), sections are one `svh` tall and a swipe pages one section (`main.js`); a section taller than the screen is read in steps. Landscape phones: no snapping.
- **Phone header is a 56px bar** with the name alone, drawn 1.6× on the hero (transforms only; `header.compact` scales it back). Never animate the header's height. **Phone controls sit at the bottom, in thumb reach:** the dock (menu, theme, Get in touch) and the close buttons of the menu sheet and the project view, bottom-left where the menu button was. Never put a control at the top of a phone screen.
- **Phones fold lists to their titles:** Work and Education rows and Skills groups open one at a time; a Projects card opens in the project view (`#projectView`, a popover over the blurred page). Desktop shows everything.
- **A fix for phones/tablets goes inside `@media (max-width: 900px)` or `560px`, never in the base rules.** Check desktop is pixel-identical afterwards.
- **No contact form.** The e-mail copies on click; LinkedIn, GitHub, and the CV are the links. The old EmailJS form and its keys were dropped (Oct 2026).
- **Contact says the languages:** "I speak" with Hello / Bonjour taking turns; the CV button follows the language. Fixed per language in the HTML (`data-speak`, `data-cv`), deliberately not in the locale file.
- **No embedded demos, no dependencies at runtime.** The old p5.js sketches (Ballons, Dot connection, GameScript demo) are gone; a project links to its live site or its code.
- **The old look is gone on purpose:** Tailwind, daisyUI "night" theme, cyan–emerald gradients, logo PNGs, AOS scroll animations. Do not bring them back.
- **nablify is always lowercase.** The `<title>` and `og:title` are fixed: "Ronan Tremoureux — software specialist".

## Colours

Use the tokens, never a raw hex in a new rule.

The Marshall Emberton III mood (owner choice, Oct 2026): the speaker's sage body, its grille black, and its brass logo. Light = sage page, dark = the grille.

| Token | Light | Dark | Use for |
|---|---|---|---|
| `--bg` | `#A9AF99` (sage) | `#1E2219` (grille black) | Page background |
| `--surface` | `#B6BCA7` | `#2A2F22` | Raised areas |
| `--line` | `#8E9480` | `#3B4132` | Hairlines, borders, tag chips |
| `--field` | `#7C8370` | `#4C5341` | Inactive shapes |
| `--fg` | `#1F231A` (grille black) | `#E8EADF` (sage white) | Headings, strong text, solid buttons |
| `--fg-2` | `#353B2C` | `#B8BDA8` | Body text |
| `--accent` | `#4F3B10` (dark brass) | = `--brass` | Brass for text and focus rings: the deeper light value passes WCAG AA on the sage (4.7:1; `--brass` is only 1.2:1 there). Small labels (card tags, dates, "I speak", "Copied") only, never running text |
| `--brass` | `#D6B678` | same | Decorative brass: e-mail underline, button hover fill, cue hover, footer dots. Never as text on the sage (use `--accent`) |
| `--on-accent` | `#1F231A` | same | Text on a brass fill |

- Brass is an accent, used sparingly: one brass thing per element at most (a card's tag, a row's dates). Sage and grille black carry everything else. The speaker's red battery light is not a token: no red anywhere.
- **The sage is a mid-tone, so contrast is tight.** Small text needs 4.5:1 on it: `--fg-2` gives 5.1:1, nav links (`--fg` at 80%) 4.8:1, `--accent` 4.7:1. Edges that must read (the icon buttons' ring) are `--fg` at 60%, 3:1. `--line` hairlines are decorative and may stay faint. To fix a contrast problem, darken the text, never lighten the background.
- Emphasis in text is bold only (`<b>`/`<strong>`, 500–600, `--fg`).
- Dark mode is defined twice (system preference and `data-theme="dark"`). A new token goes in **both** dark blocks and in `:root`.

## Type

- `--display` Sora: the big name, headings, the big statements, the e-mail, the greetings, the wordmark. Weights 400/600/700, tight letter-spacing (`-0.02em` to `-0.04em`).
- `--body` IBM Plex Sans 400/500: body text, 17px base.
- `--mono` IBM Plex Mono: small labels, one style: `500 12px`, `letter-spacing: .12em`, uppercase, usually in `--accent`. Lowercase 12–13px mono only for technical bits (skill tags, footer line).
- Buttons are `--body` 500 (`.pill`).
- Titles: Sora 600 for h2/h3 on desktop, 700 for the big ones (h1, contact lead, phone h2).
- Fonts come from `@fontsource` (self-hosted). No Google Fonts link.
- `text-wrap: balance` for headings and short lines, `pretty` for paragraphs.
- Use a non-breaking hyphen (`‑`, U+2011) in compounds that must not split on phones ("user‑centric", "Chartres‑de‑Bretagne").

## Layout patterns

- Section = `<section class="block" id="…">` with `<h2>` then **one** content element (wrap several in a `<div>`). Desktop: name left (1fr), content right (3fr), hairline on top, at least one screen tall. ≤900px: one column, one screen tall, the h2 and its content follow each other at one vertical rhythm (`--sgap`, 24–48px by screen height) and sit centred on the screen together; list sections (Work, Education, Projects, Skills) start at the top.
- Big statement sentence: `.what` style — Sora 400 in `--fg-2`, key words in `<b>` (600, `--fg`), max 28ch. Then `.about` for one plain paragraph.
- Rows (`.caps` > `.cap`): dates (tag) | title + `.where` | points. Used by Work and Education. Cards (`.cards` > `.card`): tag, title, text, `.card-links`. Used by Projects. Skills: `.groups` of `.tags` (mono chips) or `.list`. Reuse one before inventing a new component.
- Buttons: `.pill.solid` (grille black, brass on hover) or `.pill.line`. Min touch size 44px.
- Phone gutter 16px, otherwise 24px. Never a horizontal scroll.
- Prefer native: `popover`, CSS over JS.

## Motion

- Animate transforms and opacity only; no layout properties.
- Easing is slow–fast–slow (`cubic-bezier(.22,1,.36,1)`, `.65,0,.35,1`).
- Every animation has a `prefers-reduced-motion` path.

## Text

- Every visible string lives in `src/locales/en.json` and is referenced in the HTML with `data-i18n="key"` (inner HTML), `data-i18n-aria="key"` (aria-label) or `data-i18n-content="key"` (meta content). Put the English text in the HTML too: the build rewrites those elements from `en.json` and fails on a missing key. An element carrying a key never nests its own tag.
- Tone: short, plain, factual, first person. No superlatives.
- Spelling: British/Canadian (organised, modelling, centre). Always the Oxford comma ("a, b, and c").

## Facts — keep in sync

When a fact changes (job, place, links, a project), update **all** of: the text in `en.json` and `index.html`, the JSON-LD in `<head>`, `public/llms.txt`, the meta description, and `CONTENT.md`.

- Canonical URL `https://ronantremoureux.fr/`. E-mail contact@ronantremoureux.fr (also in `main.js`, for the copy).
- Software specialist at nablify since 2024, Fentange, Luxembourg. ESIR (Rennes University) 2024 graduate.
- GitHub `lumi-git`. LinkedIn `ronan-tremoureux-139967233`. Live demos: robot.ronantremoureux.fr, quickqr.ronantremoureux.fr.
- `public/CV.pdf` is the file from the old site (the old site itself called it "not up to date"). Replace it when a new CV exists.

## Before saying done

1. `npm run build` passes.
2. Look at it: desktop 1440px and phone 390px, light and dark.
3. Desktop unchanged if the request was about mobile.
4. Screenshots and scratch files go outside the project folder.
