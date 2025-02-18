import Link from "next/link"

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Services
      </Link>
      <Link href="/lessons" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Lessons
      </Link>
      <Link
        href="/diet-plan"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Diet Plan
      </Link>
    </nav>
  )
}

