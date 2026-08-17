export type Workout = {
  id: string;
  name: string;
  description: string;
  durationMinutes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
};
