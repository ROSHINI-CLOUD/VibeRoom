# Database Schema Proposal

Exact SQL belongs in migrations; this document defines intent.

## Tables

### profiles
`id uuid pk`, `display_name text`, timestamps.

### taste_profiles
`user_id uuid`, `version int`, `vector jsonb`, `confidence jsonb`, timestamps.

### rooms
`id uuid pk`, `join_code text unique`, `host_user_id uuid`, `status text`, timestamps.

### room_members
`room_id uuid`, `user_id uuid`, `role text`, `ready_at`, `joined_at`; unique `(room_id,user_id)`.

### room_sessions
`id uuid`, `room_id uuid`, `status`, `current_track jsonb`, `playback jsonb`, `target_vibe jsonb`, timestamps.

### session_tracks
`id uuid`, `session_id uuid`, `track jsonb`, `queue_position`, `status`, `score_breakdown jsonb`, `started_at`, `ended_at`.

### reactions
`id uuid`, `session_track_id uuid`, `user_id uuid`, `kind text`, timestamps; constrain duplicate policy.

### vibe_votes
`id uuid`, `session_id uuid`, `user_id uuid`, `kind text`, timestamps.

### secret_requests
`id uuid`, `session_id uuid`, `user_id uuid`, `request_type`, `payload jsonb`, `status`, `fulfilled_session_track_id`, timestamps.

### lyric_moments
`id uuid`, `user_id uuid`, normalized track identity, permitted lyric reference/text, timestamp_ms, note, timestamps.

## RLS intent

- user can read/update own profile/taste;
- room member can read room/session/member data for joined room;
- only host can mutate host-owned playback fields;
- member can create own reactions/votes;
- secret request selectable by requester and privileged server/ranking path, not all room members;
- lyric moments private to owner by default.

## Indexes

- `rooms(join_code)`
- `room_members(room_id,user_id)`
- `session_tracks(session_id,status,queue_position)`
- `reactions(session_track_id,user_id)`
- `secret_requests(session_id,status)`
