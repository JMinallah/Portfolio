import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      }
    }
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <label className="relative inline-block h-[26px] w-[50px] cursor-pointer" aria-label="Toggle theme">
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggle}
        className="h-0 w-0 opacity-0 absolute"
      />
      {/* Track */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-300 border ${
          isDark
            ? 'bg-primary/20 border-primary/60'
            : 'bg-muted/30 border-muted'
        }`}
      />
      {/* Knob */}
      <span
        className={`absolute top-[3px] h-[20px] w-[20px] rounded-full shadow-md transition-all duration-300 z-10 ${
          isDark
            ? 'left-[27px] bg-primary'
            : 'left-[3px] bg-white border border-muted/60'
        }`}
      />
    </label>
  )
}
