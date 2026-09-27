# Priyanshu Agarwal — Portfolio (React + Vite + Tailwind)

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
```

## Structure

- `src/data.js` — all resume content (profile, skills, experience, projects, education). Edit this file to update the site.
- `src/components/` — one component per section (Nav, Hero, Skills, Experience, Projects, Education, Footer).
- `src/App.jsx` — composes the sections.
- Styling is Tailwind CSS utility classes, themed via `tailwind.config.js` (colors: `bg`, `surface`, `line`, `ink`, `muted`, `accent`).

## Deploy

Works out of the box on Vercel or Netlify: connect the repo, framework preset "Vite", build command `npm run build`, output directory `dist`.
