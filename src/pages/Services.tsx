import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Personal Training",
    description: "One-on-one sessions tailored to your specific fitness goals",
    price: "$50/hour",
    features: ["Customized workout plans", "Progress tracking", "Nutritional guidance"],
  },
  {
    title: "Group Classes",
    description: "High-energy group workouts for all fitness levels",
    price: "$20/class",
    features: ["Variety of class types", "Motivating atmosphere", "Flexible scheduling"],
  },
  {
    title: "Online Coaching",
    description: "Remote training and support for your fitness journey",
    price: "$100/month",
    features: ["Weekly check-ins", "Custom workout programs", "24/7 chat support"],
  },
  {
    title: "Fitness Assessment",
    description: "Comprehensive evaluation of your current fitness level",
    price: "$75",
    features: ["Body composition analysis", "Strength and endurance tests", "Personalized recommendations"],
  },
]

export default function Services() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
      <p className="text-xl text-muted-foreground">Choose the perfect training option for your fitness journey</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Badge variant="secondary" className="mr-2">
                      ✓
                    </Badge>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

