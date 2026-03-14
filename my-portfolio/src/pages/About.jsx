import image from '../assets/image.png'

const skills = [
  'HTML', 'CSS','JavaScript', 'TypeScript','Java', 'Kotlin', 'React',
  'Node.js', 'MySQL',
  'Tailwind CSS', 'REST APIs', 'Git & GitHub',
  'Figma', 'Linux', 'CI/CD',
]

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'ScaleUp',
    period: '2026 — Present',
    description:
      'Developed accessible, responsive web interfaces in close collaboration with design teams to deliver pixel-perfect, high performance implementations.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Modu',
    period: '2026 — Present',
    description:
      'Co-Founder of Modu, leading the development of an innovative mobile app.',
  },
]

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* ─── Bio ─── */}
      <div className="mb-20 overflow-hidden bg-background p-4 sm:p-6 rounded-lg">
        {/* Photo — stacked on mobile, wrapped on larger screens */}
        <div
          data-aos="fade-right"
          className="float-none mx-auto mb-5 w-full max-w-[260px] md:float-left md:mx-0 md:mr-6 md:mb-4 md:w-64 lg:w-[42%]"
        >
          <div className="w-full aspect-[4/5] overflow-hidden rounded-xl">
            <img
              src={image}
              alt="Jovia Minallah"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Bio text — wraps around the floated image */}
        <div data-aos="fade-left" data-aos-delay="100">
          <h2 className="text-2xl font-bold mb-5">Hi, I&apos;m Jovia Minallah.</h2>
          <div className="space-y-4 text-muted leading-relaxed text-[0.9375rem]">
            <p>
              I&apos;m a FullStack Developer based in Kampala, Uganda, passionate about building
              performant, accessible, and beautiful web applications that solve real problems
              for real people.
            </p>
            <p>
              With experience across the full stack, I love working with modern JavaScript
              frameworks on the frontend and building robust, well documented APIs on the
              backend. I care deeply about code quality, developer experience, and shipping
              products that people actually enjoy using.
            </p>
            <p>
              Outside of development, I enjoy exploring design trends, reading productivity books,
              and sharpening my communication skills. And when it&apos;s time to recharge, you&apos;ll
              likely find me laughing off on anything with humor, watching anime and pretending it&apos;s purely for narrative research.
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
