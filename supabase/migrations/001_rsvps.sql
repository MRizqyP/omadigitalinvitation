-- RSVP table for undangan digital
create extension if not exists "pgcrypto";

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  attendance text not null check (attendance in ('hadir', 'tidak_hadir')),
  guest_count int not null default 1 check (guest_count >= 1 and guest_count <= 20),
  message text,
  created_at timestamptz not null default now()
);

alter table public.rsvps enable row level security;

-- Public guests may insert RSVPs only (no select/update/delete via anon key)
create policy "Allow anonymous insert"
  on public.rsvps
  for insert
  to anon, authenticated
  with check (true);

-- Helpful index for dashboard filtering
create index if not exists rsvps_attendance_idx on public.rsvps (attendance);
create index if not exists rsvps_created_at_idx on public.rsvps (created_at desc);
