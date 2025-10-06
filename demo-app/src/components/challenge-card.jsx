import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Progress } from './ui/progress'
import { Button } from './ui/button'

export function ChallengeCard({ challenge }) {
  const { id, title, description, progress, target, type } = challenge
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-32 rounded-lg bg-accent/20" />
        <Progress value={(progress / target) * 100} />
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{progress} / {target}</span>
          <span className="text-muted-foreground">{type}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/challenge/${id}`}>
            Lihat Detail
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}