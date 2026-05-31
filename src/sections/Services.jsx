import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Smartphone, Zap, Cpu, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Globe size={28} color="#6c63ff" />,
    color: '#6c63ff',
    title: 'Web Development',
    description: 'We build fast, responsive, and modern websites that represent your brand and drive results. From landing pages to full-stack web apps.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Custom UI/UX'],
  },
  {
    icon: <Smartphone size={28} color="#3b82f6" />,
    color: '#3b82f6',
    title: 'App Development',
    description: 'We create user-friendly mobile and web applications tailored to your business goals — clean, scalable, and built to grow.',
    features: ['iOS & Android', 'Cross-Platform', 'API Integration', 'Smooth UX'],
  },
  {
    icon: <Zap size={28} color="#a78bfa" />,
    color: '#a78bfa',
    title: 'Automation Solutions',
    description: 'We help automate repetitive tasks and workflows to save time and improve efficiency — from simple scripts to complex pipelines.',
    features: ['Workflow Automation', 'Process Optimization', 'Python Scripts', 'Integration Tools'],
  },
  {
    icon: <Cpu size={28} color="#22d3ee" />,
    color: '#22d3ee',
    title: 'Custom Tech Solutions',
    description: 'We develop solutions based entirely on your unique requirements — no templates, no shortcuts. Built from scratch to fit your needs.',
    features: ['Requirement-First Approach', 'AI Integration', 'Scalable Architecture', 'Dedicated Support'],
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref}
      style={{ padding: '6rem 2rem', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Services</span>
          <h2 style={{
            fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem',
            background: 'linear-gradient(135deg, var(--text-primary), #6c63ff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            What We Offer
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '550px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            End-to-end digital solutions crafted to help your business grow and thrive in a competitive market.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                whileHover={{ y: -8, boxShadow: `0 15px 35px ${svc.color}15` }}
                style={{
                  padding: '2rem', borderRadius: '1.25rem', cursor: 'default',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  transition: 'all 0.1s ease',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1)'
                }}
              >
              {/* Color top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${svc.color}, transparent)` }} />

              <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: `${svc.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                {svc.icon}
              </div>

              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                {svc.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {svc.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {svc.features.map((f, j) => (
                  <span key={j} style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: `${svc.color}12`, color: svc.color, border: `1px solid ${svc.color}25`, fontWeight: 500 }}>{f}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button className="btn-primary" style={{ position: 'relative', zIndex: 1, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Your Project <ArrowRight size={17} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
