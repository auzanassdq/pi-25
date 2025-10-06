import { Card, CardContent } from "@/components/ui/card"

export function WorkoutGoals() {
  const goals = [
    {
      name: "Arm & shoulder muscle",
      exercises: 35,
      progress: 37,
      color: "bg-rose-500"
    },
    {
      name: "Hand grip muscle",
      exercises: 10,
      progress: 83,
      color: "bg-blue-500"
    },
    {
      name: "Leg muscle",
      exercises: 10,
      progress: 83,
      color: "bg-amber-500"
    }
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Workout Goals</h3>
          <button className="text-sm text-primary">See more →</button>
        </div>
        <div className="space-y-4">
          {goals.map((goal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{goal.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {goal.exercises} Exercise
                  </div>
                </div>
                <div className="font-medium">{goal.progress}%</div>
              </div>
              <div className="h-2 rounded-full bg-muted">
                <div
                  className={`h-full rounded-full ${goal.color}`}
                  style={{ width: `${goal.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}