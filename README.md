# AI-Assisted Product Backlog & Prioritization Tool

Production-ready Next.js setup for an AI-assisted backlog and prioritization workflow. This repository is intentionally minimal and ready for feature development.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Supabase (PostgreSQL)
- OpenAI SDK (server-side only)
- ESLint + Prettier

## Getting Started (Local)

1. Create a local environment file:

	```bash
	cp .env.example .env.local
	```

2. Fill in the environment variables in `.env.local`.

3. Run the dev server:

	```bash
	npm run dev
	```

Open http://localhost:3000 in your browser.

## Notes

- API routes live under `app/api`.
- Server-only integrations live in `lib/` (Supabase, OpenAI).
- No business logic or schema has been defined yet.
