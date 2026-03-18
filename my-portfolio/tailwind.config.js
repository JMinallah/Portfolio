/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Dark mode configuration removed (defaults apply)
  theme: {
    extend: {
      colors: {
        // Refer to CSS variables so the runtime theme (light/dark) controls colors
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-bg)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)'
      }
    },
  },
  plugins: [],
}

