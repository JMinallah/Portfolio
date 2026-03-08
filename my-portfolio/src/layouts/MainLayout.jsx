import Navbar from '../components/Navbar'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t border-muted/20 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Jovia Minallah. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a href="#" className="text-sm text-muted hover:text-primary transition-colors">
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
