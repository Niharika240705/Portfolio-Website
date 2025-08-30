"use client"

import { useEffect, useState, useRef } from "react"
import { techStackData } from "@/data/techStack"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (aboutRef.current) observer.observe(aboutRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={aboutRef} id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl sm:text-6xl font-extralight text-white mb-8 tracking-tight transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            About
          </h2>
          <div
            className={`w-16 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-8 max-w-3xl mx-auto text-center text-gray-300 leading-relaxed font-light">
          <p className="text-lg">
            I'm a <span className="text-white font-normal">third-year</span> Computer Science Engineering student with
            a passion for <span className="text-white font-normal">Artificial Intelligence</span> and{" "}
            <span className="text-white font-normal">Machine Learning</span>.
          </p>
          <p className="text-lg">
            Through research, experimentation, and hands-on projects, I have developed skills in{" "}
            <span className="text-white font-normal">deep learning</span>,{" "}
            <span className="text-white font-normal">computer vision</span>, and{" "}
            <span className="text-white font-normal">natural language processing</span>.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-3xl font-light text-white mb-8 text-center">Technology Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStackData.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <span className="text-sm font-light text-gray-400 text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
