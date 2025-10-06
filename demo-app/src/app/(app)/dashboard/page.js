import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const mockUser = {
  name: "Nicolas D.",
  level: 15,
  xp: 2450,
  xpTarget: 3000,
  calories: 539,
  steps: 1840,
  goals: {
    current: 3,
    target: 5
  }
}

const mockChallenges = {
  daily: [
    {
      id: 1,
      title: "Push-ups",
      target: 15,
      current: 13,
      muscles: "Biceps, triceps, shoulders"
    },
    {
      id: 2,
      title: "Squads",
      target: 25,
      current: 23,
      muscles: "Quads, legs, thighs"
    },
    {
      id: 3,
      title: "Lunges",
      target: 15,
      current: 13,
      muscles: "Calves, hamstrings, glutes"
    }
  ],
  weekly: [
    {
      id: 1,
      title: "Running",
      target: 10,
      current: 6.5,
      unit: "km",
      type: "Cardio"
    },
    {
      id: 2,
      title: "Weight Training",
      target: 4,
      current: 2,
      unit: "sessions",
      type: "Strength"
    }
  ]
}

export default function DashboardPage() {
  return (
    <div className="container max-w-md space-y-6 py-6">
      {/* User Stats */}
      <div className="border-4 border-black bg-yellow-300 p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="h-20 w-20 border-4 border-black bg-white">
            <span className="flex h-full items-center justify-center text-4xl">
              👤
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-black uppercase">{mockUser.name}</h1>
            <p className="font-mono text-sm">Level {mockUser.level} - BEAST MODE</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-mono text-sm">
            <span>XP Progress</span>
            <span>{mockUser.xp} / {mockUser.xpTarget}</span>
          </div>
          <div className="h-4 border-2 border-black bg-white">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${(mockUser.xp / mockUser.xpTarget) * 100}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Activity Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border-4 border-black bg-rose-300 p-4">
          <div className="font-mono text-sm">STEPS</div>
          <div className="text-3xl font-black">{mockUser.steps}</div>
          <div className="font-mono text-sm">TODAY</div>
        </div>
        <div className="border-4 border-black bg-cyan-300 p-4">
          <div className="font-mono text-sm">CALORIES</div>
          <div className="text-3xl font-black">{mockUser.calories}</div>
          <div className="font-mono text-sm">BURNED</div>
        </div>
      </div>

      {/* Today's Challenges */}
      <div className="space-y-4">
        <h2 className="text-xl font-black uppercase">Today's Challenges</h2>
        <div className="space-y-4">
          {mockChallenges.daily.map((challenge) => (
            <div
              key={challenge.id}
              className="border-4 border-black bg-white p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.muscles}</p>
                </div>
                <div className="text-right font-mono">
                  <span className="text-lg font-bold">
                    {challenge.current}/{challenge.target}
                  </span>
                </div>
              </div>
              <div className="h-2 border-2 border-black bg-white">
                <div
                  className="h-full bg-green-500"
                  style={{
                    width: `${(challenge.current / challenge.target) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Challenges */}
      <div className="space-y-4">
        <h2 className="text-xl font-black uppercase">Weekly Goals</h2>
        <div className="space-y-4">
          {mockChallenges.weekly.map((challenge) => (
            <div
              key={challenge.id}
              className="border-4 border-black bg-white p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <h3 className="font-bold">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.type}</p>
                </div>
                <div className="text-right font-mono">
                  <span className="text-lg font-bold">
                    {challenge.current}/{challenge.target} {challenge.unit}
                  </span>
                </div>
              </div>
              <div className="h-2 border-2 border-black bg-white">
                <div
                  className="h-full bg-purple-500"
                  style={{
                    width: `${(challenge.current / challenge.target) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}