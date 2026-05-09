# Investor Deck Storage Setup

Manual production setup:

1. Create a private Supabase Storage bucket named `investor-docs`.
2. Upload `kscan-investor-deck.pdf`.
3. Confirm the bucket is not public.
4. Confirm bucket/object policies do not allow anonymous public reads.
5. Confirm server-side service-role access can read the object.
6. Set `SUPABASE_URL` in Vercel server environment variables.
7. Set `SUPABASE_SERVICE_ROLE_KEY` in Vercel server environment variables only.
8. Set `INVESTOR_ACCESS_PASSWORD` in Vercel Production.
9. Optional: set `INVESTOR_DECK_FILENAME` if the stored object filename changes.

Do not upload investor PDFs, HTML decks, or other confidential investor materials to `public/`.
