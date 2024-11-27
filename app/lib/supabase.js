// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;  // Tu URL de Supabase
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Tu clave anónima de Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey);