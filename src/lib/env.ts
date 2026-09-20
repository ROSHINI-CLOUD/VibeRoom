export type BrowserConfig = {
  supabaseUrl?: string
  supabasePublishableKey?: string
}

export function getBrowserConfig(): BrowserConfig {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ?? import.meta.env.VITE_SUPABASE_ANON_KEY

  return { supabaseUrl, supabasePublishableKey }
}

// Server-only secrets intentionally do not have a browser accessor.
