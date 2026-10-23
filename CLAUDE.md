# Raheel Mughal — Portfolio

Static personal portfolio, hosted on GitHub Pages at `raheelmughal018.github.io` (repo `RaheelMughal018/RaheelMughal018.github.io`). Design recreated by hand from the Framer template https://sawad.framer.website/ — keep that look. No template credit in the footer (owner's choice).

## Stack
Plain HTML, CSS, JS. No build step, no dependencies. Fonts from Google Fonts (Poppins, Inter).

## Structure
- `index.html` — the whole single-page site (sections: home, projects, case-study, experience, tools, ai, contact)
- `assets/css/style.css` — all styles; colors are tokens on `:root`
- `assets/js/main.js` — scroll reveal + active nav highlight
- `assets/img/` — project screenshots, favicon, profile photo `raheel.jpg`
- `assets/icons/` — Simple Icons logos, recolored with each brand's color via a `fill` attribute
- `assets/Raheel-Mughal-Software-Engineer.pdf` — resume linked from the site

## Run locally
`python3 -m http.server 4321` then open http://localhost:4321

## Rules
- Content comes from the resume; never add invented stats or clients.

## Docs
- [`docs/SPECIFICATION.md`](docs/SPECIFICATION.md) — plain-language description of the site
- [`docs/requirements/00-project-overview.md`](docs/requirements/00-project-overview.md)
