"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const projectsData = [
  {
    title: "Energy Theft Detection Dashboard",
    description: "Analyzes smart meter consumption patterns to flag abnormal usage indicating electricity theft using AI.",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/Niharika240705/Energy-Theft-Detection-Dashboard",
    liveUrl: "https://energy-theft-dashboard-rsnmxspqnf9vz8bokhj3vs.streamlit.app/",
    image: "/images/energy-dashboard.png",
  },
  {
    title: "Plastic Waste Detection",
    description: "Detects and classifies plastic waste from images using deep learning and computer vision techniques.",
    technologies: ["Python", "TensorFlow", "OpenCV", "NumPy"],
    githubUrl: "https://github.com/Niharika240705/Pastic-waste",
    liveUrl: null,
    image: "/images/plastic-waste.png",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and experience with interactive UI.",
    technologies: ["Next.js", "TailwindCSS", "React"],
    githubUrl: "https://github.com/Niharika240705/Portfolio-Website",
    liveUrl: "https://portfolio-website-ten-flame-23.vercel.app/",
    image: "/images/portfolio.png",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent projects showcasing AI/ML, web development, and software engineering skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-800"
            >
              {/* Project Image */}
              <div className="h-48 rounded-t-lg overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-6xl">
                    <Github />
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
