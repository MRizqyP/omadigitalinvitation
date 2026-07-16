# Undangan Digital — Tahadduts bin Ni'mah

Digital invitation for Kel. besar Loupias with a public RSVP form backed by Supabase.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a Supabase project, then run the SQL in [`supabase/migrations/001_rsvps.sql`](supabase/migrations/001_rsvps.sql) in the SQL Editor.

3. Copy env vars:

```bash
cp .env.example .env.local
```

Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` from Supabase → Project Settings → API.

4. Run locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Viewing RSVPs

There is no admin page. Open Supabase → Table Editor → `rsvps` to see names, attendance, and guest counts. To estimate attendance, sum `guest_count` where `attendance = 'hadir'`.

## Event content

Edit [`lib/event-config.ts`](lib/event-config.ts) to change date, venue, copy, etc.
