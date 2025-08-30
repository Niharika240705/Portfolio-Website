"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import LoadingScreen from "@/components/LoadingScreen"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Work from "@/components/Work"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"
import ScrollColorChanger from "@/components/ScrollColorChanger"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) {
    return null
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <div className="min-h-screen">
        <ScrollColorChanger />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Work />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
