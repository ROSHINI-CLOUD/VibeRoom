# Data Model

## Core entities

### Profile
User/session identity and display name.

### TasteProfile
Stable-ish preferences:
- language weights;
- artist affinity;
- style/features;
- baseline energy;
- discovery tolerance;
- confidence;
- version.

### Room
- id;
- join_code;
- host_user_id;
- status;
- created_at;
- current_session_id.

### RoomMember
- room_id;
- user_id;
- role;
- joined_at;
- ready_at.

### RoomSession
- id;
- room_id;
- current_track_id;
- playback_state;
- started_at;
- target_vibe;
- energy_target.

### Track
Normalized internal representation independent of provider.

### SessionTrack
Track played/queued plus score snapshot and reasons.

### Reaction
User response to track.

### SecretRequest
Private request and fulfillment status.

### LyricMoment
Saved lyric context linked to a track/user.

## Identity

For hackathon, anonymous/guest identity can be supported through managed auth/session identity. Do not use display name as the security identity.

## Derived data

Group vector, room health, fairness debt, and recommendation score breakdown may be computed/cached. Do not treat them as user-entered truth.
