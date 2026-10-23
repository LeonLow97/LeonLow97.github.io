# Portfolio

Static portfolio hosted on [GitHub Pages](https://leonlow97.github.io/). The site uses plain HTML, CSS, and JavaScript; it has no build step or package dependencies.

## Local preview

From the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000/`. This also lets you test navigation to the pages under `pages/`.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Main portfolio page |
| `pages/` | Certifications and project detail pages |
| `css/general.css` | Main page foundations and shared visual components |
| `css/style.css` | Main page sections |
| `css/queries.css` | Main page responsive rules |
| `css/certifications.css` | Standalone certifications page styles |
| `css/project-page.css` | Standalone project page styles |
| `css/theme.css` | Theme toggle and dark theme overrides |
| `css/world.css` | Pixel-art scene, controls, panels, and responsive styling |
| `js/script.js` | Main page navigation, contact form, and browser fallback |
| `js/certifications.js` | Certification data and table rendering |
| `js/theme.js` | Theme selection and persistence |
| `img/` | Images and icons, including the day/night scenes and avatar in `img/world/` |

The three project detail pages are drafts and are not linked from the home page. Project cards currently link directly to their GitHub repositories. The contact form opens a prefilled email draft in the visitor's email app.

## Colors

The light theme uses off-white surfaces, navy text, teal actions, and coral highlights. `css/theme.css` defines the dark theme and the shared coral tokens. `css/world.css` adds the pixel-art presentation and switches the hero scene with the saved theme. The page stylesheets define their own base color tokens because each secondary page loads independently; update all three base palettes together when changing them.

Large headings use Oxanium for a softer game-inspired look. Pixelify Sans remains on the brand and small section labels, while Plus Jakarta Sans keeps body copy readable.

## Editing conventions

- Use descriptive `camelCase` names for JavaScript variables and functions. Name DOM references for their role, such as `mobileNavButton` or `skillsPanel`.
- Keep CSS class names in the existing kebab-case style, including modifier classes such as `btn--full`.
- Keep page-specific styles in the corresponding stylesheet. Check both light and dark themes, desktop and mobile layouts when changing styles.
- Add certifications to the `certifications` array in `js/certifications.js`; the main page preview and full list use the same data.
