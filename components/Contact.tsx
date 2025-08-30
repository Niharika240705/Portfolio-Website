"use client"

import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
          <div
            className={`w-16 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 mx-auto mb-8 transition-all duration-1000 ${
              isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
            style={{ transitionDelay: "0.2s" }}
          />
        </div>

        {/* Contact Cards with Flip Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Mail, title: "Email", info: "niharika.singh@example.com", color: "purple" },
            { icon: Github, title: "GitHub", info: "@yourusername", color: "pink" },
            { icon: Linkedin, title: "LinkedIn", info: "Connect with me", color: "red" },
            { icon: Download, title: "Resume", info: "Download CV", color: "orange" },
          ].map((item, index) => (
            <div
              key={index}
              className={`group perspective-1000 transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700 h-32">
                {/* Front */}
                <div className="absolute inset-0 backface-hidden text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50 flex flex-col justify-center">
                  <div
                    className={`w-12 h-12 bg-${item.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <item.icon className={`h-6 w-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-white font-light">{item.title}</h3>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 backface-hidden rotate-y-180 text-center p-6 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-lg border border-${item.color}-500/30 flex flex-col justify-center`}
                >
                  <item.icon className={`h-8 w-8 text-${item.color}-400 mx-auto mb-2`} />
                  <p className="text-white text-sm font-light">{item.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-6">Ready to start a conversation?</h3>
            <p className="text-gray-400 mb-8 font-light leading-relaxed">
              Whether you're looking to collaborate on a project, discuss opportunities, or just want to chat about the
              latest in AI and technology, I'd love to hear from you.
            </p>

            <a
              href="mailto:niharika.singh@example.com"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-lg hover:from-purple-600 hover:to-red-600 transition-all duration-300 font-light hover:scale-105"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm font-light mb-4 md:mb-0">
              © 2024 Niharika Singh. Crafted with passion and precision.
            </div>
            <div className="flex items-center space-x-6">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
