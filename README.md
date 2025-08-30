# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Next.js, and Tailwind CSS. Features a clean design with dark/light mode toggle, smooth scrolling, and modular components.

## Features

- 🎨 Modern, clean design with soft shadows
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth scrolling navigation
- 🧩 Modular component structure
- 📊 Dynamic projects section
- 🚀 Optimized for GitHub Pages deployment

## Sections

1. **Hero Section** - Full-screen introduction with name, title, and CTA
2. **Projects Section** - Dynamic project cards with GitHub links
3. **About Section** - Personal information and tech stack
4. **Contact Section** - Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Replace placeholder content in the following files:

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and tagline
   - Replace social media links

2. **Projects** (`data/projects.ts`):
   - Add your actual projects
   - Update GitHub and live demo URLs
   - Replace project images

3. **About Section** (`components/About.tsx`):
   - Write your personal bio
   - Replace profile photo
   - Update tech stack in `data/techStack.ts`

4. **Contact** (`components/Contact.tsx`):
   - Update contact information
   - Replace social links in `data/socialLinks.ts`

### Styling

- Colors and themes can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind CSS classes

## Deployment

### GitHub Pages

1. Update `package.json`:
   - Change `homepage` to your GitHub Pages URL
   - Update repository name in scripts

2. Update `next.config.js`:
   - Set correct `basePath` and `assetPrefix`

3. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

### Other Platforms

The site can also be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   └── Projects.tsx
├── data/
│   ├── projects.ts
│   ├── socialLinks.ts
│   └── techStack.ts
├── public/
└── README.md
\`\`\`

## Technologies Used

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, feel free to open an issue or reach out!
