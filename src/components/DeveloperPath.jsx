import './DeveloperPath.css'
import CardImage from './CardImage.jsx'

const cycles = [
  { title: 'Engineering Foundations', text: 'Foco en el dominio de Python para IA, estructuras de datos y metodologías ágiles.', art: 'foundations', img: '/images/path/foundations.jpg' },
  { title: 'IA Intelligence & LLMs', text: 'El primer contacto real con el cerebro de la IA: Prompt Engineering, arquitectura de modelos y soluciones de API.', art: 'intelligence', img: '/images/path/intelligence.jpg' },
  { title: 'Autonomous Agent', text: 'Creación de sistemas que actúan por sí solos utilizando Agentic Frameworks, arquitectura RAG y la lógica de automatización.', art: 'agent', img: '/images/path/agent.jpg' },
  { title: 'MVP Strategy & Launch', text: 'La fase final de ejecución para desarrollar un Producto Mínimo Viable (MVP) real y prepararse para el Demo Day.', art: 'mvp', img: '/images/path/mvp.jpg' },
  { title: 'Tech English Mastery', text: 'Inglés técnico específico para la industria, prácticas de comunicación global y redacción de documentación profesional.', art: 'english', img: '/images/path/english.jpg' },
  { title: 'PATH & Placement', text: 'Optimización de marca personal (LinkedIn/GitHub), simulacros de entrevistas globales y conexión directa con la Talent Network que maneja Avalith.', art: 'path', img: '/images/path/placement.jpg' },
]

export default function DeveloperPath() {
  return (
    <section className="path section" id="path">
      <div className="container path__inner">
        <header className="path__header">
          <h2>The <span className="text-blue">IA</span> Developer Path</h2>
          <p>El entrenamiento intensivo dividido en ciclos de evolución.</p>
        </header>

        <div className="path__grid">
          {cycles.map((c, i) => (
            <article key={i} className="path-card">
              <CardImage
                src={c.img}
                alt={c.title}
                className={`path-card__art path-card__art--${c.art}`}
              />
              <div className="path-card__body">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="path__cta-wrap">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
