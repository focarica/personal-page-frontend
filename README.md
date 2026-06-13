# artvniss.com — personal site

Frontend for my personal website. A space for notes, blog posts, and things I'm learning. Built with Angular 21 and Tailwind CSS 4.

## Stack

- **Angular 21** — standalone components, signals
- **Tailwind CSS 4** — utility-first styling
- **ngx-markdown + Prism.js** — markdown rendering with syntax highlighting
- **TypeScript 5.9**

## Pages

| Route | Description |
|---|---|
| `/` | Home — latest posts list |
| `/posts/:id` | Post reader (markdown) |
| `/about` | About me |
| `/curriculum` | CV / projects |
| `/find-me` | Links & contacts |

## Running locally

```bash
npm install
npm start
```

Opens at `http://localhost:4200`. The app expects a backend at `http://localhost:8080` by default (see `src/environments/environment.ts`).

## Build

```bash
npm run build
```

Output goes to `dist/`. The production environment points to `https://api.artvniss.com`.

## Project structure

```
src/
├── app/
│   ├── features/        # page components (home, post, about, cv, find-me)
│   ├── shared/          # navbar, error pages, icons, models
│   ├── http.service.ts  # API client
│   └── app.routes.ts    # routing
├── environments/        # dev / prod config
└── styles/              # global SCSS + theme
```
