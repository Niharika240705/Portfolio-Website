"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import dynamic from "next/dynamic"

// Dynamic imports for client-only components
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false })
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false })
const About = dynamic(() => import("@/components/About"), { ssr: false })
const Work = dynamic(() => import("@/components/Work"), { ssr: false })
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false })
const Navigation = dynamic(() => import("@/components/Navigation"), { ssr: false })
const ScrollColorChanger = dynamic(() => import("@/components/ScrollColorChanger"), { ssr: false })

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
