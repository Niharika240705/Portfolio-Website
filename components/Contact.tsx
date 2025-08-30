"use client"

import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.3,
    })

    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  const contacts = [
    { icon: Mail, title: "Email", info: "niharika.singh@example.com", color: "purple" },
    { icon: Github, title: "GitHub", info: "@Niharika240705", color: "pink", url: "https://github.com/Niharika240705" },
    { icon: Linkedin, title: "LinkedIn", info: "Connect with me", color: "blue", url: "https://linkedin.com/in/niharika-singh" },
    { icon: Download, title: "Resume", info: "Download CV", color: "orange", url: "https://drive.google.com/file/d/1BXO9PTAKUbukEVGr1ixxlBvZEcsi4g0z/view?usp=share_link" },
  ]

  return (
    <section ref={contactRef} id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-5xl sm:text-6xl font-extralight text-white mb-8 tracking-tight transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            Let's Connect
          </h2>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform duration-300 hover:scale-110 bg-gray-800/30 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                <item.icon className={`h-6 w-6`} />
              </div>
              <h3 className="font-light text-lg">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.info}</p>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="mailto:niharika.singh@example.com"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-lg hover:scale-105 transition-transform duration-300"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
