# Environment Configuration

See `.env.example`.

## Browser-safe

- `VITE_SUPABASE_URL`
- Supabase publishable/browser key
- app URL

## Server-only

- Supabase secret key when required
- AI provider API key
- music provider secret
- any privileged lyrics/provider token

## Validation

Create a typed config module. Fail fast in development when required config is missing.

Never import server-only env modules into browser bundles.
