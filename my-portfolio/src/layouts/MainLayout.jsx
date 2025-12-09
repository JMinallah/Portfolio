import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import MobileHeader from '../components/MobileHeader'
import MobileMenu from '../components/MobileMenu'

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen text-text">
      <Sidebar />
      <MobileHeader onOpen={() => setMobileOpen(true)} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="md:pl-64">
        <div className="max-w-6xl mx-auto px-6 py-10">{children}</div>

        <footer className="border-t border-muted mt-16">
          <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="text-sm text-muted">© {new Date().getFullYear()} Your Name</div>
            <div className="text-sm text-muted">Built with ❤️</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
