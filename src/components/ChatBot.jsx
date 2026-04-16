import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'

const replies = [
  "Hi! I'm your AI assistant. How can I help you today?",
  "Great question! Our team specializes in web development, app development, automation solutions, and AI-based systems.",
  "We'd love to work with you! You can reach us via the contact form on this page or email us at justrytechsolutions@gmail.com.",
  "We typically deliver projects within 2-8 weeks depending on the complexity and scope.",
  "Justry Tech Solutions focuses on custom-built digital products. No templates, just pure technical excellence."
]

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "👋 Hi! I'm your AI assistant from Justry Tech. How can I help you today?" }
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    const userMsg = { from: 'user', text: input }
    const botMsg = { from: 'bot', text: replies[Math.floor(Math.random() * replies.length)] }
    setMessages(prev => [...prev, userMsg, botMsg])
    setInput('')
  }

  return (
    <>
      {/* Chat button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 998,
          width: '56px', height: '56px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
          border: 'none', cursor: 'pointer', color: 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 30px rgba(108,99,255,0.4)',
          animation: 'pulse-glow 3s ease-in-out infinite'
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            style={{
              position: 'fixed', bottom: '5.5rem', right: '1.5rem', zIndex: 997,
              width: '320px', height: '420px',
              background: 'var(--card-bg)',
              borderRadius: '1.25rem',
              border: '1px solid var(--border-color)',
              display: 'flex', flexDirection: 'column',
              boxShadow: '0 20px 60px rgba(108,99,255,0.2)',
              color: 'var(--text-primary)'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1rem 1.25rem',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex', alignItems: 'center', gap: '0.75rem'
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Bot size={18} color="white" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>Justry AI Assistant</div>
                <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 500 }}>● Online</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{
                    maxWidth: '85%', padding: '0.625rem 0.875rem', borderRadius: '1rem',
                    background: msg.from === 'user'
                      ? 'linear-gradient(135deg, #6c63ff, #3b82f6)'
                      : 'var(--bg-secondary)',
                    color: msg.from === 'user' ? 'white' : 'var(--text-primary)',
                    fontSize: '0.85rem', lineHeight: 1.5,
                    border: msg.from === 'bot' ? '1px solid var(--border-color)' : 'none',
                    borderBottomRightRadius: msg.from === 'user' ? '0.25rem' : '1rem',
                    borderBottomLeftRadius: msg.from === 'bot' ? '0.25rem' : '1rem',
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem' }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Type a message..."
                style={{
                  flex: 1, background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
                  borderRadius: '0.75rem', padding: '0.5rem 0.875rem', color: 'var(--text-primary)',
                  fontSize: '0.875rem', outline: 'none', fontFamily: 'Inter, sans-serif'
                }}
              />
              <button onClick={send} style={{
                width: '38px', height: '38px', borderRadius: '0.75rem',
                background: 'linear-gradient(135deg, #6c63ff, #3b82f6)',
                border: 'none', cursor: 'pointer', color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
