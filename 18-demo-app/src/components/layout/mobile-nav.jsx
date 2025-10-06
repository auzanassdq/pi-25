import Link from "next/link"
import { Home, Activity, User, Dumbbell } from "lucide-react"

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-around items-center h-16">
        <Link href="/dashboard" className="flex flex-col items-center gap-1">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/activity" className="flex flex-col items-center gap-1">
          <Activity className="w-6 h-6" />
          <span className="text-xs">Activity</span>
        </Link>
        <Link href="/workout" className="flex flex-col items-center gap-1">
          <Dumbbell className="w-6 h-6" />
          <span className="text-xs">Workout</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  )
}