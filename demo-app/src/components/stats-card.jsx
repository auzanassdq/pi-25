import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"

export function StatsCard() {
  const stats = [
    {
      label: "Calories Loss",
      value: "12,182 Kcal",
      change: -2.8,
      icon: "🔥"
    },
    {
      label: "Weight Loss",
      value: "10.7 Kg",
      change: -2.8,
      icon: "⚖️"
    }
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Overall Status</h3>
          <button className="text-sm text-primary">See more →</button>
        </div>
        <div className="space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <div className="font-medium">{stat.label}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </div>
              </div>
              <div className={`flex items-center ${stat.change < 0 ? "text-green-500" : "text-red-500"}`}>
                {stat.change < 0 ? (
                  <ArrowDownIcon className="h-4 w-4" />
                ) : (
                  <ArrowUpIcon className="h-4 w-4" />
                )}
                <span>{Math.abs(stat.change)}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}