import { useState } from 'react'
import './Squad.css'
import CardImage from './CardImage.jsx'

const roles = [
  {
    role: 'Los Mentores',
    title: '¡Ellos son tus guías!',
    text: 'No te van a dar la respuesta (prohibido el spoiler), te van a tirar preguntas para que te destrabes solo.',
    raised: false,
    img: '/images/squad/mentores.jpg',
  },
  {
    role: 'Los Players',
    title: '¡Ustedes son los protagonistas!',
    text: 'Juegan, construyen y fallan para aprender. El proyecto es el foco principal.',
    raised: true,
    img: '/images/squad/players.jpg',
  },
  {
    role: 'Líder Académico',
    title: '¡El árbitro dentro de la cancha!',
    text: 'Es el estratega que mira todas las jugadas completas en tiempo real.',
    raised: false,
    img: '/images/squad/lider.jpg',
  },
]

const BALL_CANDIDATES = [
  '/images/squad/ball.png',
  '/images/squad/ball.jpg',
  '/images/squad/ball.jpeg',
  '/images/squad/ball.webp',
]

function SoccerBallSVG() {
  return (
    <svg className="squad-ball" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ballBody" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#F2F4FA" />
          <stop offset="100%" stopColor="#7A8499" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="86" fill="url(#ballBody)" />
      <circle cx="110" cy="110" r="86" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1" />
    </svg>
  )
}

function Ball() {
  const [idx, setIdx] = useState(0)
  const [done, setDone] = useState(false)
  const handleError = () => {
    if (idx + 1 < BALL_CANDIDATES.length) setIdx(idx + 1)
    else setDone(true)
  }
  if (done) return <SoccerBallSVG />
  return (
    <img
      src={BALL_CANDIDATES[idx]}
      alt="Pelota Avalith"
      className="squad-ball-img"
      onError={handleError}
    />
  )
}

export default function Squad() {
  return (
    <section className="squad section" id="squad">
      <div className="squad__bg" aria-hidden="true">
        <div className="squad__circle squad__circle--1 bg-orb" />
        <div className="squad__circle squad__circle--2 bg-orb" />
        <div className="squad__circle squad__circle--3 bg-orb" />
      </div>

      <div className="container squad__inner">
        <header className="squad__header">
          <h2>¡Entrá a la cancha!</h2>
          <p className="squad__sub">¿Cómo se arma el squad?</p>
        </header>

        <div className="squad__cards">
          {roles.map((r, i) => (
            <article key={i} className={`squad-card ${r.raised ? 'is-raised' : ''}`}>
              <CardImage src={r.img} alt={r.role} className="squad-card__img" />
              <div className="squad-card__body">
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="squad__ball-wrap" aria-hidden="true">
          <Ball />
        </div>

        <div className="squad__paragraph">
          <p>
            Olvidate del aula tradicional. Acá la teoría se vuelve <strong>acción</strong>.
            Tenés <strong>5 mesas dinámicas para 30 players</strong> que no se quedan
            quietos. <strong>Vos jugás</strong>, los mentores te bancan y el líder calibra la jugada.
          </p>
          <p className="squad__paragraph-lead">
            ¡Es hora de salir a la cancha y demostrar qué sabés hacer!
          </p>
        </div>

        <div className="squad__cta-wrap">
          <a href="#cta" className="btn-player is-light">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
