import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const LinkedinIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    // Message is now optional as per user request
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    
    setIsSending(true)
    
    // Construct Gmail link (opens in new tab)
    const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message || 'No message provided.'}`)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=justrytechsolutions@gmail.com&su=${subject}&body=${body}`
    
    // Open Gmail
    window.open(gmailUrl, '_blank')
    
    // Keep loading state for a moment then show success
    setTimeout(() => {
      setIsSending(false)
      setSubmitted(true)
      setTimeout(() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }, 4000)
    }, 1500)
  }

  const inputStyle = (field) => ({
    width: '100%', padding: '0.875rem 1rem', borderRadius: '0.875rem',
    background: 'var(--bg-primary)',
    border: errors[field] ? '1px solid #ef4444' : '1px solid var(--border-color)',
    color: 'var(--text-primary)', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif',
    outline: 'none', transition: 'all 0.2s ease', boxSizing: 'border-box',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
  })

  return (
    <section id="contact" ref={ref}
      style={{ padding: '6rem 2rem', background: 'var(--bg-primary)' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{ color: '#6c63ff', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Contact</span>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.75rem', background: 'linear-gradient(135deg, var(--text-primary), #6c63ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Let's Build Something Together
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            Have an idea or project in mind? Let's turn it into reality.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
          >
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>Reach Out to Us</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
              Whether you have a project in mind or just want to explore possibilities, we're here to help you bring your vision to life. Let's talk.
            </p>

            {[
              { icon: <Mail size={20} color="#6c63ff" />, label: 'Email', value: 'justrytechsolutions@gmail.com' },
              { icon: <Phone size={20} color="#3b82f6" />, label: 'Phone', value: '93450 34653' },
              { icon: <MapPin size={20} color="#a78bfa" />, label: 'Location', value: 'India' },
              { icon: <LinkedinIcon size={20} color="#0077b5" />, label: 'LinkedIn', value: 'justry-tech-solutions-undefined-66b772403', href: 'https://www.linkedin.com/in/justry-tech-solutions-undefined-66b772403' },
              { icon: <InstagramIcon size={20} color="#e4405f" />, label: 'Instagram', value: 'justry_tech_solutions', href: 'https://www.instagram.com/justry_tech_solutions?igsh=bTFubHcxMnY5aWV4&utm_source=qr' },
            ].map((info, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '0.875rem', background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {info.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.7, marginBottom: '0.15rem' }}>{info.label}</div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                    {info.label === 'Email' ? (
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.value}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.1s' }} onMouseEnter={e => e.target.style.color = '#6c63ff'} onMouseLeave={e => e.target.style.color = 'inherit'}>
                        {info.value}
                      </a>
                    ) : info.label === 'Phone' ? (
                      <a href={`tel:${info.value.replace(/\s+/g, '')}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.1s' }} onMouseEnter={e => e.target.style.color = '#3b82f6'} onMouseLeave={e => e.target.style.color = 'inherit'}>
                        {info.value}
                      </a>
                    ) : (info.label === 'LinkedIn' || info.label === 'Instagram') ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.1s' }} onMouseEnter={e => e.target.style.color = info.label === 'LinkedIn' ? '#0077b5' : '#e4405f'} onMouseLeave={e => e.target.style.color = 'inherit'}>
                        {info.value}
                      </a>
                    ) : info.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                style={{ textAlign: 'center', padding: '3rem', borderRadius: '1.25rem', background: '#f0fdf4', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                <CheckCircle size={56} color="#22c55e" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Redirected to Gmail!</h3>
                <p style={{ color: 'var(--text-secondary)' }}>You can now send your message from your Gmail account.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '1.5rem', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', boxShadow: '0 4px 20px rgba(108,99,255,0.04)' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Your Name</label>
                  <input value={form.name} onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }) }}
                    placeholder="Enter your name" style={inputStyle('name')}
                    onFocus={e => e.target.style.borderColor = '#6c63ff'}
                    onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(108,99,255,0.2)'}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>{errors.name}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                  <input value={form.email} onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }) }}
                    placeholder="your@email.com" type="email" style={inputStyle('email')}
                    onFocus={e => e.target.style.borderColor = '#6c63ff'}
                    onBlur={e => e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(108,99,255,0.2)'}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>{errors.email}</span>}
                </div>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                  <textarea value={form.message} onChange={e => { setForm({ ...form, message: e.target.value }); setErrors({ ...errors, message: '' }) }}
                    placeholder="Tell us about your project or idea..." rows={5}
                    style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '130px' }}
                    onFocus={e => e.target.style.borderColor = '#6c63ff'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(108,99,255,0.2)'}
                  />
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '0.25rem', display: 'block' }}>{errors.message}</span>}
                </div>
                <button type="submit" disabled={isSending} className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', position: 'relative', zIndex: 1, opacity: isSending ? 0.8 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}>
                  {isSending ? (
                    <>
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%' }} />
                      Redirecting to Mail...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
