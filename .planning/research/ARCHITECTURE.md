# Research — Architecture

## Main rule

Separate durable facts, transient realtime events, and derived recommendation state.

```text
React clients
  ↕ private Realtime channel
Supabase Broadcast / Presence
  ↕
Postgres authoritative state
  ↕
Edge Functions
  ├─ music provider adapter
  ├─ lyrics provider adapter
  └─ AI provider
```

## Durable
rooms, room_members, taste_profiles, session_tracks, reactions (or aggregated reaction history), secret_requests, lyric_moments.

## Transient
reaction animation, “typing/choosing”, vibe pulse, ephemeral toast, optimistic event acknowledgements.

## Derived
group taste vector, satisfaction window, fairness boost, target vibe, candidate score breakdown.

Derived state may be cached but must be reconstructable from durable/session facts for debugging.
