# Smart Lyrics

## Goals

Make lyrics a useful second product surface:
- synced display;
- translation;
- meaning;
- lyric moments.

## Provider

Use a LyricsProviderAdapter. LRCLIB is a suitable initial public source for lookup because it exposes plain and synchronized lyric data, but the client must respect its identification and rate-limit requirements.

## Retrieval

Lookup using normalized track/artist/album/duration when possible. Cache successful normalized results to reduce repeat calls.

## Synced lyrics

Parse LRC timestamps into:

```ts
type LyricLine = {
  timeMs: number
  text: string
}
```

Active line is the latest timestamp `<= playbackPositionMs`.

## No-sync fallback

Render plain lyrics with no fake timing.

## AI actions

For Translate / Explain:
- send only the selected line plus minimal neighboring context;
- never ask the model to regenerate the whole song;
- clearly label translation/explanation as AI-generated interpretation;
- cache carefully if policy permits.

## Lyric Moments

Save user-selected moments. Keep private by default. If storing copyrighted text is restricted by the provider/rights context, store a provider record reference + timestamp rather than an unrestricted copied lyric corpus.

## Error behavior

If lyrics are unavailable, state that explicitly. Do not hallucinate lyrics.
