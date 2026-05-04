import './WhatIsPlayer.css'
import CardImage from './CardImage.jsx'

export default function WhatIsPlayer() {
  return (
    <section className="player section" id="que-es-player">
      <div className="container player__inner">
        <header className="player__header">
          <h2 className="player__title">
            ¿Qué es ser un <span className="text-blue">Player</span>?
          </h2>
          <p className="player__lead">
            Es un cambio de chip total. Olvidate de ser un espectador esperando
            que te caiga la data; acá <strong>sos vos</strong> el que entra a la
            cancha y decide cómo armar su propio futuro.
          </p>
        </header>

        <div className="player__cards">
          <article className="player-card">
            <CardImage
              src="/images/player/aula-tradicional.jpg"
              alt="Aula tradicional"
              className="player-card__img player-card__img--old"
            />
            <div className="player-card__body">
              <h3>Aula tradicional</h3>
              <p>
                Estructuras tiesas, el profe que se cree el dueño del saber y
                exámenes estáticos que te quitan las ganas de todo.
              </p>
            </div>
          </article>

          <article className="player-card">
            <CardImage
              src="/images/player/avalith-academy.jpg"
              alt="Avalith Academy"
              className="player-card__img player-card__img--new"
            />
            <div className="player-card__body">
              <h3>Avalith Academy</h3>
              <p>
                Mesas para trabajar en equipo, mentores que te dan una mano y
                aprendés mientras colaborás en proyectos reales.
              </p>
            </div>
          </article>
        </div>

        <div className="player__cta-wrap">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
