import Navbar from '../components/Navbar'

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen text-text flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 md:pt-28">
        {children}
      </main>

      <footer className="border-t border-muted/20 mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Jovia Minallah. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/JMinallah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jovia-minallah-matata-18b499356"
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
