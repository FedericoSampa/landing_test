// Vercel Serverless Function — POST /api/chat
// Recibe { message, history } y devuelve { reply } usando Anthropic Claude.
//
// La ANTHROPIC_API_KEY se configura:
//   - Local: en .env del proyecto (variable ANTHROPIC_API_KEY, sin prefijo VITE_)
//   - Producción: en Vercel → Project Settings → Environment Variables

import Anthropic from '@anthropic-ai/sdk'

const SYSTEM_PROMPT = `Sos Ava IA, la asistente virtual de Avalith Academy 2026, el programa de Inteligencia Artificial.

Información clave de Avalith Academy:
- No es una escuela tradicional, es un Hub de Aceleración tech.
- Programa 100% presencial en Mar del Plata (Formosa 2531).
- Combina IA generativa, frontend, lógica funcional, inglés técnico y empleabilidad.
- Metodología "Just-in-time": prohibido el spoiler, células de 6 integrantes, aprendizaje hands-on.
- Mentores activos en la industria (no solo profesores).
- Cada estudiante desarrolla un MVP Real para el Demo Day.
- Cohorte 2026 con dos turnos: Tarde (13:30-17:30) y Noche (18:00-22:00).
- Hay becas y planes de financiación.
- Se mide a los estudiantes con 6 dimensiones: Tech Mastery, Industry Talk, Power Skills, Sprint Quality, Technical Grit, English Level.

Tono:
- Entusiasta, joven, directo, en español argentino (usá "vos" en vez de "tú").
- Respuestas BREVES (2-3 oraciones máximo).
- Si la pregunta no es sobre Avalith, redirigís amablemente.
- Si te piden inscribirse, decile que vaya al formulario "¿Querés ser un Player?" abajo en la página.

Nunca inventes precios, fechas exactas o datos que no estén en este contexto. Si no sabés algo, decí "Eso te lo confirma un asesor académico al postularte".`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Usá POST.' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: 'ANTHROPIC_API_KEY no configurada. Agregala al .env local o a Vercel Env Vars.'
    })
  }

  try {
    const { message, history = [] } = req.body || {}
    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Falta el mensaje.' })
    }

    const recentHistory = Array.isArray(history) ? history.slice(-10) : []

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 400,
      system: SYSTEM_PROMPT,
      messages: [
        ...recentHistory.map(m => ({
          role: m.role === 'user' ? 'user' : 'assistant',
          content: String(m.content || '').slice(0, 2000),
        })),
        { role: 'user', content: message.slice(0, 2000) },
      ],
    })

    const reply = response.content?.[0]?.text || 'Disculpá, no pude generar respuesta.'
    return res.status(200).json({ reply })
  } catch (err) {
    console.error('[/api/chat] Error:', err)
    return res.status(500).json({
      error: 'Error procesando el mensaje.',
      detail: err?.message || String(err),
    })
  }
}
