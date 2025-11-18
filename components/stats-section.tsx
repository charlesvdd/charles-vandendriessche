import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap, Award } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "150%",
      label: "Augmentation moyenne de productivité",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      value: "500+",
      label: "Entreprises transformées",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Zap,
      value: "10M+",
      label: "Heures d'administration économisées",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Note de satisfaction client",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-3xl font-bold text-[var(--neomnia-black)] mb-2">{stat.value}</div>
                  <p className="text-sm text-foreground/70">{stat.label}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
