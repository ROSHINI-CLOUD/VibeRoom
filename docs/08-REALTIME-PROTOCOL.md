# Realtime Protocol

## Topic

Private topic per room:

`room:<room_uuid>`

Authorization is based on authenticated membership, not knowledge of join code alone.

## Presence

Presence payload should be small:

```json
{
  "userId": "uuid",
  "displayName": "Prathick",
  "role": "member",
  "ready": true
}
```

Presence is for connected state, not reaction spam.

## Broadcast events

Envelope:

```json
{
  "v": 1,
  "eventId": "uuid",
  "type": "reaction.created",
  "roomId": "uuid",
  "actorId": "uuid",
  "sentAt": "ISO-8601",
  "payload": {}
}
```

## Event types

- `reaction.created`
- `vibe.vote`
- `room.state_hint`
- `track.changed`
- `queue.updated`
- `room.health_updated`
- `member.ready_changed`

Do **not** broadcast secret-request content.

## Authority

Broadcast improves immediacy but does not grant authority. On reconnect/refresh, clients reload canonical durable state from Postgres.

## Ordering

UI should tolerate out-of-order transient events. Authoritative track/session updates include monotonic session revision/version where practical.

## Reconnect

1. mark realtime status reconnecting;
2. reconnect channel;
3. reload canonical room/session;
4. re-establish Presence;
5. discard stale optimistic items.
