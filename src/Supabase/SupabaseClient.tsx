
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vfqmjynzckzhqbkzxrbz.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcW1qeW56Y2t6aHFia3p4cmJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NTI3NzIsImV4cCI6MTk3OTUyODc3Mn0.i6UyiyFgMA8QzfV7KW3-uXl3XUjqWGHnrclt9jl2Ap4"

export const supabase = createClient(supabaseUrl, supabaseKey)