# Research — Pitfalls

1. **Multi-phone audio sync rabbit hole** — defer.
2. **Client-authoritative host controls** — security bug; enforce role.
3. **Presence used for high-frequency events** — use Broadcast instead.
4. **Every reaction persisted synchronously before UI feedback** — feels laggy; optimistic event then durable write/aggregation.
5. **LLM-only recommendations** — hard to test and explain.
6. **Secret request leak** — never include it in general room payloads/explanations.
7. **Queue too long** — prevents live adaptation.
8. **Provider outage kills demo** — have seeded fallback catalog/tracks/metadata.
9. **No stable track identity mapping across providers** — define canonical internal track ID + provider IDs.
10. **Lyrics fetched directly from browser without cache/identification requirements** — centralize adapter and respect source requirements.
11. **Storing too much personal preference data** — use minimal profile and retention policy.
