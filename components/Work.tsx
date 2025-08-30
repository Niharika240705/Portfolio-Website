"use client"

import { ExternalLink, Github } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { projectsData } from "@/data/projects"

export default function Work() {
  const [isVisible, setIsVisible] = useState(false)
  const workRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    if (workRef.current) {
      observer.observe(workRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={workRef} id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl sm:text-6xl font-extralight text-white mb-8 tracking-tight transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            Selected Work
          </h2>
          <div
            className={`w-16 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          />
        </div>

        {/* Projects Grid with Flip Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`group perspective-1000 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700 h-96">
                {/* Front of Card */}
                <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden bg-gray-800/30 border border-gray-700/50">
                  {/* Project Image */}
                  <div className="h-48 overflow-hidden bg-gradient-to-br from-purple-500/10 to-red-500/10">
                    <img
                      src={project.image || "/placeholder.svg?height=200&width=400"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Front Content */}
                  <div className="p-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wider font-light">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-light text-white mt-2 mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-4 text-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Hover to see details</span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-lg bg-gradient-to-br from-purple-500/20 to-red-500/20 border border-purple-500/30 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed font-light">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 font-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-lg hover:from-purple-600 hover:to-red-600 transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
