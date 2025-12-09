import { Link } from 'react-router-dom'

export default function MobileMenu({ open, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="relative w-72 max-w-full h-full bg-background border-r border-muted p-6 overflow-y-auto">
        <button className="absolute top-4 right-4 p-2" onClick={onClose} aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="mt-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">J</div>
            <div>
              <div className="text-lg font-semibold">Your Name</div>
              <div className="text-sm text-muted">Frontend Developer</div>
            </div>
          </div>

          <nav className="space-y-2">
            <Link to="/" onClick={onClose} className="block px-3 py-2 rounded-md hover:bg-primary/6">About</Link>
            <Link to="/projects" onClick={onClose} className="block px-3 py-2 rounded-md hover:bg-primary/6">Projects</Link>
            <Link to="/contact" onClick={onClose} className="block px-3 py-2 rounded-md hover:bg-primary/6">Contact</Link>
          </nav>

          <div className="mt-8">
            <a href="#" className="text-sm text-muted">Resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}
