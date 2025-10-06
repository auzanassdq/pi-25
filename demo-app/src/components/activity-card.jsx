import { Card, CardContent } from "@/components/ui/card"

export function ActivityCard({ calories = 1350 }) {
  const exercises = [
    {
      name: "Push-ups",
      target: 15,
      current: 13,
      muscles: "Biceps, triceps, shoulders"
    },
    {
      name: "Squads",
      target: 25,
      current: 23,
      muscles: "Quads, legs, thighs"
    },
    {
      name: "Lunges",
      target: 15,
      current: 13,
      muscles: "Calves, hamstrings, glutes"
    }
  ]

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-br from-rose-500 to-rose-600 p-4">
          <div className="mb-2 text-lg font-semibold text-white">Today's Activity</div>
          <div className="text-3xl font-bold text-white">{calories}</div>
          <div className="text-sm text-rose-200">Calories</div>
        </div>
        <div className="divide-y">
          {exercises.map((exercise, index) => (
            <div key={index} className="flex items-center justify-between p-4">
              <div>
                <div className="font-medium">{exercise.name}</div>
                <div className="text-sm text-muted-foreground">{exercise.muscles}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {exercise.current}/{exercise.target}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}