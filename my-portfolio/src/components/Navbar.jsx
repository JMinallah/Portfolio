import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()
  const menuRef = useRef(null)

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [isOpen])

  return (
    <header className="bg-background">
      <div className="max-w-6xl mx-auto pl-3 pr-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-12 sm:h-14 md:h-16 w-auto"
          />
        </Link>

        {/* Right side controls */}
        <div ref={menuRef} className="relative flex items-center gap-3">
          <ThemeToggle />

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="p-2 rounded-md text-text hover:bg-muted/10 transition-colors"
          >
            <svg width="26" height="20" viewBox="0 0 26 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="0" y1="5" x2="26" y2="5" />
              <line x1="0" y1="15" x2="18" y2="15" />
            </svg>
          </button>

          {/* Dropdown */}
          <div
            className={`absolute top-full right-0 mt-2 w-52 bg-background border border-muted/20 rounded-xl shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top-right ${
              isOpen
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            {/* Nav links */}
            <nav className="flex flex-col p-2">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    pathname === path
                      ? 'bg-primary/10 text-primary'
                      : 'text-text/70 hover:bg-muted/10 hover:text-text'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Resume */}
            <div className="px-4 py-3 border-t border-muted/20">
              <a
                href="#"
                className="block text-center text-sm font-medium px-4 py-1.5 border border-muted/50 rounded-full hover:border-primary hover:text-primary transition-all duration-200"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
