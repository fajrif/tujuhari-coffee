# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page marketing site for Tujuhari Coffee (a Jakarta coffee brand), built with Next.js App Router. There is no backend, database, or CMS — everything is a static section on `app/page.tsx` sourced from data in `lib/`.

## Commands

```bash
npm run dev      # start dev server (Next.js)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next/core-web-vitals)
```

There is no test suite configured.

## Architecture

**Data/content is separated from presentation.** Every section component pulls its copy, links, and asset lists from a corresponding file in `lib/` (`lib/site-config.ts`, `lib/menu.ts`, `lib/locations.ts`, `lib/features.ts`, `lib/gallery.ts`, `lib/partners.ts`, `lib/event.ts`) rather than hardcoding strings inline. When changing copy, links, or images, edit the `lib/` file — not the component.

`README.md` is the authoritative source for real-world content (addresses, phone numbers, social/delivery-platform URLs). The `lib/` files were transcribed from it, and comments in those files note where content was deliberately *not* invented (e.g. `lib/site-config.ts`'s `navLinks` comment, `lib/locations.ts`'s comment on why footer/flagship map URLs differ). If README.md and a `lib/` file ever disagree, treat README.md as the source of truth and flag the discrepancy rather than guessing.

**Page = ordered stack of section components.** `app/page.tsx` renders `Header`, then one `<...Section>` component per `main` section, then `Footer`. Each section owns a DOM `id` used for anchor-nav scrolling (`#hero`, `#menu`, `#flagship-store`, `#locations`, `#gallery`, `#past-events`, `#collaboration`, `#partners`; feature section uses `#signature`). `lib/site-config.ts`'s `navLinks` maps header/nav-overlay entries to these anchors — keep the two in sync when renaming a section id.

**Styling: Tailwind v4 + shadcn, no tailwind.config.** Theme tokens (brand colors, radii, shadcn CSS variables) are defined in `app/globals.css` via `@theme inline` and `:root`, not a JS config file. `components.json` configures shadcn (`style: base-nova`, no prefix, aliases `@/components`, `@/lib`, `@/hooks`). Brand colors are exposed as `--color-brand-*` tokens (e.g. `bg-brand-green`, `text-brand-off-white`) — prefer these over ad hoc hex values. Use the `cn()` helper from `lib/utils.ts` (clsx + tailwind-merge) when composing conditional class names.

**Path alias:** `@/*` maps to the repo root (see `tsconfig.json`), matching the shadcn aliases in `components.json`.

**Client-side patterns to follow, not reinvent:**
- Scroll-triggered entrance animations go through the shared `<Reveal>` component (`components/reveal.tsx`), which wraps children in an `IntersectionObserver` and applies `tw-animate-css` enter classes — don't hand-roll a new observer for this.
- Responsive JS logic (as opposed to Tailwind breakpoints) goes through `useMediaQuery` (`hooks/use-media-query.ts`), an SSR-safe `useSyncExternalStore` hook that defaults to `false` on the server.
- Motion/transition work (e.g. the header's hamburger-to-X icon, nav overlay) uses `motion/react` (Framer Motion) and respects `useReducedMotion()`.
- Interactive sections needing `useState`/effects/`motion` must be marked `'use client'` (see `header.tsx`, `reveal.tsx`); the rest of the tree defaults to server components.

**Images:** `next.config.mjs` sets `images.unoptimized: true` (static export–style hosting), and existing components use plain `<img>` tags rather than `next/image`. All site imagery lives under `public/images/`, referenced by absolute path (e.g. `/images/menu-1.png`) from the `lib/` data files.

**Fonts:** a single custom font family ("NB International", regular + bold woff2 in `app/fonts/`) is loaded once in `app/layout.tsx` via `next/font/local` and exposed as `--font-nb-international`, mapped to `--font-sans`/`--font-title`/`--font-body` in `globals.css`.

**Analytics:** `@vercel/analytics` is mounted in `app/layout.tsx` gated on `NODE_ENV === 'production'` — don't remove that guard.

## TASKS

please make additional events with these additional JSON,
you will need to adjust for id and alt.

```json
```
{
  title: "Turnamen Catur Wijaya Vol. 1",
  description: "-",
  image: '/images/event-4.png',
},
{
  title: "Life After 98",
  description: "A fashion show by Nichol Elenna and exhibition by Rully Kesuma. Supported by Persona Management",
  image: '/images/event-5.png',
},

{
  title: "An Infinite Exploration",
  description: "Timeless Seeds [with Hijack Sandals and Bluesville",
  image: '/images/event-6.png',
},
{
  title: "Garden Riot" ,
  description: "A photography exhibition by DISK, featuring Ezra R., Vivien Nathania, and Chelsea Pearl",
  image: '/images/event-7.png',
},
```
```
