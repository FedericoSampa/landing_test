import './Method.css'
import CardImage from './CardImage.jsx'

const pillars = [
  {
    tag: 'Autonomía',
    title: '¡Prohibido el spoiler!',
    text: 'Si el mentor te da la solución, no sirve. Usamos el método socrático: te devolvemos preguntas que te queman la cabeza para que vos mismo destrabes el nivel. Acá sos el dueño total de tu código.',
    art: 'autonomia',
    img: '/images/method/autonomia.jpg',
  },
  {
    tag: 'Colaboración',
    title: '¿Cómo es el Squad?',
    text: 'Trabajás en células de 6 integrantes. No estás solo: si la mesa se hunde, nos hundimos todos. El éxito es colectivo; si tu compañero se traba, tu misión es ayudarlo a salir adelante en equipo.',
    art: 'colaboracion',
    img: '/images/method/colaboracion.jpg',
  },
  {
    tag: 'Cambio',
    title: 'Adaptarse es el skill',
    text: 'La IA cambia todo el tiempo y vos tenés que volar con ella. No medimos cuánto sabés hoy, sino qué tan rápido aprendés lo que sale mañana. La adaptabilidad es la única competencia que jamás va a vencer.',
    art: 'cambio',
    img: '/images/method/cambio.jpg',
  },
]

export default function Method() {
  return (
    <section className="method section" id="metodo">
      <div className="container method__inner">
        <header className="method__header">
          <h2>El método: <span className="text-blue">Just-in-time</span></h2>
          <p>
            Dejá atrás el rol de espectador. Venís a <strong>transformar</strong> tu
            estructura de pensamiento para tomar el control de la inteligencia
            artificial y <strong>liderar la innovación</strong> que viene.
          </p>
        </header>

        <div className="method__cards">
          {pillars.map((p, i) => (
            <article key={i} className="method-card">
              <CardImage
                src={p.img}
                alt={p.tag}
                className={`method-card__art method-card__art--${p.art}`}
              />
              <div className="method-card__body">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="method__cta-wrap">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>

      <div className="method__banner">
        <div className="container">
          <h3>Your PATH, your rules.</h3>
          <p>Un entrenamiento 360° para dominar el stack de IA y liderar el mercado real</p>
        </div>
      </div>
    </section>
  )
}
