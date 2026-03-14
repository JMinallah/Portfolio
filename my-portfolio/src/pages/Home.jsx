import { Link } from 'react-router-dom'
import rydrImg from '../assets/rydr-logo.png'
import portfolioImg from '../assets/logo.png'
import scaleupImg from '../assets/logo(1).png'

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ImagePlaceholder() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="m21 15-5-5L5 21" />
    </svg>
  )
}

const featuredProjects = [
  {
    title: 'Rydr',
    description:
      "RYDR is a decentralized ride-sharing app built on Polkadot's Moonbase Alpha parachain, enabling trustless peer-to-peer rides with built-in escrow payments.",
    tags: ['React', 'Node.js', 'Appwrite', 'Polkadot'],
    github: 'https://github.com/andamagodwin/rydr-frontend',
    live: 'https://rydr-gamma.vercel.app',
    image: rydrImg,
  },
  {
    title: 'My Portfolio',
    description:
      'Personal portfolio built with React, Vite, and Tailwind CSS — featuring smooth AOS animations, dark mode support, and a clean responsive design.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/JMinallah/Portfolio',
    live: 'https://portfolio-rho-seven-69.vercel.app/',
    image: portfolioImg,
  },
  {
    title: 'ScaleUp',
    description:
      'A platform helping early-stage startups access tools, mentorship, and community — from idea validation through to product launch.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Scaleup-Build/scaleup-website-frontend',
    live: '#',
    image: scaleupImg,
  },
]

export default function Home() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="py-8 sm:py-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-0 w-full text-center">

            {/* Headline */}
            <h1 data-aos="fade-up" style={{ fontFamily: "'Playfair Display', serif" }} className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6">
              Hey, I&apos;m{' '}
              <span className="text-primary italic">Jovia</span>
              <br />
              <span className="text-text/80">Minallah Matata.</span>
            </h1>

            {/* Sub-headline */}
            <p data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "'Syne', sans-serif" }} className="text-base sm:text-lg lg:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed font-medium">
              FullStack Developer crafting clean, performant web experiences. I turn
              complex problems into elegant, user first solutions.
            </p>

            {/* CTAs */}
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap justify-center gap-3 mb-8">
              <Link
                to="/about"
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors duration-200 text-sm"
              >
                About Me
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-muted/50 font-medium rounded-md hover:border-primary hover:text-primary transition-all duration-200 text-sm"
              >
                Say Hello
              </Link>
            </div>
          </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div data-aos="fade-up" className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors"
            >
              All projects <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <article
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group flex flex-col p-6 rounded-xl border border-muted/30 hover:border-primary/40 bg-background hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-muted/10 mb-5 flex items-center justify-center text-muted/30 group-hover:bg-primary/5 transition-colors">
                  {project.image
                    ? <img src={project.image} alt={project.title} className="w-full h-full object-contain p-3" />
                    : <ImagePlaceholder />}
                </div>

                {/* Tags */}
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

                <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
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
                    <GithubIcon />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link to="/projects" className="text-sm text-primary hover:underline">
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
