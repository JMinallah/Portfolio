import { useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'joviaminallah@gmail.com',
    href: 'mailto:joviaminallah@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Kampala, Uganda',
    href: null,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

const socials = [
  {
    label: 'GitHub',
    handle: 'JMinallah',
    href: 'https://github.com/JMinallah',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Jovia Minallah Matata',
    href: 'https://www.linkedin.com/in/jovia-minallah-matata-18b499356',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    handle: '@JoviaMinallah',
    href: 'https://twitter.com/JoviaMinallah',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.732-8.852L1.516 2.25H8.09l4.262 5.631 5.892-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
]

const inputBase =
  'w-full px-4 py-2.5 rounded-md border border-muted/40 bg-background text-text placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors text-sm'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    // basic client-side validation
    if (!form.name || !form.email || !form.message) {
      alert('Please complete name, email, and message.')
      return
    }

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    if (!endpoint) {
      // No endpoint configured — fallback to success for local/dev, but warn
      console.warn('No form endpoint configured. Set VITE_FORM_ENDPOINT in .env to a provider endpoint (Formspree, Getform, etc.).')
      setSubmitted(true)
      return
    }

    setSending(true)
    try {
      // Use FormData so providers like Formspree accept the submission (avoid JSON/CORS issues)
      const data = new FormData()
      Object.entries(form).forEach(([k, v]) => data.append(k, v))

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        const err = await res.text()
        console.error('Form submit error:', err)
        alert('Failed to send message. Please try again later.')
      }
    } catch (err) {
      console.error(err)
      alert('Failed to send message. Please check your connection.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* ─── Page header ─── */}
      <div data-aos="fade-up" className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Let&apos;s talk.</h1>
        <div className="splash-panel max-w-lg">
          <p className="text-muted leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi?
            My inbox is always open.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

        {/* ─── Left: contact info + socials ─── */}
        <div data-aos="fade-right">
          {/* Availability */}
          <div className="flex items-center gap-2.5 mb-10 p-4 rounded-xl border border-muted/25 bg-muted/5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
            <p className="text-sm">Open to new opportunities and freelance projects.</p>
          </div>

          {/* Contact details */}
          <div className="space-y-6 mb-10">
            {contactInfo.map(({ label, value, href, icon }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-muted/30 flex items-center justify-center text-muted shrink-0">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted uppercase tracking-widest mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="font-medium hover:text-primary transition-colors break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-4">Find me online</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, handle, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors group min-w-0"
                >
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {icon}
                  </span>
                  <span className="text-sm min-w-0 break-words">
                    <span className="font-medium text-text group-hover:text-primary">{label}</span>
                    <span className="ml-2 text-muted/70">{handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Right: form or success ─── */}
        {submitted ? (
          <div data-aos="fade-left" className="flex flex-col items-center justify-center text-center py-20 lg:py-0">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-primary">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Message sent!</h2>
            <p className="text-muted max-w-xs">
              Thanks for reaching out. I&apos;ll get back to you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm text-primary hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form data-aos="fade-left" onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className={inputBase}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className={inputBase}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputBase}
                placeholder="What's it about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                className={`${inputBase} resize-none`}
                placeholder="Tell me about your project, idea, or just say hey..."
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-medium rounded-md hover:bg-secondary transition-colors duration-200 text-sm"
              disabled={sending}
            >
              {sending ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
