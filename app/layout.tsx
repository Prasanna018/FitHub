import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FitLife Training",
  description: "Your journey to a healthier lifestyle starts here",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-background text-foreground">
            <header className="container mx-auto py-4">
              <div className="flex justify-between items-center">
                <MainNav />
                <ModeToggle />
              </div>
            </header>
            <main className="container mx-auto py-8">{children}</main>
            <footer className="container mx-auto py-4 text-center">
              <p>&copy; 2025 FitLife Training. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'