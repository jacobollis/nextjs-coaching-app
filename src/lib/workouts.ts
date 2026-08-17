import type { Workout } from "@/types/workout";

// Hardcoded for Milestone 1. Milestone 2 replaces the body of this
// function with a Supabase query, the return type stays the same so
// nothing in page.tsx has to change.
const workouts: Workout[] = [
  {
    id: "1",
    name: "Full Body Strength",
    description: "Compound lifts covering all major muscle groups.",
    durationMinutes: 45,
    difficulty: "intermediate",
  },
  {
    id: "2",
    name: "5k Interval Run",
    description: "Alternating fast and recovery pace intervals.",
    durationMinutes: 30,
    difficulty: "beginner",
  },
  {
    id: "3",
    name: "Mobility and Core",
    description: "Low-impact session focused on hip and spine mobility.",
    durationMinutes: 20,
    difficulty: "beginner",
  },
  {
    id: "4",
    name: "Advanced Hypertrophy Split",
    description: "High-volume push/pull session for muscle growth.",
    durationMinutes: 60,
    difficulty: "advanced",
  },
];

export function getWorkouts(): Workout[] {
  return workouts;
}
