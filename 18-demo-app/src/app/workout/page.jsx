import Image from "next/image"
import { MOCK_DATA } from "@/lib/constants"
import { Clock } from "lucide-react"

export default function WorkoutPage() {
  const { users } = MOCK_DATA
  const currentUser = users[0]
  
  return (
    <div className="py-6 space-y-6">
      <header className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="https://ui.shadcn.com/avatars/01.png"
            alt={currentUser.name}
            width={48}
            height={48}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Hi {currentUser.name}</h1>
          <p className="text-muted-foreground">Let's check your activity</p>
        </div>
      </header>

      <section>
        <h2 className="font-semibold mb-4">Your plan</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm whitespace-nowrap">
            All workouts
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm whitespace-nowrap">
            Lower body
          </button>
          <button className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm whitespace-nowrap">
            Upper body
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="bg-purple-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Lower body workout</h3>
            <span className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4" />
              30 mins
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Glutes, Squats, Hamstrings
          </p>
          <button className="w-full bg-primary text-primary-foreground rounded-full py-2">
            Start Workout
          </button>
        </div>

        <div className="bg-pink-100 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Upper body workout</h3>
            <span className="flex items-center gap-1 text-sm">
              <Clock className="w-4 h-4" />
              45 mins
            </span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Chest, Shoulders, Arms
          </p>
          <button className="w-full bg-primary text-primary-foreground rounded-full py-2">
            Start Workout
          </button>
        </div>
      </section>
    </div>
  )
}