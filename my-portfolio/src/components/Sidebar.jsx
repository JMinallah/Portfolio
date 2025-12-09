import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Sidebar() {
  return (
    <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:w-64 md:flex md:flex-col md:justify-between md:pb-4 md:bg-background md:border-r md:border-muted">
      <div className="px-6 pt-8">
        <div className="flex items-center gap-3">
          <div>
            <div className="w-20 h-20 ml-10 mb-4 rounded-md overflow-hidden">
              <img src="public/meee.png" alt="profile picture" />
            </div>
            <div className="text-lg font-semibold">Jovia Minallah Matata</div>
            <div className="text-sm text-muted">FullStack Developer</div>
          </div>
        </div>

        <nav className="mt-8 space-y-1" aria-label="Sidebar">
          <Link to="/" className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/6"> 
            <span className="text-sm">About</span>
          </Link>
          <Link to="/projects" className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/6">
            <span className="text-sm">Projects</span>
          </Link>
          <Link to="/contact" className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-primary/6">
            <span className="text-sm">Contact</span>
          </Link>
        </nav>
      </div>

      <div className="px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-muted">Resume</a>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  )
}
