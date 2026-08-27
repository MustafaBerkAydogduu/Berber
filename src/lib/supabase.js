import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rsggrtkqsrkvisqqtrst.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_Xr52iy34iCn-ixwcOrx1-Q_3eTx1baD';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
