# AuthPage (Signup) — Standalone

This is the Signup page (`AuthPage.jsx` / `AuthPage.css`) pulled out of the
main project so it can run on its own.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## What's included
- `src/AuthPage.jsx` — the Signup component (exported as default `Signup`)
- `src/AuthPage.css` — its styles
- `src/assets/logo.png.jpeg` — logo used by the page
- `src/main.jsx` — minimal entry point that renders `AuthPage` inside a
  `BrowserRouter` (needed because the page uses `<Link>` to `/login`)
- `index.html`, `vite.config.js`, `package.json` — Vite scaffolding

## Notes
- The page itself has no submit handler wired up yet (the "Sign Up" element
  is currently a `<Link to="/login">`, not a form submit) — that's carried
  over unchanged from your original file.
- Dependencies: `react`, `react-dom`, `react-router-dom`, `lucide-react`.
