import { MOCK_DATA } from "@/lib/constants"
import { Progress } from "@/components/ui/progress"

export default function ActivityPage() {
  const { users, challenges, progress } = MOCK_DATA
  const currentUser = users[0]
  
  return (
    <div className="py-6 space-y-6">
      <header className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your Activity</h1>
          <div className="text-sm">May 2024</div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm">All</button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">Running</button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm">Cycling</button>
        </div>
      </header>

      <section className="space-y-4">
        <div className="bg-purple-100 rounded-xl p-4">
          <h2 className="font-semibold mb-2">Steps</h2>
          <div className="text-3xl font-bold">1048</div>
        </div>

        <div className="bg-blue-100 rounded-xl p-4">
          <h2 className="font-semibold mb-2">My Goals</h2>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white">
              45%
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">Daily Goal</div>
              <Progress value={45} className="mt-2" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Today's Challenge</h2>
        {challenges.map((challenge) => {
          const challengeProgress = progress.find(p => p.challenge_id === challenge.id)
          const progressPercent = (challengeProgress?.progress / challenge.target) * 100

          return (
            <div key={challenge.id} className="bg-card rounded-xl p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </div>
                <div className="text-sm font-medium">
                  {challengeProgress?.progress}/{challenge.target} {challenge.unit}
                </div>
              </div>
              <Progress value={progressPercent} />
            </div>
          )
        })}
      </section>
    </div>
  )
}