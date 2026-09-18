# Technical Architecture

## Context diagram

```text
Member phones ─┐
Host device ───┼─> React Web App
               │      │
               │      ├─ Supabase Auth/Postgres
               │      ├─ Supabase Realtime
               │      └─ Edge Functions
               │            ├─ AI Provider
               │            ├─ Music Provider Adapter
               │            └─ Lyrics Provider Adapter
               │
               └─ Host audio output only
```

## Why managed backend

The team should spend hackathon effort on recommendation intelligence and experience, not server process management. Supabase provides the necessary database, authorization, realtime primitives, and server-side function boundary.

## State ownership

### Postgres
Authoritative:
- rooms;
- members/roles;
- taste profiles;
- current session state;
- session track history;
- durable reactions/aggregates;
- secret requests;
- lyric moments.

### Realtime Broadcast
Transient:
- reaction burst;
- vibe vote;
- now-playing state hint;
- UI pulse;
- host action notification.

### Presence
- active connected members;
- lightweight status such as ready/listening.

## Frontend boundaries

- feature modules own UI/use-cases;
- `domain/` owns pure ranking/fairness/bridge logic;
- `lib/providers/` owns external adapters;
- `lib/realtime/` owns topic/event encoding;
- no component should directly construct raw provider requests.

## Edge Functions

Use for:
- LLM explanation/translation;
- music-provider calls requiring secrets;
- privileged mutations if needed;
- signed/validated room operations that must not trust client role assertions.

## Scalability

Hackathon goal is small rooms. Avoid premature distributed-system complexity. Architecture leaves room to move ranking to server-side jobs/functions later if required.
