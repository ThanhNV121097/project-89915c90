# Architecture Overview — Character Counter

## Shape and scope

- Shape: `static` — frontend only. No backend, database, migrations, API, or server-side storage.
- Product: one browser-only Character Counter page.
- Data flow: visitor types text in client state; UI derives `value.length`; Clear resets state and focus. Nothing leaves browser.

## Stack

| Part | Choice | Reason | Rejected alternative |
|---|---|---|---|
| Frontend | Next.js 15 App Router + TypeScript | Matches repo CI/container conventions and supports static UI with strict typing | Plain HTML would be smaller but would not match established scaffold/CI |
| Styling | Tailwind v3 + `app/globals.css` design tokens | Fast component styling while keeping approved tokens centralized | CSS-in-JS adds dependency and no benefit |
| Backend | None | SRS forbids backend/storage; count is derived in browser | Go API would be dead weight |
| Database | None | No persistence required | PostgreSQL would add runtime cost with no data |

## Repository layout

```text
code/
  frontend/
    app/layout.tsx          Root metadata and shell
    app/page.tsx            Server composition root; future story mounts component here
    app/globals.css         Shared tokens, base styles, reusable utilities
    components/             Story-owned components, PascalCase default exports
    lib/mock/               Story mock data only if needed
docs/
  general/SRS.md            Approved requirements
  architecture/overview.md  This file
```

`code/backend/` intentionally absent. Static shape has no backend.

## Frontend conventions

- `app/page.tsx` stays Server Component. It imports and renders story components only.
- Any component using state, events, refs, effects, or browser APIs starts with literal first line `"use client"`.
- React component files use `export default function ComponentName()`.
- Story component file path: `code/frontend/components/{StoryTitlePascalCase}.tsx`.
- Component CSS modules may use only tokens defined in `app/globals.css`; no token fallbacks.
- Shared visual tokens live in `app/globals.css` and cover color, spacing, typography, radius, shadow, and motion.

## Environment

Frontend reads no environment variables today.

Tracked examples:

- Root `.env.example`: `FRONTEND_PORT`, `FRONTEND_MEM_LIMIT`, `IMAGE_REPO`, `IMAGE_TAG` for compose/deploy overrides.
- Frontend `.env.example`: documents that no `NEXT_PUBLIC_*` keys are required.

No secrets required.

## Run and verify

From repository root:

```bash
docker compose up --build
```

Local frontend checks:

```bash
cd code/frontend
npm ci
npm run lint
npm run build
npm test --if-present
```

CI gate: `.github/workflows/ci.yml` runs frontend install, lint, build, optional tests, and CSS token checks on pull requests. Container workflow remains committed infrastructure and is not edited here.

## Risks and rollout

- Main risk: story code accidentally moves count logic into `app/page.tsx`, causing merge conflicts. Keep page as thin composition root.
- Accessibility risk: live count and focus return must be implemented in client component, not scaffold.
- Rollout: static frontend deploy only; no migrations, compatibility step, or secret setup.
