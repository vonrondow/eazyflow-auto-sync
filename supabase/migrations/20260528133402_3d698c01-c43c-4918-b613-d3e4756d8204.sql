DROP POLICY IF EXISTS "Anyone can insert ebook leads" ON public.ebook_leads;

CREATE POLICY "Anyone can insert ebook leads"
ON public.ebook_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(nome) BETWEEN 2 AND 120
  AND char_length(cargo) BETWEEN 2 AND 80
  AND char_length(empresa) BETWEEN 1 AND 120
  AND char_length(telefone) BETWEEN 8 AND 20
);