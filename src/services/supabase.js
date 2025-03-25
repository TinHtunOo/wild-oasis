import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xnvzlntjwcqsuapztwty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhudnpsbnRqd2Nxc3VhcHp0d3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDg1NzAsImV4cCI6MjA1NjgyNDU3MH0.PTYqp0rxoOmPERvATmqAqxiLlT5vGVp3qpaNtC8GtgU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
