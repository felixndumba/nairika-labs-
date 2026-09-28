CREATE TABLE public.contact_enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  service TEXT CHECK (service IS NULL OR char_length(service) <= 100),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  request_fingerprint TEXT NOT NULL CHECK (char_length(request_fingerprint) = 64),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.contact_enquiries TO service_role;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
CREATE INDEX contact_enquiries_fingerprint_created_idx ON public.contact_enquiries (request_fingerprint, created_at DESC);