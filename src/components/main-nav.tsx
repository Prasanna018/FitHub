import { Link } from "react-router-dom"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link to="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Services
      </Link>
      <Link to="/lessons" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Lessons
      </Link>
      <Link to="/diet-plan" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Diet Plan
      </Link>
    </nav>
  )
}

