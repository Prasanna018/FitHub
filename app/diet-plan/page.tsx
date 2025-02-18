"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const mealPlans = {
  weightLoss: [
    { meal: "Breakfast", description: "Oatmeal with berries and almonds", calories: 300 },
    { meal: "Snack", description: "Greek yogurt with honey", calories: 150 },
    { meal: "Lunch", description: "Grilled chicken salad with mixed greens", calories: 400 },
    { meal: "Snack", description: "Apple slices with peanut butter", calories: 200 },
    { meal: "Dinner", description: "Baked salmon with roasted vegetables", calories: 450 },
  ],
  muscleGain: [
    { meal: "Breakfast", description: "Scrambled eggs with whole grain toast and avocado", calories: 500 },
    { meal: "Snack", description: "Protein shake with banana", calories: 300 },
    { meal: "Lunch", description: "Lean beef stir-fry with brown rice", calories: 600 },
    { meal: "Snack", description: "Cottage cheese with mixed nuts", calories: 350 },
    { meal: "Dinner", description: "Grilled chicken breast with sweet potato and broccoli", calories: 550 },
  ],
  maintenance: [
    { meal: "Breakfast", description: "Whole grain cereal with milk and fruit", calories: 400 },
    { meal: "Snack", description: "Hummus with carrot sticks", calories: 200 },
    { meal: "Lunch", description: "Turkey and cheese sandwich with side salad", calories: 500 },
    { meal: "Snack", description: "Trail mix", calories: 250 },
    { meal: "Dinner", description: "Grilled fish with quinoa and asparagus", calories: 450 },
  ],
}

export default function DietPlan() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personalized Diet Plans</h1>
      <p className="text-xl text-muted-foreground">Choose a meal plan that aligns with your fitness goals</p>

      <Tabs defaultValue="weightLoss">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weightLoss">Weight Loss</TabsTrigger>
          <TabsTrigger value="muscleGain">Muscle Gain</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        {Object.entries(mealPlans).map(([plan, meals]) => (
          <TabsContent key={plan} value={plan}>
            <Card>
              <CardHeader>
                <CardTitle>
                  {plan === "weightLoss" ? "Weight Loss" : plan === "muscleGain" ? "Muscle Gain" : "Maintenance"} Meal
                  Plan
                </CardTitle>
                <CardDescription>A balanced diet to support your fitness goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {meals.map((meal, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{meal.meal}</h3>
                        <p className="text-sm text-muted-foreground">{meal.description}</p>
                      </div>
                      <Badge variant="secondary">{meal.calories} cal</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

