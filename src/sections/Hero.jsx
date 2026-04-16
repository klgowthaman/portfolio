import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return [count, setStarted]
}

function StatCounter({ value, label, started }) {
  const [count, setStarted] = useCounter(value)
  useEffect(() => { if (started) setStarted(true) }, [started, setStarted])
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.5rem', fontFamily: 'Poppins, sans-serif', fontWeight: 800, background: 'linear-gradient(135deg, #6c63ff, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count}+
      </div>
      <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{label}</div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef(null)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" ref={heroRef}
      style={{
        minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      {/* Animated orbs (adjusted for dark mode visibility) */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', opacity: 0.6 }}>
        <div style={{ position: 'absolute', width: '800px', height: '800px', borderRadius: '50%', top: '-300px', left: '-200px', background: 'radial-gradient(circle, rgba(108,99,255,0.15) 0%, transparent 70%)', animation: 'float 8s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: '600px', height: '600px', borderRadius: '50%', top: '50%', right: '-200px', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', animation: 'float 10s ease-in-out infinite 2s' }} />
        <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', bottom: '-100px', left: '30%', background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)', animation: 'float 7s ease-in-out infinite 1s' }} />
        {/* Grid overlay using CSS variable */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '920px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', paddingTop: '80px' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(108,99,255,0.10)', border: '1px solid rgba(108,99,255,0.25)',
            borderRadius: '9999px', padding: '0.5rem 1.25rem', marginBottom: '2rem',
            fontSize: '0.875rem', color: '#6c63ff', fontWeight: 500
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6c63ff', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
          Smart Digital Solutions for Modern Businesses ✨
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.1, marginBottom: '1rem',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, #4c1d95 40%, #6c63ff 70%, #3b82f6 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}
        >
          Justry Tech Solutions
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: '#6c63ff', letterSpacing: '0.25em', marginBottom: '1.5rem', marginTop: '0.5rem' }}
        >
          INNOVATE. GROW. SUCCEED.
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto 2.5rem' }}
        >
          We design and develop high-performance websites, mobile applications, and automation systems tailored to your business needs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <button className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', position: 'relative', zIndex: 1 }}
          >
            Get Started <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap',
            padding: '2rem', borderRadius: '1.25rem',
            background: 'rgba(108,99,255,0.05)',
            border: '1px solid var(--border-color)',
            backdropFilter: 'blur(10px)'
          }}
          className="stats-container"
        >
          <StatCounter value={5} label="Projects Delivered" started={statsStarted} />
          <div className="separator" style={{ width: '1px', background: 'rgba(108,99,255,0.2)' }} />
          <StatCounter value={10} label="Happy Clients" started={statsStarted} />
          <div className="separator" style={{ width: '1px', background: 'rgba(108,99,255,0.2)' }} />
          <StatCounter value={1} label="Year of Excellence" started={statsStarted} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        onClick={scrollToAbout}
        style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(108,99,255,0.4)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem'
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>SCROLL</span>
        <ChevronDown size={20} />
      </motion.button>

      <style>{`
        @media (max-width: 768px) {
          .stats-container { gap: 2rem !important; flex-direction: column !important; align-items: center !important; }
          .separator { display: none !important; }
        }
      `}</style>
    </section>
  )
}
