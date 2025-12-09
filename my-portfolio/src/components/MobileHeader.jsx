import ThemeToggle from './ThemeToggle'

export default function MobileHeader({ onOpen }) {
  return (
    <header className="md:hidden sticky top-0 z-40 bg-background/90 backdrop-blur-sm border-b border-muted/60">
      <div className="flex items-center justify-between px-4 py-3">
        <button onClick={onOpen} aria-label="Open menu" className="p-2 rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <div className="font-semibold">Your Name</div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
