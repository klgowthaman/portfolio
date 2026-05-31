import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'

const LinkedinIcon = ({ size, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const quickLinks = ['Home', 'About', 'Services', 'Process', 'Contact']
const services = ['Web Development', 'App Development', 'Automation Solutions', 'AI-Based Solutions', 'Custom Tech Solutions']

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', padding: '4rem 2rem 2rem', color: 'var(--text-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <img src="/assets/logo.png" alt="Justry Tech" style={{ height: '36px', width: '36px', objectFit: 'cover', borderRadius: '50%' }} />
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Justry Tech Solutions
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: '230px' }}>
              Building smart digital solutions for modern businesses. Web, App, Automation & AI.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/justry-tech-solutions-undefined-66b772403' },
                { icon: <InstagramIcon size={18} />, href: 'https://www.instagram.com/justry_tech_solutions?igsh=bTFubHcxMnY5aWV4&utm_source=qr' },
              ].map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', scale: 1.05 }}
                  style={{ width: '42px', height: '42px', borderRadius: '0.75rem', background: 'var(--border-color)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)', textDecoration: 'none', transition: 'all 0.1s ease' }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map((link, i) => (
                <motion.button key={i} onClick={() => scrollTo(link)}
                  whileHover={{ color: 'var(--text-primary)' }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '0.875rem', textAlign: 'left', padding: 0, transition: 'color 0.1s' }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '0.95rem' }}>Our Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {services.map((svc, i) => (
                <span key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{svc}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.95rem' }}>Get In Touch</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Have a project? Let's talk and build something great together.
            </p>
            <button className="btn-primary" style={{ position: 'relative', zIndex: 1, fontSize: '0.8rem', padding: '0.6rem 1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '1.25rem' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <ArrowUpRight size={14} /> Start a Project
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
              <Mail size={15} color="var(--text-primary)" />
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=justrytechsolutions@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', textDecoration: 'none', transition: 'color 0.1s' }} onMouseEnter={e => e.target.style.color = 'var(--text-primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>justrytechsolutions@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', opacity: 0.6, fontSize: '0.8rem' }}>
            © {year} Justry Tech Solutions. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map((link, i) => (
              <motion.a key={i} href="#" style={{ color: 'var(--text-secondary)', opacity: 0.6, fontSize: '0.8rem', textDecoration: 'none', transition: 'all 0.1s' }}
                whileHover={{ color: 'var(--text-primary)', opacity: 1 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
