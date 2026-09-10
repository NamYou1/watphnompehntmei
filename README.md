# Wat Phnom Penh Tmei

Bilingual (English and Khmer) React website for Wat Phnom Penh Tmei in Sen Sok, Phnom Penh. The site presents the temple history, monks, construction project, activities, articles, contact details, and social links.

## Stack

- React 19 and React Router
- Vite with Rolldown
- Tailwind CSS and daisyUI
- PostgreSQL 15+ schema and seed data in [`database.sql`](database.sql)

The current UI reads its main content from local modules under [`src/components/Data`](src/components/Data). [`src/components/Data/api.js`](src/components/Data/api.js) contains prepared fetch helpers for a future or separately hosted API at `http://localhost:3000/api`.

## Features

- English and Khmer language toggle
- Light and dark theme toggle
- Responsive home page with activity, article, founder, and monk sections
- Activity list and detail pages with photo galleries
- Article list and detail pages with search and category filtering
- Temple history timeline and building-floor purpose pages
- Contact, footer, and social-media navigation

## Routes

| Path              | Page                                     |
| ----------------- | ---------------------------------------- |
| `/`               | Home                                     |
| `/about`          | Temple history                           |
| `/activities`     | Activity list                            |
| `/activities/:id` | Activity detail and gallery              |
| `/dhama-lessons`  | Dharma lessons                           |
| `/article`        | Article list                             |
| `/article/:id`    | Article detail                           |
| `/purpose`        | Construction project and floor structure |
| `/contact`        | Contact information                      |

## Run Locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

Useful commands:

```bash
npm run lint
npm run build
npm run preview
```

## Database

[`database.sql`](database.sql) targets PostgreSQL 15 or newer. It creates the bilingual content tables, timestamp triggers, reporting views, indexes, and seed data for the website.

Create a database, then run the script with `psql`:

```bash
createdb wat_phnom_penh_tmei
psql -d wat_phnom_penh_tmei -f database.sql
```

The script provides these views for API queries:

- `v_active_monks`
- `v_articles`
- `v_activities`
- `v_footer`

The frontend is not currently connected to PostgreSQL directly. A backend should expose the paths used by [`api.js`](src/components/Data/api.js): `/categories`, `/authors`, `/monks`, `/activities`, `/articles`, `/temple-history`, `/contact-info`, `/footer`, and `/activity-photos`.

## Content Updates

- Update monk records in [`src/components/Data/dataMonk.js`](src/components/Data/dataMonk.js) for the current local UI.
- Update activities and galleries in [`src/components/Data/artivities.js`](src/components/Data/artivities.js).
- Update articles in [`src/components/Data/articleData.js`](src/components/Data/articleData.js).
- Add imported images under [`src/assets`](src/assets) and export them from the matching asset index file.
- Keep the corresponding PostgreSQL seed row in [`database.sql`](database.sql) updated when the database is used.

For article page details, see [`ARTICLE_GUIDE.md`](ARTICLE_GUIDE.md).

## Deployment

Build the static site with `npm run build`. The generated `dist` directory can be deployed to Vercel or another static host. The rewrite configuration is in [`vercel.json`](vercel.json), so client-side routes continue to resolve after deployment.

## Project Structure

```text
src/
├── admin/             Optional dashboard screens
├── assets/            Temple, activity, monk, and article images
├── components/        Pages, cards, data modules, and shared controls
├── context/           Language and theme providers
├── hooks/             Reusable React hooks
├── Layout/            Navbar, footer, and root layout
└── routes/            React Router configuration
```
