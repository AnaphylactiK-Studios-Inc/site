# AnaphylactiK Studios Website

Wevsite for AnaphylactiK Studios, built with React, TypeScript, and Vite.
The site is a single landing page deployed to GitHub Pages.


## Tech Stack

- **React** with **TypeScript**
- **Vite**
- **SCSS Modules**
- **OGL**
- **ESLint**


## Getting Started

Requires Node.js 22.

```bash
npm install      # install dependencies
npm run dev      # start the local dev server
npm run build    # produce a production build in dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```


## Project Structure

```
.
├── .github/workflows/main.yml   # GitHub Pages build and deploy pipeline
├── public/                      # static assets served as-is (favicons, manifest)
├── index.html                   # app entry HTML
├── src/
│   ├── main.jsx                 # application entry point
│   ├── assets/                  # fonts and images
│   │   ├── fonts/
│   │   └── images/
│   ├── components/              # one folder per component
│   │   ├── LandingPage/         # top-level page that composes the sections
│   │   ├── Navbar/
│   │   ├── HeroSection/
│   │   ├── MissionSection.tsx/
│   │   ├── GamesSection/
│   │   ├── CrewSection/
│   │   ├── SectionTag/
│   │   └── Footer/
│   └── styles/                  # global styles and font declarations
│       ├── _fonts.scss
│       └── styles.scss
├── typings/declarations.d.ts    # ambient TypeScript declarations
├── vite.config.js               # Vite config (note: `base` path, see Deployment)
├── tsconfig.json
└── eslint.config.js
```

Most components follow the same layout: a `.tsx` file for markup and logic
alongside a `.module.scss` file for its scoped styles.


## Contributing / Making Edits

1. Create a branch off `main` for your change.
2. Run `npm run dev` and make your edits.
3. Run `npm run lint` and `npm run build` to confirm the project lints and builds
   cleanly.
4. Open a pull request against `main`. Once merged, the site deploys automatically
   (see Deployment below).


## Deployment

Deployment is handled by GitHub Pages via the workflow in
[.github/workflows/main.yml](.github/workflows/main.yml). Every push to `main`
triggers a build (`npm run build`) and publishes the resulting `dist/` folder.

Note the `base` option in [vite.config.js](vite.config.js). It is currently set to
`'/site/'` so assets resolve correctly under the project-pages URL. If the site
moves to a custom domain, change `base` back to `'/'`.
