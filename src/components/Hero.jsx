import { useState } from 'react'
import './Hero.css'

const HERO_IMG_CANDIDATES = [
  '/images/hero/students.png',
  '/images/hero/students.jpg',
  '/images/hero/students.jpeg',
  '/images/hero/students.webp',
]

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [done, setDone] = useState(false)

  const handleError = () => {
    if (idx + 1 < HERO_IMG_CANDIDATES.length) setIdx(idx + 1)
    else setDone(true)
  }

  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__circle hero__circle--1 bg-orb" />
        <div className="hero__circle hero__circle--2 bg-orb" />
        <div className="hero__circle hero__circle--3 bg-orb" />
        <div className="hero__circle hero__circle--4 bg-orb" />
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Avalith Academy<br />
            ¿Querés ser un <span className="hero__title-italic">Player?</span>
          </h1>

          <p className="hero__text">
            Olvidate del aula. Entrá a la cancha de la IA. Un entrenamiento intensivo
            para convertirte en un experto utilizando inteligencia artificial,
            a través de una dinámica donde vos sos el protagonista.
          </p>

          <a href="#cta" className="btn-player is-light hero__cta">
            ¡Quiero ser un player!
          </a>
        </div>

        <div className="hero__media">
          <div className="hero__img-wrap">
            <div className="hero__img">
              {!done && (
                <img
                  src={HERO_IMG_CANDIDATES[idx]}
                  alt="Estudiantes de Avalith Academy"
                  className="hero__img-photo"
                  onError={handleError}
                />
              )}
              <div className="hero__img-overlay" />
            </div>
            <span className="hero__tag">
              <span className="hero__tag-icon" aria-hidden="true">⚡</span>
              AA IA & Action
            </span>
          </div>
        </div>
      </div>

      <div className="hero__band" aria-hidden="true" />
    </section>
  )
}
