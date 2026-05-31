import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Ravi Kumar',
    role: 'Business Owner',
    text: 'Professional and reliable team. Delivered exactly what we needed. Justry Tech Solutions understood our requirements perfectly and executed flawlessly.',
    rating: 5
  },
  {
    name: 'Priya Sharma',
    role: 'Startup Founder',
    text: 'Great experience working with them. Highly recommended. Their communication was clear, their work was clean, and the final product exceeded expectations.',
    rating: 5
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section id="testimonials" ref={ref}
      style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)' }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Testimonials</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', color: 'var(--text-primary)' }}>
            What Our Clients Say
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            style={{
              padding: '3rem 2.5rem', borderRadius: '1.5rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--border-color)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              textAlign: 'center',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
              color: 'var(--text-primary)',
              transition: 'all 0.1s ease'
            }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} style={{ color: '#f59e0b', fontSize: '1.25rem' }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', maxWidth: '680px', margin: '0 auto 2rem' }}>
              "{testimonials[current].text}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                background: 'var(--text-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--bg-primary)', fontSize: '1.1rem'
              }}>
                {testimonials[current].name[0]}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--text-primary)' }}>{testimonials[current].name}</div>
                <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{testimonials[current].role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginTop: '2.5rem' }}>
          <button onClick={prev} style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--border-color)', border: '1px solid var(--border-color)', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                style={{ width: i === current ? '24px' : '8px', height: '8px', borderRadius: '4px', background: i === current ? 'var(--text-primary)' : 'var(--border-color)', border: 'none', cursor: 'pointer', transition: 'all 0.2s ease', padding: 0 }} />
            ))}
          </div>
          <button onClick={next} style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--border-color)', border: '1px solid var(--border-color)', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
