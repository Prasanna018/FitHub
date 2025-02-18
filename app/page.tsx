import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Dumbbell, Book, Salad } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to FitLife Training</h1>
        <p className="mt-4 text-xl text-muted-foreground">Your journey to a healthier lifestyle starts here</p>
        <Button asChild className="mt-8">
          <Link href="/services">
            Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <Dumbbell className="h-8 w-8 mb-2" />
            <CardTitle>Personalized Training</CardTitle>
            <CardDescription>Tailored workout plans to meet your fitness goals</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/services">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Book className="h-8 w-8 mb-2" />
            <CardTitle>Free Lessons</CardTitle>
            <CardDescription>Access our library of free fitness tutorials</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/lessons">Start Learning</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Salad className="h-8 w-8 mb-2" />
            <CardTitle>Diet Plans</CardTitle>
            <CardDescription>Nutrition advice to complement your workouts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" asChild>
              <Link href="/diet-plan">View Plans</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

