"use client"

import { ArrowDown } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Animated Name */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <h1
                className={`text-6xl sm:text-7xl lg:text-8xl font-extralight text-white tracking-tight transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <span
                  className="inline-block"
                  style={{
                    transform: `translateX(${Math.sin(scrollY * 0.01) * 10}px)`,
                  }}
                >
                  Niharika
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent inline-block"
                  style={{
                    transform: `translateX(${Math.cos(scrollY * 0.01) * 10}px)`,
                  }}
                >
                  Singh
                </span>
              </h1>
            </div>

            <div
              className={`space-y-4 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <h2 className="text-xl sm:text-2xl text-gray-400 font-light tracking-widest uppercase">
                AI/ML Enthusiast
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-purple-500 to-red-500 mx-auto" />
              <h3 className="text-lg text-gray-500 font-light tracking-wider">
                Computer Science Engineering • Final Year
              </h3>
            </div>
          </div>

          {/* Animated Tagline */}
          <p
            className={`text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            Crafting intelligent systems and innovative solutions through the intersection of
            <span className="text-white"> artificial intelligence</span>,
            <span className="text-white"> machine learning</span>, and
            <span className="text-white"> creative engineering</span>.
          </p>

          {/* Animated CTA */}
          <div
            className={`pt-12 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <button
              onClick={scrollToAbout}
              className="group inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-light tracking-widest uppercase">Explore My Work</span>
              <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-red-500 group-hover:w-12 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-gray-600" />
        </div>
      </div>
    </section>
  )
}
