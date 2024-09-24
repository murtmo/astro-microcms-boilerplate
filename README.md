# Astro + microCMS Starter Kit

## 🌱 Environment

node: v18.17.0
npm: 9.6.7

## 🛠️ Tech Stack

- Astro + SCSS
- microCMS

## API Structure

- Single API for both blog posts and news articles
- Use the `type` field to distinguish between content types

## API Schema

- `title`: Text field
- `content`: Rich editor
- `type`: Select field (options: "blog", "news")
- `category`: Content reference (refers to Category API)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
