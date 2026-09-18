# Research — Stack

## Recommendation

React + Vite + TypeScript frontend; Supabase for Postgres/Auth/Realtime/Edge Functions; Vercel for web deployment.

## Why

The team is new to server operations. Supabase provides a managed database and realtime channel model without self-managing WebSocket infrastructure. Realtime Broadcast is appropriate for low-latency room events; Presence is intended for connected-state, while durable state remains in Postgres.

## Client libraries

- `@supabase/supabase-js`
- `@tanstack/react-query`
- `zod`
- `react-router-dom`
- Tailwind CSS
- testing: Vitest, React Testing Library, Playwright

## Rejected for MVP

- Self-managed Node WebSocket server: avoidable ops/debug burden.
- Redis/pubsub: unnecessary for hackathon scale.
- Next.js server-heavy architecture: workable, but Vite + Supabase is simpler for this team's client-first realtime product.
- Native apps: too broad.

## Important 2026 detail

Use current Supabase browser publishable credentials and server secret credentials according to the project dashboard; do not assume old key naming forever.
