import { useState } from 'react'
import './SiteFooter.css'

export default function SiteFooter() {
  const [email, setEmail] = useState('')
  const handleSubmit = (e) => { e.preventDefault(); setEmail('') }
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__bg" aria-hidden="true">
        <div className="footer__circle footer__circle--1 bg-orb" />
        <div className="footer__circle footer__circle--2 bg-orb" />
      </div>

      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <a href="#top" className="footer__logo" aria-label="Avalith Academy">
            <span className="footer__logo-name">
              avalith<span className="footer__logo-dot">.</span>
            </span>
            <span className="footer__logo-sub">Academy</span>
          </a>
          <p className="footer__tagline">Academia de tecnología de Avalith en Mar del Plata.</p>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <ul className="footer__contact">
            <li>
              <span className="footer__icon" aria-hidden="true">📍</span>
              Formosa 2531, Mar del Plata
            </li>
            <li>
              <span className="footer__icon" aria-hidden="true">✉</span>
              <a href="mailto:academy@avalith.net">academy@avalith.net</a>
            </li>
            <li>
              <span className="footer__icon" aria-hidden="true">☏</span>
              <a href="tel:+542236665687">+54 223 6665687</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Enlaces</h4>
          <ul className="footer__links">
            <li><a href="https://avalith.net" target="_blank" rel="noreferrer">Avalith</a></li>
            <li><a href="#/terminos">Términos de uso</a></li>
            <li><a href="#/privacidad">Políticas de privacidad</a></li>
          </ul>
        </div>

        <div className="footer__col footer__col--news">
          <h4>Newsletter</h4>
          <p>Mantente al día con nuestras novedades</p>
          <form className="footer__news" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email para newsletter"
              required
            />
            <button type="submit" aria-label="Suscribirse">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <small>© {year} Avalith Academy. Todos los derechos reservados.</small>
      </div>
    </footer>
  )
}
