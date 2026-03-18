import { useState } from 'react'
import rydrImg from '../assets/rydr-logo.png'
import portfolioImg from '../assets/logo.png'
import scaleupImg from '../assets/logo(1).png'
import moduImg from '../assets/modu.png'

const allProjects = [
  {
    title: 'Rydr',
    description: "RYDR is a decentralized ride-sharing application that leverages the power of Polkadot's ecosystem through Moonbase Alpha, an Ethereum-compatible parachain. By combining blockchain technology with real-world transportation needs, RYDR enables trustless, transparent, and secure peer-to-peer ride-sharing with built-in escrow payments.",
    tags: ['React', 'Node.js', 'Appwrite','Polkadot', 'Moonbase Alpha'],
    category: 'frontend',
    github: 'https://github.com/andamagodwin/rydr-frontend',
    live: 'https://rydr-gamma.vercel.app',
    image: rydrImg,
  },
  {
    title: 'My Portfolio',
    description: 'A personal portfolio built with React, Vite, and Tailwind CSS — showcasing my projects, skills, and experience with smooth AOS animations, dark mode support, and a clean responsive design.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    category: 'fullstack',
    github: 'https://github.com/JMinallah/Portfolio',
    live: 'https://jminallah.is-a.dev',
    image: portfolioImg,
  },
  {
    title: 'ScaleUp',
    description: 'ScaleUp is a platform built to help early-stage startups and entrepreneurs access the tools, mentorship, and community they need to grow — from idea validation through to product launch.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    category: 'frontend',
    github: 'https://github.com/Scaleup-Build/scaleup-website-frontend',
    live: 'https://scaleupbuild.org',
    image: scaleupImg,
  },
  {
    title: 'Modu',
    description: 'Mobile app for developing android applications only using your mobile app.',
    tags: ['React', 'TypeScript', 'Chart.js'],
    category: 'frontend',
    github: 'https://github.com/andamagodwin/Modu-main-landing-page',
    live: 'https://getmodu.cloud',
    image: moduImg,
  },
]

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
]

function ImagePlaceholder() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  )
}

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all' ? allProjects : allProjects.filter((p) => p.category === active)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* ─── Page header ─── */}
      <div data-aos="fade-up" className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Projects</h1>
        <div className="splash-panel max-w-lg">
          <p className="text-muted max-w-xl leading-relaxed">
            A curated collection of things I&apos;ve built, from <em className="text-primary font-bold">solo</em> side projects to
            <em className="text-primary font-bold"> collaborative</em> shipped products.
          </p>
        </div>
      </div>

      {/* ─── Filter tabs ─── */}
      <div data-aos="fade-up" data-aos-delay="100" className="flex flex-wrap gap-2 mb-10">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
              active === value
                ? 'bg-primary text-white border-primary'
                : 'border-muted/40 text-muted hover:border-primary hover:text-primary'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ─── Projects grid ─── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <article
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group flex flex-col p-6 rounded-xl border border-muted/30 hover:border-primary/40 bg-background hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted/10 mb-5 flex items-center justify-center text-muted/30 group-hover:bg-primary/5 transition-colors">
                {project.image
                  ? <img src={project.image} alt={project.title} className="w-full h-full object-contain p-3" />
                  : <ImagePlaceholder />}
              </div>

              {/* Category badge */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex items-center gap-5 text-sm mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center text-muted">No projects in this category yet.</div>
      )}
    </div>
  )
}
