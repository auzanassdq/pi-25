import { Card, CardContent } from "@/components/ui/card"
import { StarFilledIcon } from "@radix-ui/react-icons"

export function ExerciseCard({ title, exercises = 12, rating = 4.9, image, variant = "red" }) {
  const gradients = {
    red: "from-rose-500 to-rose-600",
    dark: "from-gray-800 to-gray-900",
    yellow: "from-amber-400 to-amber-500",
    purple: "from-purple-400 to-purple-500"
  }

  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0">
        <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradients[variant]}`}>
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-75 transition-transform group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <div className="flex items-center gap-1">
              <StarFilledIcon className="h-4 w-4 text-yellow-400" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-white/80">{exercises} Exercise</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}