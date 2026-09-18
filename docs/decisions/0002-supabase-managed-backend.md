# ADR 0002 — Supabase managed backend

Status: Accepted

## Decision
Use Supabase for Postgres, auth/session identity, Realtime, and Edge Functions.

## Why
Minimizes server operations for a new team while preserving real authorization/database/realtime primitives.

## Consequence
Architecture follows Supabase RLS and private channel authorization patterns; domain logic remains portable.
