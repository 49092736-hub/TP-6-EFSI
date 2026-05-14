## Purpose

Provide concise, actionable guidance for AI coding assistants working in this repository.

## Big picture

- This is a small React + Vite app. Entry point: [src/main.jsx](src/main.jsx) → mounts [src/App.jsx](src/App.jsx).
- UI components live under [src/assets/Componentes/](src/assets/Componentes/) with paired CSS files (e.g., `MovieCard.jsx` + `MovieCard.css`).
- Build + dev are handled by Vite (see [vite.config.js](vite.config.js)). ESLint config lives at [eslint.config.js](eslint.config.js).

## Developer workflows (explicit)

- Install deps: `npm install` (project currently omits `axios` even though it's imported in source; see "Known issues").
- Dev server: `npm run dev` (uses Vite).
- Build: `npm run build`.
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (uses the project-level `eslint.config.js`).

## Project-specific patterns & conventions

- Functional React components with hooks are used throughout (see [src/App.jsx](src/App.jsx)).
- CSS is colocated with components; file names match component names (e.g., [src/assets/Componentes/MovieCard.css](src/assets/Componentes/MovieCard.css)).
- Components are organized under `src/assets/Componentes/` — expect component logic + a same-named `.css` file.

## Notable, discoverable issues to watch for

- Missing dependency: `axios` is used in [src/App.jsx](src/App.jsx) and imported (capitalization error) in [src/assets/Componentes/SearchBar.jsx](src/assets/Componentes/SearchBar.jsx). Add via `npm install axios`.
- Invalid import in SearchBar: `import axios from Axios;` — should be `import axios from 'axios'`.
- Anti-pattern in [src/App.jsx](src/App.jsx): `useEffect(async () => { ... }, [])` — prefer `useEffect(() => { async function fetch(){...}; fetch(); }, [])` to avoid subtle issues.
- Several component files are empty or incomplete (e.g., `MovieList.jsx`, `MovieCard.jsx`); expect runtime or compile errors until implemented.

## How to make safe, high-impact edits

- When adding libraries, update `package.json` and run `npm install` locally. Example: `npm install axios --save`.
- Fix imports with exact casing and string literals (e.g., `'axios'`).
- Prefer small, focused PRs that: (1) make a component compile, (2) add unit/UI test (if applicable), (3) run `npm run lint` and `npm run dev`.

## Examples (explicit references)

- Entry + data fetch: [src/App.jsx](src/App.jsx) fetches `https://jsonplaceholder.typicode.com/users` via `axios`. If adding or changing network code, mirror this pattern or centralize fetches in a `services/` helper.
- ESLint: use `npm run lint` and follow rules in [eslint.config.js](eslint.config.js) — project expects JSX in `.jsx` files and React Hooks plugin is enabled.

## If you are an AI assistant: checklist for safe edits

1. Run `npm install` locally; ensure `axios` is present if files import it.
2. Run `npm run lint` and `npm run dev` to reproduce errors before fixing.
3. Prefer non-breaking, single-concern changes (fix import, add dependency, implement stub component).
4. Add brief tests or a manual verification step in the PR description.

## Questions for the repo owner

- Should `axios` be added to `package.json`? (observed in `App.jsx` and `SearchBar.jsx`)
- Are empty component files intended as stubs for the exercise? Clarify which components are priority.

---
If you'd like, I can open a PR that:
- fixes the `axios` imports and adds it to `package.json`,
- corrects the `useEffect` pattern in `App.jsx`,
- and make `SearchBar.jsx` compile.
