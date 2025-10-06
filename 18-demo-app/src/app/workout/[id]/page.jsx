import Image from "next/image"
import { Play, Pause } from "lucide-react"

export default function WorkoutDetailPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="aspect-square relative rounded-xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
          alt="Workout"
          fill
          className="object-cover"
        />
      </div>

      <div className="fixed bottom-20 left-0 right-0 bg-background/80 backdrop-blur-sm p-4">
        <div className="container max-w-md mx-auto space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">01:30</div>
            <div className="text-sm">2/5</div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
              <Pause className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}