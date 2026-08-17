-- Milestone 2: seed data.
-- Matches the 4 hardcoded workouts from Milestone 1 (src/lib/workouts.ts)
-- so the rendered page looks identical after the swap to a real query.
-- Run manually in the Supabase SQL editor, after schema.sql.

insert into public.workouts (name, description, duration_minutes, difficulty)
values
  ('Full Body Strength', 'Compound lifts covering all major muscle groups.', 45, 'intermediate'),
  ('5k Interval Run', 'Alternating fast and recovery pace intervals.', 30, 'beginner'),
  ('Mobility and Core', 'Low-impact session focused on hip and spine mobility.', 20, 'beginner'),
  ('Advanced Hypertrophy Split', 'High-volume push/pull session for muscle growth.', 60, 'advanced');
