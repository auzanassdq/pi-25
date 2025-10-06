import { ExerciseCard } from "@/components/exercise-card"

export default function DiscoverPage() {
  return (
    <div className="container max-w-md space-y-8 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Discover</h1>
        <button className="h-10 w-10 rounded-full bg-muted">
          <span className="sr-only">Profile</span>
          👤
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Popular Exercises</h2>
          <button className="text-sm text-primary">See more →</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <ExerciseCard
            title="Home Workout"
            exercises={12}
            rating={4.9}
            variant="red"
          />
          <ExerciseCard
            title="Hand Exercise"
            exercises={12}
            rating={4.9}
            variant="dark"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Our Collection</h2>
          <button className="text-sm text-primary">See more →</button>
        </div>
        <div className="space-y-4">
          <ExerciseCard
            title="Chest & abdominal exercises"
            exercises={12}
            variant="yellow"
          />
          <ExerciseCard
            title="Back & shoulder exercises"
            exercises={12}
            variant="purple"
          />
        </div>
      </div>
    </div>
  )
}