# Testing Strategy

## Unit

Pure domain:
- taste normalization;
- candidate scoring;
- fairness debt;
- group-fit floor;
- VibeBridge progress;
- lyric timestamp parsing;
- event schema parsing.

## Integration

- Supabase repository functions;
- RLS with two unrelated rooms;
- host vs member permissions;
- adapter normalization;
- realtime event encode/decode.

## E2E

Playwright core flows:
1. create room;
2. second browser joins;
3. onboarding;
4. presence visible;
5. reaction appears;
6. host changes track;
7. member mirrors state;
8. secret request stays private;
9. lyrics open;
10. reconnect/refresh restores room.

## Contract fixtures

External providers should have captured sanitized fixtures so tests do not depend on live APIs.

## Demo test

Before presentation, run a manual 3–5-device rehearsal with actual venue network conditions if possible.
