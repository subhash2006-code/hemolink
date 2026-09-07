# HemoLink (JavaScript version) — Run on Ubuntu

Pure JavaScript: React + Vite + Tailwind CSS. No TypeScript anywhere.

## Steps

```bash
cd ~/Downloads
unzip -o hemolink-js-source.zip -d hemolink-js
cd hemolink-js/hemolink-js
npm install
npm run dev
```

Open: http://localhost:8080

## Requirements

```bash
node -v   # v18 or newer
npm -v
```

Install Node if missing:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

## Structure

```text
hemolink-js/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx                  app entry
    App.jsx                   role selection page
    styles.css                design tokens + Tailwind
    lib/utils.js              className helper
    components/ui/button.jsx  button component
```

## Adding a Node.js backend later

Create a sibling `server/` folder with Express, run it on port 3000, and call it
from React with `fetch("http://localhost:3000/api/...")`.
