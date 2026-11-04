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

## Как добавлять и менять тексты

Все тексты сайта лежат в `src/content/`. Языки разделены по файлам: `en.ts` / `ru.ts` / `ar.ts` (или `.json` для UI).

```text
src/content/
  home/          главная
  services/      SEO и AI SEO
  about/         о компании
  faq/           вопросы и ответы
  articles/      блог
  cases/         кейсы
  legal/         политика и условия
  listings/      заголовки листингов (услуги, блог, кейсы, FAQ, контакты)
  ui/            навигация, футер, форма, общие подписи (JSON)
```

### Изменить существующий текст

1. Найдите нужный раздел в таблице ниже.
2. Откройте файл нужного языка, например `src/content/home/ru.ts`.
3. Поменяйте строку. Не удаляйте ключи и не меняйте их имена (`title`, `lead`, `slug` и т.д.) — от них зависит вёрстка и роутинг.
4. Если правка нужна на всех языках, повторите в `en.ts` и `ar.ts` (для UI — в `en.json` / `ru.json` / `ar.json`).
5. Сохраните файл. При `npm run dev` страница обновится сама.

| Что правите | Куда идти |
| --- | --- |
| Главная | `src/content/home/{en,ru,ar}.ts` |
| Страницы SEO / AI SEO | `src/content/services/{en,ru,ar}.ts` |
| О компании | `src/content/about/{en,ru,ar}.ts` |
| FAQ | `src/content/faq/{en,ru,ar}.ts` |
| Статья блога | `src/content/articles/{en,ru,ar}.ts` |
| Кейс | `src/content/cases/{en,ru,ar}.ts` |
| Legal | `src/content/legal/{en,ru,ar}.ts` |
| H1 / lead листингов | `src/content/listings/{en,ru,ar}.ts` |
| Меню, футер, форма, «Читать» | `src/content/ui/{en,ru,ar}.json` |
| Email компании в коде | `src/shared/config/site.ts` → `contactEmail` |

### Добавить новый текст в существующий блок

1. Откройте `types.ts` в той же папке (например `src/content/home/types.ts`) и добавьте поле в тип.
2. Добавьте значение с тем же ключом в `en.ts`, `ru.ts` и `ar.ts`.
3. Выведите новое поле в нужном компоненте/странице (`src/app/...` или `src/widgets/...`).

Для списков (этапы, FAQ, deliverables) обычно достаточно добавить ещё один объект в массив внутри `en` / `ru` / `ar` — структура как у соседних элементов.

### Добавить новую статью или кейс

**Статья** — `src/content/articles/`:

1. Скопируйте объект существующей статьи в массивах `en.ts`, `ru.ts`, `ar.ts`.
2. Задайте уникальный `slug` (латиница, через дефис) — из него строится URL `/blog/slug`.
3. Заполните `title`, `description`, `excerpt`, `publishedAt`, `minutes`, `service` (`"seo"` или `"ai-seo"`), `blocks`.
4. То же самое для `ru` и `ar` с тем же `slug`.

**Кейс** — `src/content/cases/`: та же схема, URL будет `/cases/slug`.

Новые slug подхватываются сами (статическая генерация читает список из контента).

### Добавить пункт FAQ

1. В `src/content/faq/{en,ru,ar}.ts` добавьте объект с уникальным `id`, `question`, `answer` во все три языка.
2. Чтобы показать его на главной или на странице услуги, добавьте этот `id` в массив `faqIds` в `home` или `services`.

### Важно

- Структуру ключей держите одинаковой во всех трёх языках.
- Не коммитьте секреты в тексты; почту формы и SMTP настраивайте через `.env.local` (см. `.env.example`).
- Черновики, которые ещё ждут реальных данных, помечены `TODO(real-data)` — удобно искать по проекту.

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # serve the build
npm run lint     # ESLint
```

## Deploy

Build output is a standard Next.js app. On Vercel: connect the repo, set the env vars above, deploy.
