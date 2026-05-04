import './Stacks.css'
import CardImage from './CardImage.jsx'

const stacks = [
  {
    title: 'Mentor en IA & Automatización Inteligente',
    stack: 'n8n | OpenAI | Vercel.',
    expertise: 'Automatización avanzada, despliegue Cloud y APIs de IA.',
    learn: 'A crear sistemas autónomos que trabajen por vos e integrar inteligencia real en cualquier proyecto.',
    art: 'ia',
    img: '/images/stacks/ia.jpg',
  },
  {
    title: 'Mentor en Arquitectura Frontend & Git Pro',
    stack: 'FE Avanzado | Git | Testing QA',
    expertise: 'Desarrollo de interfaces modernas, flujos profesionales y calidad de código.',
    learn: 'A construir la cara visible de aplicaciones de nivel mundial y a dominar repositorios como un experto.',
    art: 'frontend',
    img: '/images/stacks/frontend.jpg',
  },
  {
    title: 'Mentor en lógica funcional & Product strategy',
    stack: 'FE Avanzado | Git | Testing QA',
    expertise: 'Desarrollo de interfaces modernas, flujos profesionales y calidad de código.',
    learn: 'A pensar como un profesional, dominando la lógica detrás de cada proceso en las líneas de código.',
    art: 'logic',
    img: '/images/stacks/logic.jpg',
  },
  {
    title: 'Mentor en English for Tech & Global Communication',
    stack: 'Technical English | Phonetic Training | Cross-cultural Communication',
    expertise: 'Entrevistas internacionales, redacción técnica y comunicación efectiva en equipos remotos.',
    learn: 'A eliminar la barrera del idioma, documentar código y a dominar la terminología técnica.',
    art: 'english',
    img: '/images/stacks/english.jpg',
  },
  {
    title: 'Mentor en Career Coaching & Empleabilidad 4.0',
    stack: 'Personal Branding | LinkedIn Optimization | Soft Skills',
    expertise: 'Diseño de perfiles de alto impacto, simulación de entrevistas técnicas y habilidades interpersonales.',
    learn: 'A construir tu trayectoria en un mar de oportunidades, dominar los softskills que buscan las grandes empresas tecnológicas.',
    art: 'career',
    img: '/images/stacks/career.jpg',
  },
]

export default function Stacks() {
  return (
    <section className="stacks section" id="stacks">
      <div className="container stacks__inner">
        <header className="stacks__header">
          <h2>Dominá los <span className="text-blue">stacks</span> de la industria</h2>
          <p>
            <strong>No es teoría, es despliegue.</strong> Especializate en los
            stacks más demandados, diseñados y mentoreados por expertos en actividad.
          </p>
        </header>

        <div className="stacks__grid">
          {stacks.map((s, i) => (
            <article key={i} className="stack-card">
              <CardImage
                src={s.img}
                alt={s.title}
                className={`stack-card__art stack-card__art--${s.art}`}
              />
              <div className="stack-card__body">
                <h3>{s.title}</h3>
                <ul className="stack-card__list">
                  <li><strong>Stack:</strong> {s.stack}</li>
                  <li><strong>Expertise:</strong> {s.expertise}</li>
                  <li><strong>¿Qué aprenderás?:</strong> {s.learn}</li>
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="stacks__cta-wrap">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
