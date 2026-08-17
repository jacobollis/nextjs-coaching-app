import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client. No NEXT_PUBLIC_ prefix on the env vars
// this reads, so neither the URL nor the key is inlined into the
// browser bundle. This is deliberate for Milestone 2: nothing here
// calls Supabase from client-side code yet. A browser-side client
// (using @supabase/ssr, for cookie-based auth sessions) gets added in
// Milestone 3 when Supabase Auth needs one.

const supabaseUrl = process.env.SUPABASE_URL;
const supabasePublishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY. Check .env.local."
  );
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);
