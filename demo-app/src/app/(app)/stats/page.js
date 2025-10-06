import { WeightChart } from "@/components/weight-chart"
import { WorkoutGoals } from "@/components/workout-goals"

export default function StatsPage() {
  return (
    <div className="container max-w-md space-y-6 py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Overall stat</h1>
        <button className="h-8 w-8 rounded-full">⋮</button>
      </div>

      <WeightChart />
      <WorkoutGoals />
    </div>
  )
}