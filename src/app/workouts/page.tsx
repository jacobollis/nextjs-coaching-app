import { getWorkouts } from "@/lib/workouts";

export default async function WorkoutsPage() {
  const workouts = await getWorkouts();

  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-6 px-6 py-16">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Workouts
        </h1>

        <ul className="flex flex-col gap-4">
          {workouts.map((workout) => (
            <li
              key={workout.id}
              className="rounded-lg border border-black/[.08] p-5 dark:border-white/[.145]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-medium text-black dark:text-zinc-50">
                  {workout.name}
                </h2>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {workout.durationMinutes} min
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {workout.description}
              </p>
              <span className="mt-3 inline-block rounded-full bg-black/[.06] px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-white/[.08] dark:text-zinc-300">
                {workout.difficulty}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
