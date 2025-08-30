import { Github, Linkedin, Mail, Download } from "lucide-react"

export const socialLinksData = [
  {
    name: "GitHub",
    url: "https://github.com/Niharika240705",
    icon: Github,
    color: "text-black hover:text-gray-700", // Black
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/niharika-singh-651930290/",
    icon: Linkedin,
    color: "text-blue-600 hover:text-blue-800", // Blue
  },
  {
    name: "Email",
    url: "mailto:niharika.singh@btech.christuniversity.in",
    icon: Mail,
    color: "text-red-600 hover:text-red-800", // Red
  },
  {
    name: "Resume",
    url: "https://drive.google.com/uc?export=download&id=1BXO9PTAKUbukEVGr1ixxlBvZEcsi4g0z",
    icon: Download,
    color: "text-pink-500 hover:text-pink-700", // Pink
  },
]
