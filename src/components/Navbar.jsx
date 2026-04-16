import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled
          ? 'var(--glass-bg)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid var(--border-color)'
          : 'none',
        transition: 'all 0.1s ease',
        padding: '0 2rem'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home') }}
          style={{ textDecoration: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img src="/assets/logo.png" alt="Justry Tech" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '50%' }} />
            <span style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.25rem',
              background: 'linear-gradient(135deg, var(--text-primary), #6c63ff)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>
              Justry Tech
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}
          className="hidden-mobile">
          {navLinks.map(link => {
            const id = link.href.slice(1)
            const isActive = active === id
            return (
              <motion.button key={link.label}
                onClick={() => handleNav(link.href)}
                whileHover={{ color: '#6c63ff', backgroundColor: isActive ? 'rgba(108,99,255,0.2)' : 'rgba(108,99,255,0.08)' }}
                style={{
                  background: isActive ? 'rgba(108,99,255,0.15)' : 'transparent',
                  color: isActive ? '#6c63ff' : 'var(--text-secondary)',
                  border: 'none', cursor: 'pointer', padding: '0.5rem 1rem',
                  borderRadius: '0.5rem', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem',
                  fontWeight: isActive ? 600 : 400,
                  transition: 'background-color 0.1s ease, color 0.1s ease'
                }}
              >
                {link.label}
              </motion.button>
            )
          })}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(108,99,255,0.1)',
              border: '1px solid ' + (darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(108,99,255,0.2)'),
              color: darkMode ? '#a78bfa' : '#6c63ff',
              borderRadius: '0.75rem', padding: '0.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.1s ease'
            }}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA */}
          <button
            onClick={() => handleNav('#contact')}
            className="btn-primary hidden-mobile"
            style={{ fontSize: '0.875rem', padding: '0.5rem 1.5rem', position: 'relative', zIndex: 1 }}
          >
            Get Started
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none', background: 'transparent', border: 'none',
              color: darkMode ? '#e2e8f0' : '#1e293b', cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="mobile-only"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: darkMode ? 'rgba(10,10,15,0.97)' : 'rgba(248,249,255,0.97)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(108,99,255,0.15)',
            padding: '1rem 2rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '0.5rem'
          }}
        >
          {navLinks.map(link => (
            <button key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'transparent', border: 'none', cursor: 'pointer',
                color: 'var(--text-primary)',
                padding: '0.75rem 0', textAlign: 'left', fontFamily: 'Inter, sans-serif',
                fontSize: '1rem', fontWeight: 500, borderBottom: '1px solid var(--border-color)'
              }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
