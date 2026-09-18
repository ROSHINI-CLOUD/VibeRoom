# Error Handling & Resilience

## Error taxonomy

- `AUTH_*`
- `ROOM_*`
- `REALTIME_*`
- `PROVIDER_*`
- `LYRICS_*`
- `AI_*`
- `VALIDATION_*`

UI maps codes to friendly recovery text.

## Realtime failure

Show reconnecting state; preserve local UI; reload authoritative room on reconnect.

## Provider failure

Skip unavailable candidate. If provider is broadly down, switch to demo/seed mode for hackathon demo.

## AI failure

Core ranking must still work. Explanation/translation can degrade to unavailable state.

## Lyrics failure

Do not generate fake lyrics. Show unavailable and continue playback experience.

## Host disconnect

MVP may pause authoritative playback interaction and show “Host disconnected.” Automatic host handoff is deferred unless deliberately implemented/tested.

## Idempotency

Use event IDs/mutation identifiers where duplicate persistence could create incorrect counts.
