# Analytics Events

Analytics are optional for hackathon; if added, keep them privacy-minimal.

## Product events

- `room_created`
- `room_joined`
- `onboarding_started`
- `onboarding_completed`
- `reaction_submitted`
- `vibe_vote_submitted`
- `secret_request_submitted`
- `track_selected`
- `track_skipped`
- `lyrics_opened`
- `lyric_action_used`
- `lyric_moment_saved`
- `realtime_reconnected`

## Properties

Prefer coarse/non-sensitive values:
- room size band;
- onboarding duration;
- provider;
- latency bucket;
- result code.

Do not send raw lyrics, secret request text, or full taste vectors to generic analytics by default.
