# API / Use-case Contracts

These can be implemented through Supabase RPC/Edge Functions/client queries as appropriate.

## createRoom()
Input: host identity, optional room label.
Output: room ID, join code.

## joinRoom(code)
Validates active room and inserts membership.

## submitOnboarding(profileInput)
Produces validated taste profile.

## searchTracks(query)
Calls active MusicProviderAdapter.

## getCandidateTracks(room/session context)
Returns normalized candidates.

## rankNextTracks(context, candidates)
Pure domain path where possible; returns score breakdown.

## submitReaction(room, track, kind)
Validates membership and event.

## submitVibeVote(room, kind)
Validates membership.

## submitSecretRequest(room, request)
Private persistence.

## getLyrics(track)
Returns normalized synced/plain lyrics if available.

## explainLyric(track, excerpt, targetLanguage?)
Server-side AI; bounded excerpt only.

## explainRecommendation(scoreFacts)
Server-side AI or deterministic template; no secret request identity/content leakage.

Every boundary must return typed error codes, not arbitrary provider error strings.
