import { createElement, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, User, Folder, Mail } from 'lucide-react'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', path: '/', Icon: Home },
  { label: 'About', path: '/about', Icon: User },
  { label: 'Projects', path: '/projects', Icon: Folder },
  { label: 'Contact', path: '/contact', Icon: Mail },
]

export default function Navbar() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto pl-4 md:pl-0 md:mx-3 pr-12 pt-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto" />
        </Link>

        {/* Desktop nav: horizontal links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-sm font-medium transition-colors ${
                pathname === path ? 'text-primary' : 'text-text/80 hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav: icons only with hover tooltip */}
        <nav className="flex md:hidden items-center gap-4">
          {navLinks.map(({ label, path, Icon }) => (
            <Link
              key={path}
              to={path}
              className={`relative group p-2 rounded-md transition-colors ${
                pathname === path
                  ? 'text-primary'
                  : 'text-text/90 hover:text-primary'
              }`}
              aria-label={label}
            >
              {createElement(Icon, { className: 'w-5 h-5', 'aria-hidden': 'true' })}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-muted/20 text-sm text-text px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {label}
                <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background"></span>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
