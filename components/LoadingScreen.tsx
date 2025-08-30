"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 25)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      {/* Main Gradient Bar */}
      <div className="relative flex items-center justify-center">
        <div
          className="w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 transition-all duration-75 ease-out rounded-full"
          style={{ height: `${Math.min(progress * 1.5, 120)}px` }}
        />

        {/* Outer Glow */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 bg-gradient-to-b from-purple-400/40 via-pink-400/40 to-red-400/40 blur-md transition-all duration-75 ease-out rounded-full"
          style={{ height: `${Math.min(progress * 1.5, 120)}px` }}
        />

        {/* Inner Glow */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-purple-300/60 via-pink-300/60 to-red-300/60 blur-sm transition-all duration-75 ease-out rounded-full"
          style={{ height: `${Math.min(progress * 1.5, 120)}px` }}
        />
      </div>

      {/* Loading Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="text-gray-400 text-sm font-light tracking-widest">LOADING {progress}%</div>
      </div>
    </div>
  )
}
