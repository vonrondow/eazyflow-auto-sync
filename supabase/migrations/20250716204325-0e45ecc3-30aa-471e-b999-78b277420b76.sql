-- Enable RLS on the table if not already enabled
ALTER TABLE public."Lista de Espera Easy Flow" ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into the waitlist
CREATE POLICY "Anyone can insert into waitlist" 
ON public."Lista de Espera Easy Flow"
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow admins to view all records (optional - for future admin functionality)
CREATE POLICY "Service role can view all waitlist entries"
ON public."Lista de Espera Easy Flow"
FOR SELECT
TO service_role
USING (true);