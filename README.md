# brigitjacoby.com

Marketing site for Brigit Jacoby, LCSW — a therapy practice based in Venice
Beach, CA. Built with Next.js, styled with Tailwind CSS, with a Sanity-backed
blog.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Sanity](https://sanity.io) (via `next-sanity`) as the headless CMS for blog posts
- [EmailJS](https://emailjs.com) for the contact form
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Environment variables

Create `.env.local` with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_REVALIDATE_SECRET=
```

The Sanity project ID/dataset connect the site to the blog content. The
revalidate secret authenticates the webhook Sanity calls on publish (see
below) — it isn't used for local dev unless you're testing that flow.

## Project structure

```
src/app/
  page.tsx           # root route, re-exports home/page.tsx
  home/               # homepage content (kept separate from page.tsx
                       # so the old /home URL can redirect to / — see
                       # next.config.ts)
  about/, services/, teens/, contact/
  blog/               # Sanity-backed blog index + [slug] post pages
  components/         # Navbar, Footer (shared across all pages)
  api/revalidate/     # webhook Sanity calls on publish to refresh
                       # cached blog pages (ISR)
  sitemap.ts, robots.ts

src/sanity/
  env.ts              # reads the Sanity env vars above
  lib/client.ts        # Sanity client
  lib/queries.ts       # GROQ queries used by the blog pages
  lib/image.ts          # image URL builder for Sanity assets
```

## Content editing

Blog posts are written and published in Sanity Studio, which is hosted
separately (not part of this repo) and connects to the project ID/dataset
above. Publishing or updating a post fires a webhook to `/api/revalidate`,
which revalidates the cached `/blog` and `/blog/[slug]` pages so changes go
live without a redeploy.

Everything else (home, about, services, teens, contact copy) is plain
JS/TSX content in `src/app/**/page.tsx` — edit and redeploy.

## SEO / copy conventions

- **Primary geo identity is Venice Beach**, with Santa Monica / LA / the
  Westside as secondary supporting terms — this is intentional positioning,
  not an oversight. See the JSON-LD `areaServed` list in `layout.tsx` for
  the fuller service-area list used for local search.
- **Title tags**: the root layout (`layout.tsx`) defines a title template
  (`"%s | Brigit Jacoby, LCSW"`). Leaf pages should set a plain, descriptive
  `title` string and let the template append the brand name — don't
  hardcode "| Brigit Jacoby, LCSW" onto a page's own title, or it renders
  twice (this happened before; see PR #18/#19 history).
- The `/teens` page is deliberately excluded from the main nav (it's in the
  footer + sitemap instead) — it's a distinct-audience landing page that
  would dilute the adult-focused homepage identity if promoted equally in
  primary nav.

## Deployment

Live at [brigitjacoby.com](https://brigitjacoby.com), deployed on Vercel.
Pushes to `main` deploy automatically.
