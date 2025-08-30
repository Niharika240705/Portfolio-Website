"use client"

import { useEffect, useState, useRef } from "react"
import { techStackData } from "@/data/techStack"

export default function About() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const computerRef = useRef<HTMLDivElement>(null)
  const [computerVisible, setComputerVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    const computerObserver = new IntersectionObserver(
      ([entry]) => {
        setComputerVisible(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (computerRef.current) computerObserver.observe(computerRef.current)

    return () => {
      observer.disconnect()
      computerObserver.disconnect()
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div
              className={`space-y-6 text-gray-300 leading-relaxed font-light transition-all duration-1000 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <p className="text-lg">
                I'm a third-year Computer Science Engineering student with an insatiable curiosity for
                <span className="text-white font-normal"> Artificial Intelligence</span> and
                <span className="text-white font-normal"> Machine Learning</span>.
              </p>
              <p className="text-lg">
                Through countless hours of research, experimentation, and hands-on projects, I've developed expertise in
                <span className="text-white font-normal"> deep learning</span>,
                <span className="text-white font-normal"> computer vision</span>, and
                <span className="text-white font-normal"> natural language processing</span>.
              </p>
            </div>

            {/* Animated Stats */}
            <div
              className={`grid grid-cols-3 gap-8 pt-8 border-t border-gray-800 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="text-center group">
                <div className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  3 yr
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">College Student</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-light text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  5+
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Technologies</div>
              </div>
            </div>
          </div>

          {/* Computer Screen Animation */}
          <div
            ref={computerRef}
            className={`flex justify-center lg:justify-end transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Computer Frame */}
              <div className="w-80 h-64 bg-gray-800 rounded-lg p-4 shadow-2xl">
                {/* Screen */}
                <div
                  className={`w-full h-full rounded bg-gradient-to-br transition-all duration-2000 ${
                    computerVisible ? "from-purple-900/50 via-pink-900/30 to-red-900/50" : "from-gray-900 to-gray-800"
                  }`}
                >
                  {/* Screen Content */}
                  <div className="flex items-center justify-center h-full">
                    <div
                      className={`text-center transition-all duration-1500 ${
                        computerVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                      style={{ transitionDelay: "0.5s" }}
                    >
                      <div className="text-2xl font-light text-white mb-2">
                        <span className="bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent">
                          Niharika Singh
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">AI/ML Developer</div>
                      <div className="mt-4">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Computer Stand */}
              <div className="w-16 h-8 bg-gray-700 mx-auto rounded-b-lg" />
              <div className="w-24 h-2 bg-gray-600 mx-auto rounded-full" />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3
              className={`text-3xl font-light text-white mb-4 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              Technology Stack
            </h3>
            <div
              className={`w-12 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 mx-auto transition-all duration-1000 ${
                isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
              style={{ transitionDelay: "0.7s" }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {techStackData.map((tech, index) => (
              <div
                key={index}
                className={`group transition-transform duration-300 hover:scale-110 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-2 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-4xl">{tech.icon}</div>
                  <span className="text-sm font-light text-gray-400 text-center">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
