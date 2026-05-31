import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0,
        background: 'linear-gradient(135deg, #ffffff 0%, #f9f9ff 50%, #ffffff 100%)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        zIndex: 9999
      }}
    >
      {/* Animated orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', width: '600px', height: '600px',
          borderRadius: '50%', top: '-200px', left: '-200px',
          background: 'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)',
          animation: 'pulse-glow 3s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', width: '400px', height: '400px',
          borderRadius: '50%', bottom: '-100px', right: '-100px',
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          animation: 'pulse-glow 3s ease-in-out infinite 1s'
        }} />
      </div>

      {/* Logo + loader */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', position: 'relative' }}
      >
        {/* Brand */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
        >
          <img src="/assets/logo.png" alt="Justry Tech" style={{ height: '80px', width: '80px', objectFit: 'cover', borderRadius: '50%', marginBottom: '0.5rem', boxShadow: '0 8px 30px rgba(108,99,255,0.2)' }} />
          <div
            style={{
              fontSize: '2rem', fontFamily: 'Poppins, sans-serif',
              fontWeight: 800, letterSpacing: '-0.02em',
              color: 'var(--text-primary)'
            }}
          >
            Justry Tech
          </div>
        </motion.div>

        {/* Spinner */}
        <div style={{
          width: '56px', height: '56px',
          border: '3px solid rgba(108,99,255,0.15)',
          borderTop: '3px solid #6c63ff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: 'rgba(0,0,0,0.4)', fontSize: '0.875rem', letterSpacing: '0.1em', fontWeight: 500 }}
        >
          LOADING EXPERIENCE...
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
