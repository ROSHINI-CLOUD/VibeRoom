import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { getBrowserConfig } from './env'

let browserClient: SupabaseClient | null = null

export function getSupabaseBrowserClient(): SupabaseClient | null {
  const { supabaseUrl, supabasePublishableKey } = getBrowserConfig()
  if (!supabaseUrl || !supabasePublishableKey) return null
  browserClient ??= createClient(supabaseUrl, supabasePublishableKey)
  return browserClient
}
