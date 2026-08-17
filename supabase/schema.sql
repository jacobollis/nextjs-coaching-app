-- Milestone 2: workouts table.
-- Run manually in the Supabase SQL editor for the nextjs-coaching-app
-- project (Stockholm, eu-north-1). Not applied automatically — this file
-- is the source of truth for what should exist in the database. Keep it
-- in sync by hand whenever the schema changes.

create table public.workouts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  duration_minutes integer not null,
  difficulty text not null check (difficulty in ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz not null default now()
);

-- RLS on: every operation is denied unless a policy below explicitly
-- allows it. "Automatically expose new tables" was turned off at project
-- creation, so this table also has no baseline privileges yet — the
-- grant below and the policy below are both required, neither is
-- redundant with the other.
alter table public.workouts enable row level security;

grant select on public.workouts to anon, authenticated;

create policy "Workouts are publicly readable"
  on public.workouts
  for select
  using (true);

-- No insert/update/delete grant and no policy for those operations.
-- This table has no write path at all, by anyone, through the API,
-- until that's deliberately added later.
