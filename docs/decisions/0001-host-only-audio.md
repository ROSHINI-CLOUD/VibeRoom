# ADR 0001 — Host-only audio for MVP

Status: Accepted

## Decision
Only the host device outputs audio. Member devices mirror room/player state and act as controllers.

## Why
Multi-device browser audio adds autoplay restrictions, preload variability, clock drift, and audible echo/phasing. It does not strengthen the core AI-DJ differentiator enough for hackathon risk.

## Consequence
Realtime protocol syncs experience/state, not sample-accurate audio.
