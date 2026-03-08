import { useState } from 'react'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
  'Tailwind CSS', 'REST APIs', 'Git & GitHub', 'Docker',
  'Figma', 'Linux', 'CI/CD', 'GraphQL',
]

const experiences = [
  {
    role: 'FullStack Developer',
    company: 'Company Name',
    period: '2023 — Present',
    description:
      'Building scalable web applications and REST APIs. Working across the entire stack — from database design to responsive UI implementation and deployment pipelines.',
  },
  {
    role: 'Frontend Developer',
    company: 'Previous Company',
    period: '2022 — 2023',
    description:
      'Developed accessible, responsive web interfaces in close collaboration with design teams to deliver pixel-perfect, high-performance implementations.',
  },
  {
    role: 'Junior Developer',
    company: 'First Company',
    period: '2021 — 2022',
    description:
      'Started my professional career building internal tooling and client-facing web applications, picking up fundamentals across the stack.',
  },
]

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* ─── Page header ─── */}
      <div data-aos="fade-up" className="mb-16">
        <p className="text-sm text-primary font-medium mb-2 uppercase tracking-widest">About</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Crafting experiences,<br className="hidden sm:block" /> one line at a time.
        </h1>
      </div>

      {/* ─── Bio ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
        {/* Photo */}
        <div data-aos="fade-right" className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted/10 border border-muted/20 flex items-center justify-center">
            {!imgError ? (
              <img
                src="/meee.png"
                alt="Jovia Minallah"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-3 text-muted/30 px-8 text-center">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M0 22v-1a12 12 0 0 1 24 0v1" />
                </svg>
                <span className="text-sm">Profile Photo</span>
              </div>
            )}
          </div>
          {/* Decorative accent border */}
          <div className="absolute -bottom-3 -right-3 w-1/2 h-1/2 rounded-2xl border-2 border-primary/20 -z-10 pointer-events-none" />
        </div>

        {/* Bio text */}
        <div data-aos="fade-left" data-aos-delay="100" className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-5">Hi, I&apos;m Jovia Minallah.</h2>
          <div className="space-y-4 text-muted leading-relaxed text-[0.9375rem]">
            <p>
              I&apos;m a FullStack Developer based in [Your City], passionate about building
              performant, accessible, and beautiful web applications that solve real problems
              for real people.
            </p>
            <p>
              With experience across the full stack, I love working with modern JavaScript
              frameworks on the frontend and building robust, well-documented APIs on the
              backend. I care deeply about code quality, developer experience, and shipping
              products that people actually enjoy using.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me [exploring design trends / contributing
              to open source / enjoying a good read — fill in your hobbies here].
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#"
              className="px-5 py-2.5 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors text-sm"
            >
              Download Resume
            </a>
            <a
              href="mailto:you@example.com"
              className="px-5 py-2.5 border border-muted/50 font-medium rounded-md hover:border-primary hover:text-primary transition-all text-sm"
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>

      {/* ─── Skills ─── */}
      <div data-aos="fade-up" className="mb-20">
        <div className="mb-8">
          <p className="text-sm text-primary font-medium mb-1 uppercase tracking-widest">Toolkit</p>
          <h2 className="text-2xl font-bold">Skills &amp; Technologies</h2>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 border border-muted/30 rounded-full text-sm hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Experience ─── */}
      <div>
        <div className="mb-8">
          <p className="text-sm text-primary font-medium mb-1 uppercase tracking-widest">Journey</p>
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>

        <div className="relative pl-6">
          {/* Vertical timeline line */}
          <div className="absolute left-2 top-2 bottom-2 w-px bg-muted/25" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div data-aos="fade-up" data-aos-delay={i * 100} key={i} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-6 top-1.5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <span className="text-xs text-muted bg-muted/10 px-2.5 py-1 rounded-full shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-primary mb-2 font-medium">{exp.company}</p>
                <p className="text-sm text-muted leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
