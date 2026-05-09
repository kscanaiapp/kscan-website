# Investor Deck Storage Setup

Manual production setup:

1. Create a private Supabase Storage bucket named `investor-docs`.
2. Upload `kscan-investor-deck.pdf`.
3. Upload `kscan-investor-deck-mobile.html`.
4. Confirm the bucket is not public.
5. Confirm bucket/object policies do not allow anonymous public reads.
6. Confirm server-side service-role access can read both objects.
7. Set `SUPABASE_URL` in Vercel server environment variables.
8. Set `SUPABASE_SERVICE_ROLE_KEY` in Vercel server environment variables only.
9. Set `INVESTOR_ACCESS_PASSWORD` in Vercel Production.
10. Optional: set `INVESTOR_DECK_FILENAME` if the stored PDF object filename changes.
11. Optional: set `INVESTOR_DECK_MOBILE_FILENAME` if the stored mobile HTML object filename changes.

Do not upload investor PDFs, HTML decks, or other confidential investor materials to `public/`.
Do not allow anonymous public reads. Service-role access must stay server-side only.
