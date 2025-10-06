import { BadgeCard } from '@/components/badge-card'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const mockBadges = [
  {
    id: 1,
    title: "3 Days Streak",
    description: "Completed workouts for 3 days in a row",
    icon: "🔥"
  },
  {
    id: 2,
    title: "First Challenge",
    description: "Completed your first challenge",
    icon: "💪"
  },
  {
    id: 3,
    title: "Early Bird",
    description: "Completed a workout before 7 AM",
    icon: "🌅"
  }
]

export default function ProfilePage() {
  return (
    <div className="container py-6 space-y-6 max-w-md">
      <div className="text-center space-y-4">
        <div className="h-24 w-24 rounded-full bg-accent mx-auto" />
        <div>
          <h1 className="text-2xl font-bold">James Wilson</h1>
          <p className="text-muted-foreground">Level 2 - Fit Explorer</p>
        </div>
      </div>
      
      <Card className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Level Progress</h2>
            <p className="text-sm text-muted-foreground">320 / 500 XP to Level 3</p>
          </div>
          <div className="text-2xl">⭐</div>
        </div>
        <Progress value={64} />
      </Card>
      
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">15</div>
          <p className="text-sm text-muted-foreground">Challenges Completed</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">7</div>
          <p className="text-sm text-muted-foreground">Day Streak</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">539</div>
          <p className="text-sm text-muted-foreground">Calories Today</p>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold">3</div>
          <p className="text-sm text-muted-foreground">Badges Earned</p>
        </Card>
      </div>
      
      <div className="space-y-4">
        <h2 className="font-semibold">Badges Collection</h2>
        <div className="grid gap-4">
          {mockBadges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>
    </div>
  )
}