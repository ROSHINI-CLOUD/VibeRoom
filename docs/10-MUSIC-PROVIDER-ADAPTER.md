# Music Provider Adapter

## Goal

VibeRoom must not be coupled to one music API or unauthorized downloader.

## Interface concept

```ts
interface MusicProviderAdapter {
  searchTracks(query: string): Promise<Track[]>
  getTrack(id: ProviderTrackId): Promise<Track>
  getRecommendations(seed: RecommendationSeed): Promise<Track[]>
  resolvePlayable(track: Track): Promise<PlayableSource | null>
}
```

## Normalized Track

At minimum:
- internal/canonical ID;
- provider + provider ID;
- title;
- artists;
- album/artwork;
- duration;
- languages if known;
- explicit flag if known;
- audio feature metadata if available;
- playable source capability;
- external link.

## Demo provider

Implement a deterministic seed/demo provider first. This prevents the project from becoming blocked on third-party API access.

## Legal/terms rule

Do not add stream extraction or unrestricted downloading simply because an unofficial endpoint exists. Integrations must comply with provider terms and permissions appropriate to the project/demo.

## Provider outage

Candidate retrieval should degrade to cached/seed tracks, and UI should disclose limited demo mode.
