# Studio Website

Static site (HTML + CSS + a little vanilla JS), built from the Figma file
"Studio-Website".

## Run locally

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Structure

- `index.html` — homepage sections (hero, video, selected works, statement, services, contact, footer) and the case study overlay
- `styles.css` — all styles; design tokens are at the top in `:root`
- `case-study.js` — case study overlay: open/close transition, routing (`#work/<slug>`), and the `PROJECTS` content (currently dummy)
- `assets/` — icons and divider lines exported from Figma

## Open TODOs

- Real contact email for "Let's collaborate"
- Social profile URLs in the footer
- Studio name / logo in place of "Our Logo"
- Real project content and imagery for the case studies
