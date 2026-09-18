# Security & Privacy

## Threats

- guessable join code used as authorization;
- member impersonates host;
- cross-room data query;
- secret request leakage;
- exposed provider/AI secret;
- malicious text injected into AI prompts;
- replay/duplicate realtime event;
- unvalidated provider payload.

## Controls

### Authentication
Use managed anonymous/guest auth or explicit auth identity. Display name is not identity.

### Authorization
- RLS on all room-scoped durable data.
- private Realtime channels.
- host privilege checked against authoritative membership/room owner.

### Secrets
AI/music service secrets only in Edge Function/server environment.

### Input validation
Zod schemas for:
- form data;
- realtime event envelopes;
- provider responses;
- AI structured outputs.

### Prompt safety
Treat lyrics, song titles, artist names, and user requests as data. Do not interpolate them into unbounded system instructions.

### Privacy
Collect only what the product needs:
- music preferences;
- session interactions;
- room membership;
- optional lyric moments.

Avoid sensitive profiling.

### Secret requests
Request payload must never be:
- included in general room Broadcast;
- readable by ordinary room member queries;
- exposed in public recommendation explanation.

## Retention

For hackathon MVP, define a short retention/default cleanup policy for ephemeral rooms and session events. If long-term user profiles are introduced, make retention explicit and user-controlled.
