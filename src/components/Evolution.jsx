import './Evolution.css'

const dimensions = [
  { num: 1, title: 'Tech Mastery', desc: 'Absorción de herramientas de IA.' },
  { num: 2, title: 'Industry Talk', desc: 'Uso del lenguaje del sector.' },
  { num: 3, title: 'Power Skills', desc: 'Calidad de la colaboración grupal.' },
  { num: 4, title: 'Sprint Quality', desc: 'Rigor técnico en cada Sprint.' },
  { num: 5, title: 'Technical Grit', desc: 'La métrica de la "valentía técnica" para enfrentar todo lo nuevo.' },
  { num: 6, title: 'English Level', desc: 'El idioma como herramienta esencial.' },
]

const positions = [
  { top: '0%', left: '50%' },
  { top: '25%', left: '100%' },
  { top: '75%', left: '100%' },
  { top: '100%', left: '50%' },
  { top: '75%', left: '0%' },
  { top: '25%', left: '0%' },
]

export default function Evolution() {
  return (
    <section className="evo section" id="evolucion">
      <div className="evo__bg" aria-hidden="true">
        <div className="evo__circle evo__circle--1 bg-orb" />
        <div className="evo__circle evo__circle--2 bg-orb" />
        <div className="evo__circle evo__circle--3 bg-orb" />
      </div>

      <div className="container evo__inner">
        <header className="evo__header">
          <h2>¡Evolución del Player!</h2>
          <p>
            <strong>Del examen estático a las métricas de la industria.</strong><br />
            Acá no hay notas del 1 al 10. Medimos tu crecimiento real a través de
            las <strong>6 dimensiones</strong> que exige el mercado global hoy.
          </p>
        </header>

        <div className="evo__diagram">
          <svg
            className="evo__radar"
            viewBox="-110 -110 220 220"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="evoCenter" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7AE3FF" />
                <stop offset="60%" stopColor="#2D4DFF" />
                <stop offset="100%" stopColor="rgba(45,77,255,0)" />
              </radialGradient>
              <marker id="evoArrow" viewBox="0 0 10 10" refX="8" refY="5"
                markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255,255,255,0.7)" />
              </marker>
            </defs>

            <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45"
              fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
            <polygon points="0,-65 56,-32 56,32 0,65 -56,32 -56,-32"
              fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20"
              fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

            <g stroke="rgba(255,255,255,0.45)" strokeWidth="1" fill="none">
              <line x1="0" y1="0" x2="0" y2="-86" markerEnd="url(#evoArrow)" />
              <line x1="0" y1="0" x2="74" y2="-43" markerEnd="url(#evoArrow)" />
              <line x1="0" y1="0" x2="74" y2="43" markerEnd="url(#evoArrow)" />
              <line x1="0" y1="0" x2="0" y2="86" markerEnd="url(#evoArrow)" />
              <line x1="0" y1="0" x2="-74" y2="43" markerEnd="url(#evoArrow)" />
              <line x1="0" y1="0" x2="-74" y2="-43" markerEnd="url(#evoArrow)" />
            </g>

            <circle cx="0" cy="0" r="55" fill="url(#evoCenter)" opacity="0.85" />
            <circle cx="0" cy="0" r="22" fill="#7AE3FF" opacity="0.9" />
            <circle cx="0" cy="0" r="14" fill="#fff" opacity="0.95" />
          </svg>

          {dimensions.map((d, i) => (
            <div
              key={d.num}
              className={`evo__node evo__node--${i + 1}`}
              style={{ top: positions[i].top, left: positions[i].left }}
            >
              <span className="evo__num">{d.num}</span>
              <div className="evo__chip">
                <strong>{d.title}</strong>
                <small>{d.desc}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="evo__cta">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
