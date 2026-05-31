import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Smartphone, Zap, Brain, Target, Eye, CheckCircle } from 'lucide-react'

const expertise = [
  { icon: <Globe size={22} color="#6c63ff" />, label: 'Custom Website Development', text: 'Responsive, modern websites that represent your brand.' },
  { icon: <Smartphone size={22} color="#3b82f6" />, label: 'Mobile App Development', text: 'User-friendly mobile and web applications for your business.' },
  { icon: <Zap size={22} color="#a78bfa" />, label: 'Automation Solutions', text: 'Automate tasks and workflows to save time and improve efficiency.' },
  { icon: <Brain size={22} color="#22d3ee" />, label: 'AI-Based Solutions', text: 'Intelligent systems powered by modern AI to drive smarter outcomes.' },
]

const whyUs = [
  'Custom-built solutions — no templates',
  'High performance and clean code',
  'Affordable pricing for startups',
  'Dedicated support & communication',
  'Passion-driven development',
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Label */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>About Us</span>
          <h2 style={{
            textAlign: 'center', fontFamily: 'Poppins, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', marginBottom: '1.25rem',
            background: 'linear-gradient(135deg, var(--text-primary), #6c63ff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
          }}>
            Who We Are
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8, fontSize: '1.05rem' }}>
            Justry Tech Solutions is a growing tech startup focused on delivering customized digital solutions for businesses and individuals. We specialize in transforming ideas into powerful digital products that improve efficiency, user experience, and business growth.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {[
            { icon: <Target size={26} color="#6c63ff" />, label: 'Our Mission', text: 'To provide reliable, scalable, and innovative technology solutions that solve real-world problems.', variant: slideInLeft },
            { icon: <Eye size={26} color="#3b82f6" />, label: 'Our Vision', text: 'To become a trusted technology partner for startups and businesses worldwide.', variant: slideInRight },
          ].map((item, i) => (
              <motion.div key={i} variants={item.variant}
                style={{
                  padding: '2rem', borderRadius: '1.25rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  transition: 'all 0.1s ease',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)'
                }}
              >
              <div style={{ marginBottom: '1rem', width: '52px', height: '52px', borderRadius: '0.875rem', background: 'rgba(108,99,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{item.label}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Areas */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Key Areas</span>
          <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>What We Specialize In</h3>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
          {expertise.map((item, i) => (
              <motion.div key={i} variants={fadeUp}
                style={{
                  padding: '1.5rem', borderRadius: '1rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-color)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 4px 16px rgba(108,99,255,0.06)',
                  transition: 'all 0.1s ease'
                }}
              >
              <div style={{ marginBottom: '0.75rem', width: '44px', height: '44px', borderRadius: '0.75rem', background: 'rgba(108,99,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{item.label}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.875rem' }}>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}
          style={{
            background: 'linear-gradient(135deg, rgba(108,99,255,0.06), rgba(59,130,246,0.04))',
            border: '1px solid rgba(108,99,255,0.12)',
            borderRadius: '1.5rem', padding: '3rem',
          }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Why Choose Us</span>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--text-primary)', marginTop: '0.5rem' }}>The Justry Advantage</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {whyUs.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <CheckCircle size={18} color="#6c63ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
