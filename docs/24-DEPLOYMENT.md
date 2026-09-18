# Deployment

## Frontend

Vercel:
- production branch `main`;
- preview deploys for branches/PRs;
- browser-safe env values only.

## Backend

Supabase:
- migrations committed;
- RLS enabled;
- private realtime authorization configured;
- Edge Function secrets stored in platform secret manager.

## Environments

Prefer:
- local/dev;
- production.

A dedicated staging environment is optional for hackathon scale.

## Release checklist

- migrations applied;
- RLS smoke-tested;
- env variables present;
- provider fallback enabled;
- production build succeeds;
- join code works from another network/device;
- QR uses production URL;
- no localhost references;
- demo room reset tested.

## Rollback

Frontend: redeploy previous Vercel deployment.
Database: migrations must be forward-safe where possible; avoid destructive schema changes immediately before demo.
