import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'

export default function ChallengePage({ params }) {
  return (
    <div className="container py-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Lower Body Workout</h1>
        <p className="text-muted-foreground">
          Complete 30 squats to earn 10 XP
        </p>
      </div>
      
      <div className="aspect-video rounded-xl bg-card overflow-hidden relative">
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          poster="/workout-thumbnail.jpg"
          controls
        >
          <source src="/workout-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      <Card className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold">Progress</h2>
            <p className="text-sm text-muted-foreground">20 / 30 squats completed</p>
          </div>
          <div className="text-2xl">💪</div>
        </div>
        <Progress value={66.67} />
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="reps" className="text-sm font-medium">
              Add Reps
            </label>
            <div className="flex gap-2">
              <Input 
                id="reps"
                type="number" 
                placeholder="Enter number of reps"
                min="1"
                max="30"
              />
              <Button>Add</Button>
            </div>
          </div>
          
          <Button className="w-full" size="lg">
            Complete Challenge
          </Button>
        </div>
      </Card>
      
      <Card className="p-4 space-y-4">
        <h2 className="font-semibold">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
          <li>Stand with feet shoulder-width apart</li>
          <li>Lower your body by bending your knees</li>
          <li>Keep your back straight and chest up</li>
          <li>Return to starting position</li>
          <li>Repeat for required reps</li>
        </ol>
      </Card>
    </div>
  )
}