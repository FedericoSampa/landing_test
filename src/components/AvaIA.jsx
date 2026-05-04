import { useState, useRef, useEffect } from 'react'
import './AvaIA.css'

const INITIAL_MSG = {
  role: 'assistant',
  content: `La Inteligencia Artificial no es solo una tendencia, es el nuevo paradigma de productividad. En Avalith Academy, preparamos a desarrolladores, ingenieros y docentes para liderar esta transición.

¿Estás listo para integrar agentes autónomos y LLMs en tu flujo de trabajo profesional?`,
}

export default function AvaIA() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([INITIAL_MSG])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const bubbleRef = useRef(null)

  // Auto-scroll a la última respuesta
  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.scrollTop = bubbleRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text || loading) return

    // Sumar pregunta del usuario al historial
    const userMsg = { role: 'user', content: text }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)
    setError('')

    try {
      // Mandamos solo el último contexto (sin el mensaje inicial canned)
      const history = newMessages
        .slice(1, -1)
        .map(m => ({ role: m.role, content: m.content }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Error en el servidor')

      setMessages(m => [...m, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setError(err.message || 'No pude conectarme. Intentá de nuevo.')
      // Removemos el mensaje del usuario para que pueda reintentar
      setMessages(m => m.slice(0, -1))
      setInput(text)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="ava" id="ava-ia">
      <div className="container ava__inner">
        <div className="ava__orb-wrap" aria-hidden="true">
          <svg className="ava__orb" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="orbBody" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6B8AFF" />
                <stop offset="55%" stopColor="#2D4DFF" />
                <stop offset="100%" stopColor="#0A1A6B" />
              </radialGradient>
              <radialGradient id="orbHi" cx="35%" cy="30%" r="30%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
              <radialGradient id="orbHi2" cx="65%" cy="75%" r="20%">
                <stop offset="0%" stopColor="rgba(120, 180, 255, 0.7)" />
                <stop offset="100%" stopColor="rgba(120, 180, 255, 0)" />
              </radialGradient>
              <radialGradient id="orbShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(45, 77, 255, 0.45)" />
                <stop offset="100%" stopColor="rgba(45, 77, 255, 0)" />
              </radialGradient>
            </defs>
            <ellipse cx="100" cy="180" rx="70" ry="10" fill="rgba(45, 77, 255, 0.25)" />
            <circle cx="100" cy="100" r="98" fill="url(#orbShadow)" />
            <circle cx="100" cy="100" r="78" fill="url(#orbBody)" />
            <circle cx="100" cy="100" r="78" fill="url(#orbHi)" />
            <circle cx="100" cy="100" r="78" fill="url(#orbHi2)" />
            <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </svg>
        </div>

        <h2 className="ava__title">
          ¡Hola, Soy <span className="ava__title-accent">Ava IA</span>!
        </h2>
        <p className="ava__subtitle">
          ¡Bienvenido a <strong>Avalith Academy</strong>! ¿En qué te puedo ayudar?
        </p>

        <div className="ava__chat">
          <div className="ava__label">
            AVA IA
            <span className="ava__label-dot" />
          </div>

          <div className="ava__bubble" ref={bubbleRef}>
            {messages.map((m, i) => (
              <div key={i} className={`ava__msg ava__msg--${m.role}`}>
                {String(m.content).split('\n').map((line, j) => (
                  line.trim() ? <p key={j}>{line}</p> : null
                ))}
              </div>
            ))}
            {loading && (
              <div className="ava__msg ava__msg--assistant">
                <p className="ava__typing" aria-label="Ava está escribiendo">
                  <span /><span /><span />
                </p>
              </div>
            )}
            {error && (
              <p className="ava__error" role="alert">⚠️ {error}</p>
            )}
          </div>

          <form className="ava__form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Pregúntame las dudas que tengas..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Escribí tu pregunta"
              disabled={loading}
            />
            <button
              type="submit"
              className="ava__send"
              aria-label="Enviar"
              disabled={loading || !input.trim()}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>

          <p className="ava__footer">SISTEMAS OPERADOS POR AVALITH ENGINE V4.0</p>
        </div>
      </div>
    </section>
  )
}
