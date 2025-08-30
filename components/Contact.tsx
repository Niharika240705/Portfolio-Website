"use client"

import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (contactRef.current) observer.observe(contactRef.current)
    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "niharika.singh@btech.christuniversity.in",
      url: "mailto:niharika.singh@btech.christuniversity.in",
      frontBg: "bg-purple-500/20",
      frontIcon: "text-purple-400",
      backBg: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    },
    {
      icon: Github,
      title: "GitHub",
      info: "@Niharika240705",
      url: "https://github.com/Niharika240705",
      frontBg: "bg-pink-500/20",
      frontIcon: "text-pink-400",
      backBg: "bg-gradient-to-br from-pink-500/20 to-pink-600/20",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      info: "Connect with me",
      url: "https://www.linkedin.com/in/niharika-singh-651930290/",
      frontBg: "bg-blue-500/20",
      frontIcon: "text-blue-400",
      backBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Download,
      title: "Resume",
      info: "Download CV",
      url: "https://drive.google.com/uc?export=download&id=1BXO9PTAKUbukEVGr1ixxlBvZEcsi4g0z",
      frontBg: "bg-orange-500/20",
      frontIcon: "text-orange-400",
      backBg: "bg-gradient-to-br from-orange-500/20 to-orange-600/20",
    },
  ]

  return (
    <section ref={contactRef} id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
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

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((item, index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              <div
                className={`group perspective-1000 transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="relative preserve-3d group-hover:rotate-y-180 transition-transform duration-700 h-32">
                  {/* Front */}
                  <div className="absolute inset-0 backface-hidden text-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50 flex flex-col justify-center">
                    <div className={`w-12 h-12 ${item.frontBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <item.icon className={`h-6 w-6 ${item.frontIcon}`} />
                    </div>
                    <h3 className="text-white font-light">{item.title}</h3>
                  </div>

                  {/* Back */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 text-center p-6 ${item.backBg} rounded-lg border border-gray-700/30 flex flex-col justify-center`}>
                    <item.icon className={`h-8 w-8 ${item.frontIcon} mx-auto mb-2`} />
                    <p className="text-white text-sm font-light">{item.info}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-light text-white mb-6">Ready to start a conversation?</h3>
            <p className="text-gray-400 mb-8 font-light leading-relaxed">
              Whether you're looking to collaborate, discuss opportunities, or chat about AI, I'd love to hear from you.
            </p>
            <a
              href="mailto:niharika.singh@btech.christuniversity.in"
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm font-light mb-4 md:mb-0">
            © 2025 Niharika Singh. Crafted with passion and precision.
          </div>
        </div>
      </footer>
    </section>
  )
}
