import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"
import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Services from "@/pages/Services"
import Lessons from "@/pages/Lessons"
import DietPlan from "@/pages/DietPlan"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="container mx-auto py-4">
          <div className="flex justify-between items-center">
            <MainNav />
            <ModeToggle />
          </div>
        </header>
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/diet-plan" element={<DietPlan />} />
          </Routes>
        </main>
        <footer className="container mx-auto py-4 text-center">
          <p>&copy; 2025 FitLife Training. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App

