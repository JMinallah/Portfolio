export default function Home() {
  return (
    <>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Hello — I'm Your Name</h1>
        <p className="text-muted">I build delightful web experiences and interfaces.</p>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-4">Featured projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article className="p-6 rounded-lg border border-muted hover:shadow-lg transition">
            <h3 className="font-semibold">Project One</h3>
            <p className="text-sm text-muted mt-2">Short description about what you built and why it matters.</p>
          </article>
          <article className="p-6 rounded-lg border border-muted hover:shadow-lg transition">
            <h3 className="font-semibold">Project Two</h3>
            <p className="text-sm text-muted mt-2">Short description about this project.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-muted">Interested in working together? Reach out via email.</p>
      </section>
    </>
  )
}
