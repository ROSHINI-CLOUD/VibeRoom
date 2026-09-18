# External References Used During Planning

Accessed during initial planning on 2026-09-18.

## GSD
- GSD documentation / architecture / user guide from the public `gsd-build/get-shit-done` documentation.
- Core artifact concept: `.planning/PROJECT.md`, `REQUIREMENTS.md`, `ROADMAP.md`, `STATE.md`, config, research, and phase plans.
- Configuration reference describes `.planning/config.json` and workflow toggles.

## Supabase
- Realtime overview: Broadcast, Presence, Postgres changes.
- Broadcast: low-latency client events.
- Presence: connected/shared user state; not intended for rapid high-frequency updates.
- Realtime Authorization: private channel access controlled with RLS-style policies.

Official docs:
- https://supabase.com/docs/guides/realtime
- https://supabase.com/docs/guides/realtime/broadcast
- https://supabase.com/docs/guides/realtime/presence
- https://supabase.com/docs/guides/realtime/authorization

## LRCLIB
LRCLIB public API documentation describes searchable lyric records with plain and synchronized lyrics, client identification requirements, and rate-limit handling.

- https://lrclib.net/docs

## Important

External services change. Agents implementing a provider integration must re-check the provider's current docs/terms rather than relying only on this snapshot.
