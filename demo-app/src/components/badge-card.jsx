import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'

export function BadgeCard({ badge }) {
  const { title, description, icon } = badge
  
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5" />
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <div>
            <CardTitle className="text-sm">{title}</CardTitle>
            <CardDescription className="text-xs">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}