import { Card, CardContent } from "@/components/ui/card"

export function WeightChart({ currentWeight = 75.3 }) {
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"]
  const values = [70, 72, 75.3, 74, 73, 72, 71]
  const maxValue = Math.max(...values)

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-sm text-muted-foreground">Current Weight</div>
            <div className="text-3xl font-bold">{currentWeight} kg</div>
          </div>
          <select className="bg-card border rounded-full px-4 py-1 text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
        <div className="flex items-end justify-between gap-2 h-32">
          {months.map((month, index) => {
            const height = (values[index] / maxValue) * 100
            const isCurrent = values[index] === currentWeight
            return (
              <div key={month} className="flex flex-col items-center gap-2">
                <div className="w-8 rounded-full" style={{ height: `${height}%` }}>
                  <div
                    className={`w-full h-full rounded-full ${
                      isCurrent ? "bg-emerald-500" : "bg-muted"
                    }`}
                  />
                </div>
                <div className="text-xs text-muted-foreground">{month}</div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}