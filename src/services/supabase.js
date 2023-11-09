import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ynqatejuzhdjlixpzbjl.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlucWF0ZWp1emhkamxpeHB6YmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1NTMzNTIsImV4cCI6MjAxNDEyOTM1Mn0.DoVbqMJS085O0gcoHkzIcxyls-kGrgZA3112eZIwenI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
