import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

const lessons = [
  {
    title: "Beginner's Guide to Weight Training",
    description: "Learn the basics of weightlifting and proper form",
    duration: "20 min",
    level: "Beginner",
  },
  {
    title: "10-Minute HIIT Workout",
    description: "High-intensity interval training for quick results",
    duration: "10 min",
    level: "Intermediate",
  },
  {
    title: "Yoga for Flexibility",
    description: "Improve your flexibility with this gentle yoga routine",
    duration: "30 min",
    level: "All Levels",
  },
  {
    title: "Core Strengthening Exercises",
    description: "Build a strong core with these effective exercises",
    duration: "15 min",
    level: "Intermediate",
  },
  {
    title: "Proper Running Technique",
    description: "Learn how to run efficiently and prevent injuries",
    duration: "25 min",
    level: "Beginner",
  },
  {
    title: "Advanced Bodyweight Workout",
    description: "Challenging bodyweight exercises for strength and endurance",
    duration: "40 min",
    level: "Advanced",
  },
]

export default function Lessons() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Free Fitness Lessons</h1>
      <p className="text-xl text-muted-foreground">Explore our collection of free workout tutorials and fitness tips</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="secondary">{lesson.duration}</Badge>
                <Badge>{lesson.level}</Badge>
              </div>
              <Button className="w-full">
                <PlayCircle className="mr-2 h-4 w-4" /> Watch Lesson
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

