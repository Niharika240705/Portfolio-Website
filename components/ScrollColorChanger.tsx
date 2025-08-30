"use client"

import { useEffect, useState } from "react"

export default function ScrollColorChanger() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate color based on scroll position
  const getBackgroundColor = () => {
    const sections = [
      { start: 0, end: 800, colors: "from-gray-900 via-purple-900/20 to-gray-900" },
      { start: 800, end: 1600, colors: "from-purple-900/30 via-pink-900/20 to-red-900/30" },
      { start: 1600, end: 2400, colors: "from-red-900/20 via-orange-900/10 to-yellow-900/20" },
      { start: 2400, end: 3200, colors: "from-blue-900/20 via-indigo-900/20 to-purple-900/30" },
      { start: 3200, end: 9999, colors: "from-gray-900 via-gray-800 to-black" },
    ]

    const currentSection = sections.find((section) => scrollY >= section.start && scrollY < section.end)
    return currentSection?.colors || "from-gray-900 to-black"
  }

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-br ${getBackgroundColor()} transition-all duration-1000 ease-out -z-10`}
    />
  )
}
