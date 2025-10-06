import { Card, CardContent } from "@/components/ui/card"

export function WorkoutProgressCard({ progress = 65 }) {
  return (
    <Card className="bg-card/50 backdrop-blur">
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <h3 className="text-lg font-semibold">Workout Progress</h3>
          <p className="text-sm text-muted-foreground">{12} Exercise left</p>
        </div>
        <div className="relative h-12 w-12">
          <svg className="h-12 w-12 -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              className="text-muted/20"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              className="text-primary"
              strokeDasharray={`${2 * Math.PI * 20}`}
              strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
            {progress}%
          </span>
        </div>
      </CardContent>
    </Card>
  )
}