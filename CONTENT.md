# Content map

Everything the previous site said, and where each piece went in the rebuild of 18 October 2026. Two sources:

| Source | What | Where it is now |
|---|---|---|
| Commit `9a0a123` (HEAD before the rebuild) | SvelteKit 1 + Tailwind 3 + daisyUI 2 site, written 2023–24, live at ronantremoureux.fr (Vercel) and test.ronantremoureux.fr | `git show 9a0a123:<path>` |
| `stash@{0}` | Unfinished Astro 5 + Tailwind 4 rewrite from February 2026: a `resume.ts` data file, EN + FR strings, sidebar layout. Never committed | `git stash show -p stash@{0}`; untracked files in `stash@{0}^3` |

The Astro draft has newer facts (nablify job, Luxembourg) and a few corrections (TOEIC listening/reading); the old site has the author's own wording. Where they disagree, the note says so.

## Site map: old pages → new sections

| Old route (SvelteKit) | Title | New place (one page) |
|---|---|---|
| `/` | Home: hero, status, resume card, contact form | Hero · `#contact` |
| `/about` | "What's new?": contests | `#skills` › Competitions |
| `/education` | Education / Job timeline (desktop two-column, phone cards) | `#work` · `#education` |
| `/projects` | Projects sample (9 cards) | `#projects` |
| `/projects/RobotLanguage` | Roomba simulator | `#projects` › Roomba simulator |
| `/projects/quickqr` | quickQR | `#projects` › quickQR |
| `/projects/gamescript` | GameScript (embedded p5 demo) | `#projects` › GameScript |
| `/projects/PyGine` | PyGine | `#projects` › PyGine |
| `/projects/WhileCompiler` | Language compiler | `#projects` › While compiler |
| `/projects/AntFarm` | Ant farm | `#projects` › Ant farm |
| `/projects/OthersWebsites` | Redirections to other websites | `#projects` › ESIR mobility map; Roomba link |
| `/projects/P5Connections` | Dot connection (embedded p5 demo) | dropped, see below |
| `/projects/P5Ballon` | Ballons (embedded p5 demo) | dropped, see below |
| `/skills` | My different skills: soft skills, certifications, working tools | `#skills` |
| `/resumepreview` | `<embed>` of CV.pdf | dropped: the CV is a download link |

Old nav: Home · Education & Jobs · Projects · Skills · About · GitHub · LinkedIn. Old footer: "Made by Ronan Tremoureux, Powered by svelte" · "Find the code of this website on my github".
Astro draft nav: About · Experience · Projects · Skills · Contact, with a language picker EN/FR.

## Identity

| Fact | Old site (2023–24) | Astro draft (Feb 2026) | New site |
|---|---|---|---|
| Name | Ronan Tremoureux | same | same |
| Headline | "French student in software engineering school" · "French Software – fullStack Developer" | "Software Specialist @ Nablify" | "Software engineer", alone on the first screen; the rest opens "Who I am" |
| Status | "Third year in software engineering school at ESIR, Rennes1 University. Graduated in 2024" | ESIR graduate | ESIR graduate 2024 |
| Location | Rennes, France | Fentange, Luxembourg | Fentange, Luxembourg |
| E-mail | Contact@ronantremoureux.fr | same | contact@ronantremoureux.fr (lowercase) |
| GitHub | https://github.com/lumi-git | same | same |
| LinkedIn | https://www.linkedin.com/in/ronan-tremoureux-139967233/ | same | same |
| CV | `static/CV.pdf`, labelled "(NOT UP TO DATE)" | `public/CV.pdf`, same file (md5 ba9fd774…) | `public/CV.pdf`, same file |
| Tagline (draft) | — | "ESIR graduate in Software Engineering. Currently building practical & user-centric solutions at Nablify in Luxembourg. Passionate about compilers, game engines, HPC, and whatever sparks my curiosity." | folded into the hero lead and About |

Astro draft About (EN): "I'm a Software Specialist at Nablify, a Luxembourg-based engineering and scientific computing consultancy. My work focuses on building practical, user-centric solutions that streamline engineering and scientific processes." / "With a background in both Electrical and Software Engineering from ESIR (Rennes University), I bring a unique perspective bridging hardware-level understanding with modern software practices. I've worked across research labs, enterprise software, and consultancy." / "Outside of work, I build compilers, game engines, and simulation tools — anything that lets me dig deeper into how systems work under the hood." (FR versions in `src/i18n/fr.ts` of the stash.)

## Timeline (old `/education` page + Astro `resume.ts`)

The old page showed one row per year, education on the left, job on the right.

| Year | Education (old wording) | Job (old wording) | New site |
|---|---|---|---|
| 2024 | Third year of ESIR engineering school, Rennes University: "learning about languages and software modeling gave me a lot of knowledge about how to develop a software" | Professional contract at Capgemini Rennes: "during this last year of school, I will also work at capgemini. I just started" | Education: ESIR 2021–2024. Work: Apprentice software engineer, Capgemini, 2023–2024 |
| 2024 (draft only) | — | Software Specialist, nablify, Fentange: "Building practical & user-centric solutions that streamline engineering and scientific processes. Cloud computing, DevOps, automation, smart systems." Tech: Python, Docker, GitLab CI/CD, Julia, PostgreSQL, Google Cloud | Work: Software specialist, nablify, 2024–now |
| 2023 | Second year of ESIR: "how to develop a software from scratch, using the right tools… devOps methods… how to work in a team and how to manage a project" | Internship at LCSB (Luxembourg Centre for Systems Biomedicine), University of Luxembourg: "work in a software research laboratory… python, bash, docker, gitlab webhook" | Work: Intern, LCSB, 2023. **Note:** the Astro draft dates this 2022; the old site (closer to the event) says 2023, kept |
| 2021 | DUT in electrical engineering, Rennes University: "signal oriented maths and physics, industrial automation and embedded programming in C and Python. This is during this formation that I learned a lot of things myself about programming" | Internship at Schneider Electric SETBT, Chartres-de-Bretagne: "simulation software for connected power circuit breaker: current, voltage and all the different powers it measured. Connected with a PLC and a HMI" | Education: DUT 2019–2021. Work: Intern, Schneider Electric, 2021 |
| 2019 | Baccalaureate STI2D SI EE, Bréquigny high school: "basics of programming as well as other notions about heat, lighting, and a lot of other subjects" | Summer job 2019–2023, GEFA laboratory, Châteaugiron: "work with a team and with other people… manage my time during tasks" | Education: Bac 2019. Work: Summer jobs, GEFA, 2019–2023 |

Astro draft also had "ESIR 1st year" (2022: fundamentals, algorithms, system design) as a separate entry; merged into the single ESIR row.

## Projects (old `/projects` page + sub-pages)

| Old card | Old text | Links | New site |
|---|---|---|---|
| Roomba simulator | "A robot sandbox simulator powered by a from-scratch created language, developed with langium" | https://robot.ronantremoureux.fr/ (live, 2026-10-18) | kept, "Try it" |
| quickQR | "An ultra light design for qr code generator" | https://quickqr.ronantremoureux.fr/ (live); repo https://github.com/lumi-git/quickQR ("nolib/from scratch qr code generator") | kept, "Try it" + "Code" |
| GameScript | "A javascript/typescript optimized game library"; the page embedded a demo built on the `@ronantmx/gamescript` npm package | repo https://github.com/lumi-git/GameScript ("game library for JavaScript working with p5 JS as graphic renderer"); npm @ronantmx/gamescript | kept, "Code" + "npm"; the embedded demo dropped |
| Python game lib (PyGine) | "A Game library called PyGine, in Python" | https://github.com/PythonGameEngineDev/PyGine (org also has minesweeper, QuadTreeDemo, SpatialHashDemo, GameExample_1) | kept, "Code" |
| Language compiler | "A compiler for an arbitrary language in java" (page: "During the years…", unfinished) | repo https://github.com/lumi-git/TLC_Project_While ("we are a team of 4, doing a new top technologic language") | kept as "While compiler", "Code". The draft guessed `lumi-git/WhileCompiler`, which does not exist |
| Ant Farm | "An ant farm simulation in C++ with graphics. During my first year of engineering school, I had many projects in C++, among them a simulation of an ant farm" | none (the draft's `lumi-git/AntFarm` does not exist) | kept, no link |
| Others websites | "University Mobility map: world map showing locations of old internships done by university students all over the world, with local contacts" · "Next.js app: testing Next.js in a simple website" · "Roomba simulator sandbox" | https://esir-mobility-map.vercel.app/map (live) · https://next.ronantremoureux.fr (dead, 2026-10-18) · robot link above | mobility map kept as a card; Next.js app dropped (dead link) |
| Dot Connection | "A simple demo – Dot connection lead by p5 library in JS" (interactive, `DotConnection.svelte`) | — | dropped: needs p5 at runtime |
| Ballons | "A simple demo – Ballon simulation lead by p5 library in JS" (interactive, `GameBox.svelte`, "LeftClick to free ballons") | — | dropped: needs p5 at runtime |

Other public repos not on the old site (for a future card): Gava (Java game engine on OpenGL), Gamepp (C++ game library), LumiCompany (Lethal Company mod), CocAPI (Python, on PyPI as cocapiwrapper), GitlabProjectsExplorer (Mermaid graph of GitLab projects).

## Skills (old `/skills` page + Astro `resume.ts`)

Soft skills, old wording: **Team Working** "trained to work in a team… also used this ability during my internship at Schneider Electric" · **Organized** "the difference between a good and a bad project is the organization" · **Curious** "I need to be aware of the new technologies on the market… always learn new things" · **Problem-Solving** "the step by step approach: first analyse the situation, provide a plan, then execute the plan" · **Autodidact** "a lot I learned by myself, by making projects; practicing is the best way to learn". → `#skills` › How I work.

Certifications: **ETS TOEIC** 885, B2 (old site: "Speaking 455 / Writing 430"; draft: "Listening 455 · Reading 430", which is what TOEIC L&R measures, kept) · **Electrical habilitation** "level B01V". → `#skills` › Certifications.

Working tools (old, as logo images): main languages C++, C, C#, HTML, JavaScript, Python, Java · IDEs JetBrains, VS Code · OS Windows, macOS, Linux. Draft lists: languages Python, TypeScript, JavaScript, Java, C++, C, C#, Julia, HTML/CSS, Svelte, Bash · DevOps Docker, Git, GitLab CI/CD, Kubernetes, Google Cloud · tools JetBrains IDEs, VS Code, Linux, macOS, Windows, PostgreSQL. → `#skills` › Languages / DevOps & cloud / Tools, as text tags (the logo PNGs are gone).

Contests (old `/about` page): **SWERC 2023** "I participate with my team PBI at the ICPC SWERC 2023 at Milano, Italy" (link https://swerc.eu/2022/theme/scoreboard/public/) · **Break The Code 2022** "with my team, at Rennes, managed by Sopra Steria" (https://breakthecode.soprasteria.fr) · **Coding Battle 2019–2022** "online coding competition" (https://le-shaker.com/coding-battle/) · **Battle Dev 2019** "online coding competition" (no link). The page ended with "In Coming..". → `#skills` › Competitions.

## Contact (old home page + draft)

Old: "Contact Me at Contact@ronantremoureux.fr. Interested in my profile? Leave me a message, I'll answer as fast as possible." and an EmailJS form (email, subject, message; service `service_oygafy5`, template `template_7u0r2ki`, public key `deo-7Gb6aCtI4A3aj`). The draft kept the same form with success/error states. → `#contact`: e-mail (copies on click), LinkedIn, GitHub, CV. **No form** (owner decision Oct 2026, like the nablify site).

## Assets (old `static/`, all stashed or in HEAD)

CV.pdf (kept, `public/CV.pdf`) · favicon.ico (replaced by `favicon.svg`, "RT") · logos: C, C++, C#, HTML5, JavaScript ×2, Java ×2, Python, Linux, macOS, Windows, JetBrains, VS Code (dropped) · R.png, RR.png, R_.png (old monograms, dropped) · pen.png, tacherouge/tachesmulti PNGs, downButton.PNG, buttonUp.mp3 (decoration, dropped).

## Dropped on purpose

- Frameworks and libraries: SvelteKit, Svelte, Tailwind, daisyUI, AOS, p5 / p5-svelte, svelte-feather-icons, EmailJS, Playwright tests, Prettier config; the Astro draft's Astro, Tailwind 4, Inter font.
- Visuals: daisyUI "night" theme, cyan–emerald gradient titles, mouse-following background, logo images, "mockup-window" boxes, scroll-triggered AOS animations.
- Pages: separate routes, the resume preview page, the "What's new?" page, the two p5 demos, the GameScript demo.
- The FR translation (draft only; strings in the stash).
