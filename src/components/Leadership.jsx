import './Leadership.css'
import CardImage from './CardImage.jsx'

const stages = [
  {
    title: 'Todos aprenden juntos',
    rich: (
      <>
        <strong>Nivelación total.</strong> Todos arrancan compartiendo las bases
        técnicas y la cultura del equipo. Es el momento de generar química y
        entender el ritmo del juego.
      </>
    ),
    raised: false,
    img: '/images/leadership/team-up.jpg',
  },
  {
    tag: 'Performance test',
    title: 'Emergencia',
    rich: (
      <>
        Bajo la presión de los Sprints, los <strong>líderes naturales</strong> emergen.
        No es el que más sabe, es el que mejor mueve las piezas y guía al equipo
        hacia la solución.
      </>
    ),
    raised: true,
    img: '/images/leadership/emergencia.jpg',
  },
  {
    tag: 'Rank Up',
    title: 'Formalización',
    rich: (
      <>
        El Líder Académico oficializa lo que se vio dentro de la cancha.{' '}
        <strong>Los roles se formalizan</strong> según el rendimiento real,
        cerrando la estructura de una célula de alto impacto.
      </>
    ),
    raised: false,
    img: '/images/leadership/rank-up.jpg',
  },
]

export default function Leadership() {
  return (
    <section className="lead section" id="liderazgo">
      <div className="container lead__inner">
        <header className="lead__header">
          <h2><span className="text-blue">Camino</span> del liderazgo</h2>
          <p>
            No pedís el mando, <strong>te hacés cargo</strong>. Así es como
            escalás en el <strong className="text-blue-bold">PATH</strong>.
          </p>
        </header>

        <div className="lead__cards">
          {stages.map((s, i) => (
            <article key={i} className={`lead-card ${s.raised ? 'is-raised' : ''}`}>
              <CardImage
                src={s.img}
                alt={s.title}
                className={`lead-card__img lead-card__img--${i}`}
              />
              <div className="lead-card__body">
                <h3>{s.title}</h3>
                <p>{s.rich}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="lead__cta-wrap">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
