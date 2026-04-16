import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', label: 'Requirement Analysis', desc: 'We begin by thoroughly understanding your business goals, target audience, and project needs.', color: '#6c63ff' },
  { num: '02', label: 'Planning & Design', desc: 'We structure the project and create UI/UX wireframes aligned to your brand and user experience.', color: '#3b82f6' },
  { num: '03', label: 'Development', desc: 'Our team builds the solution using modern technologies — clean, scalable, and performance-first.', color: '#a78bfa' },
  { num: '04', label: 'Testing', desc: 'Rigorous quality assurance and performance testing ensures everything works perfectly before launch.', color: '#22d3ee' },
  { num: '05', label: 'Deployment & Support', desc: 'We handle the launch and provide ongoing maintenance and dedicated support post-delivery.', color: '#f59e0b' },
]

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" ref={ref}
      style={{ padding: '6rem 2rem', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>How We Work</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', background: 'linear-gradient(135deg, var(--text-primary), #6c63ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Our Process
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            A systematic, transparent approach to transforming complex problems into elegant digital solutions.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{ position: 'absolute', top: '2.5rem', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, #6c63ff, #3b82f6, #a78bfa, #22d3ee, #f59e0b)', opacity: 0.25, borderRadius: '1px' }}
            className="hidden-mobile" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}aa)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem', boxShadow: `0 0 0 6px ${step.color}18`,
                    position: 'relative', zIndex: 1
                  }}
                >
                  <span style={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '0.875rem' }}>{step.num}</span>
                </motion.div>

                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '0.625rem' }}>
                  {step.label}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </section>
  )
}
