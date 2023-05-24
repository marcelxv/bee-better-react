import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY } from './secrets'

const supabaseUrl = 'https://dxdffueupqglzfmujtxz.supabase.co'
const supabaseKey = SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase