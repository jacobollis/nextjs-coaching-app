import type { Workout } from "@/types/workout";
import { supabase } from "@/lib/supabase";

// Milestone 2: body replaced with a real Supabase query. Return type
// is now a Promise, everything else about the function's contract is
// unchanged, callers just need to await it now.
export async function getWorkouts(): Promise<Workout[]> {
  const { data, error } = await supabase
    .from("workouts")
    .select("id, name, description, duration_minutes, difficulty")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch workouts: ${error.message}`);
  }

  // Supabase columns are snake_case (Postgres convention), the
  // Workout type is camelCase (TypeScript convention). Map explicitly
  // rather than relying on the shapes happening to line up.
  return data.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    durationMinutes: row.duration_minutes,
    difficulty: row.difficulty as Workout["difficulty"],
  }));
}
