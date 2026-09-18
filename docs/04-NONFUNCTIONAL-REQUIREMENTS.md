# Nonfunctional Requirements

## Reliability
- Primary demo flow must work with provider fallback.
- Realtime reconnect must not corrupt room state.
- Duplicate events should be idempotent where persistence is involved.

## Latency targets
- Reaction UI feedback: immediate optimistic response.
- Realtime peer visibility: target feels instantaneous under normal network conditions.
- Next-track decision: should complete before current track ends; never block playback UI on explanation generation.

## Security
- RLS for room-scoped tables.
- Private realtime channel authorization.
- least privilege;
- secrets server-side only.

## Privacy
- minimal profile data;
- explicit retention strategy;
- secret requests are not part of public event payloads.

## Accessibility
- keyboard operable;
- visible focus;
- readable contrast;
- reduced motion support;
- touch targets suitable for mobile.

## Maintainability
- external services behind adapters;
- domain logic testable without React/Supabase;
- strict TypeScript;
- runtime schemas at integration boundaries.
