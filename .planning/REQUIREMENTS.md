# REQUIREMENTS — VibeRoom v1

Status legend: `PENDING`, `IN_PROGRESS`, `DONE`, `DEFERRED`

## Foundation

| ID | Requirement | Status |
|---|---|---|
| FND-01 | React/Vite/TypeScript app boots with strict type checking | PENDING |
| FND-02 | Environment config is validated and secrets are separated client/server | PENDING |
| FND-03 | Core routing/layout/error boundaries exist | PENDING |
| FND-04 | CI-quality local scripts exist for lint, typecheck, test, build | PENDING |

## Identity + onboarding

| ID | Requirement | Status |
|---|---|---|
| ONB-01 | User can enter a display name and join without a long account setup | PENDING |
| ONB-02 | User can choose music languages | PENDING |
| ONB-03 | User can select favorite artists/search suggestions | PENDING |
| ONB-04 | User can rate/swipe a compact calibration set of tracks | PENDING |
| ONB-05 | User can set current context, energy, and discovery preference | PENDING |
| ONB-06 | System generates an initial Taste DNA representation | PENDING |
| ONB-07 | User can confirm or lightly correct the generated Taste DNA | PENDING |

## Rooms + realtime

| ID | Requirement | Status |
|---|---|---|
| ROOM-01 | Host can create a room with a short join code | PENDING |
| ROOM-02 | App renders a scannable join QR | PENDING |
| ROOM-03 | Member can join an active room by code/link | PENDING |
| ROOM-04 | Presence shows active members | PENDING |
| ROOM-05 | Reactions and vibe-direction events propagate in near real time | PENDING |
| ROOM-06 | Room state survives refresh through durable database state | PENDING |
| ROOM-07 | Privileged host events are authorization-checked | PENDING |

## Playback

| ID | Requirement | Status |
|---|---|---|
| PLAY-01 | Only the host device is responsible for audio in MVP | PENDING |
| PLAY-02 | Music provider is accessed through a replaceable adapter | PENDING |
| PLAY-03 | Room stores canonical current-track metadata and start state | PENDING |
| PLAY-04 | Member UI mirrors current track/progress approximately without emitting audio | PENDING |
| PLAY-05 | Missing/unavailable provider track fails gracefully | PENDING |

## AI DJ + recommendation

| ID | Requirement | Status |
|---|---|---|
| REC-01 | System can retrieve a candidate set for the next track | PENDING |
| REC-02 | Candidate ranking includes group fit, current vibe, transition fit, novelty, and reaction history | PENDING |
| REC-03 | Ranking exposes score components for debugging/explanation | PENDING |
| REC-04 | Queue is shallow (roughly next 3–5), allowing live adaptation | PENDING |
| REC-05 | User-facing “Why this song?” explanation is generated from grounded score facts | PENDING |

## Fairness + VibeBridge

| ID | Requirement | Status |
|---|---|---|
| FAIR-01 | System tracks member satisfaction/coverage over recent tracks | PENDING |
| FAIR-02 | Underserved members receive a bounded temporary weight boost | PENDING |
| FAIR-03 | Fairness boost cannot completely override minimum group fit | PENDING |
| BRDG-01 | System can describe current and target vibe vectors | PENDING |
| BRDG-02 | VibeBridge can favor intermediate tracks that move gradually toward target vibe | PENDING |
| BRDG-03 | Transition plan can span several tracks and update after reactions | PENDING |

## Reactions + requests

| ID | Requirement | Status |
|---|---|---|
| REACT-01 | Members can send Love / More Like This / Okay / Dislike reactions | PENDING |
| REACT-02 | Members can vote More Energy / Chill / Different / Surprise | PENDING |
| REACT-03 | Reactions update taste/session signals | PENDING |
| REQ-01 | Member can submit a private/secret music request | PENDING |
| REQ-02 | Secret request is visible only to requester and authorized ranking logic | PENDING |
| REQ-03 | Request can be fulfilled later when group/transition constraints permit | PENDING |

## Smart Lyrics

| ID | Requirement | Status |
|---|---|---|
| LYR-01 | Lyrics adapter can query a supported lyrics source | PENDING |
| LYR-02 | Synced lyrics highlight line based on host playback position when timestamps exist | PENDING |
| LYR-03 | Plain lyrics fallback exists | PENDING |
| LYR-04 | User can ask for translation / simple meaning / slang explanation | PENDING |
| LYR-05 | AI lyric explanation receives only necessary lyric excerpt/context | PENDING |
| LYR-06 | User can save a Lyric Moment | PENDING |

## Room Health + social insight

| ID | Requirement | Status |
|---|---|---|
| HLTH-01 | Room Health shows group satisfaction, fairness, energy, and discovery level | PENDING |
| HLTH-02 | User can inspect a simple Taste DNA view | PENDING |
| HLTH-03 | Room UI can show who a recommendation is helping without exposing secret requests | PENDING |

## Security + privacy

| ID | Requirement | Status |
|---|---|---|
| SEC-01 | RLS prevents cross-room reads/writes | PENDING |
| SEC-02 | Private realtime channels validate membership | PENDING |
| SEC-03 | AI/music provider secrets never reach browser bundle | PENDING |
| SEC-04 | Inputs and provider payloads are schema validated | PENDING |
| SEC-05 | Minimal personal data is collected and retention is documented | PENDING |

## Quality

| ID | Requirement | Status |
|---|---|---|
| QLT-01 | Core ranking/fairness logic has unit tests | PENDING |
| QLT-02 | Room join/reaction/host flows have integration/E2E coverage | PENDING |
| QLT-03 | Mobile UI meets baseline accessibility requirements | PENDING |
| QLT-04 | Deployed demo has seed/fallback data if external provider is unavailable | PENDING |
| QLT-05 | Critical errors surface actionable recovery UI | PENDING |

## Deferred

| ID | Requirement | Status |
|---|---|---|
| FUT-01 | Near-synchronized headphone playback across devices | DEFERRED |
| FUT-02 | Experimental synchronized phone-speaker playback | DEFERRED |
| FUT-03 | Native iOS/Android apps | DEFERRED |
| FUT-04 | Large-scale learned collaborative filtering model | DEFERRED |

## Traceability

| Phase | Requirement groups |
|---|---|
| 01 Foundation | FND |
| 02 Onboarding | ONB |
| 03 Rooms + Realtime | ROOM, SEC-01/02 |
| 04 Playback + Providers | PLAY, SEC-03/04 |
| 05 AI DJ Core | REC |
| 06 Fairness + VibeBridge | FAIR, BRDG |
| 07 Crowd Interaction | REACT, REQ, HLTH |
| 08 Smart Lyrics + Discovery | LYR, HLTH-02 |
| 09 UX + Quality | QLT-01/02/03/05, SEC-05 |
| 10 Demo + Deploy | QLT-04 + full-system acceptance |
