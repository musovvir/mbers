# MBers Laboratory

Marketing site for MBers Laboratory — SEO and AI SEO consulting.  
Locales: English (`/`), Russian (`/ru`), Arabic (`/ar`, RTL).

Stack: Next.js (App Router), React, next-intl, Sass, Three.js (hero globe), Nodemailer (contact form).

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

See `.env.example`. Required for production:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (sitemap, Open Graph, JSON-LD) |
| `CONTACT_TO_EMAIL` | Inbox for the contact form |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM` | Outgoing mail |

Without SMTP settings the form validates but does not send mail.

## Content

Copy lives in `src/content/`, split by section and locale:

```text
src/content/
  home/{en,ru,ar}.ts
  services/  about/  faq/  articles/  cases/  legal/  listings/
  ui/{en,ru,ar}.json   # chrome strings (nav, form, footer)
```

Edit the locale file you need (e.g. `src/content/home/ru.ts`). Keep `en` / `ru` / `ar` in sync for shared structure.

Search `TODO(real-data)` for placeholders still waiting on real company data (email, phone, address, legal entity, SMTP, case metrics).

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # serve the build
npm run lint     # ESLint
```

## Deploy

Build output is a standard Next.js app. On Vercel: connect the repo, set the env vars above, deploy.
