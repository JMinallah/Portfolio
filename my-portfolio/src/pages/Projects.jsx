export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <p className="text-muted mb-6">A collection of projects and case studies.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <article className="p-6 rounded-lg border border-muted hover:shadow-lg transition">
          <h3 className="font-semibold">Awesome App</h3>
          <p className="text-sm text-muted mt-2">Details about the project.</p>
        </article>
        <article className="p-6 rounded-lg border border-muted hover:shadow-lg transition">
          <h3 className="font-semibold">Design System</h3>
          <p className="text-sm text-muted mt-2">Details about the design system work.</p>
        </article>
      </div>
    </div>
  )
}
