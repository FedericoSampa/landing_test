import { useState, useEffect } from 'react'
import './Navbar.css'

const menuColumns = [
  [
    { href: '#top', label: 'Inicio' },
    { href: '#ava-ia', label: 'Ava IA' },
    { href: '#que-es-player', label: 'Ser un Player' },
    { href: '#squad', label: 'Entra en la cancha' },
    { href: '#metodo', label: 'El método' },
  ],
  [
    { href: '#evolucion', label: 'Evolución de player' },
    { href: '#path', label: 'Tu Path' },
    { href: '#liderazgo', label: 'Liderazgo' },
    { href: '#stacks', label: 'Stack' },
    { href: '#cta', label: '¿Queres ser un player?' },
  ],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" aria-label="Avalith Academy">
          <span className="navbar__logo">
            avalith<span className="navbar__dot">.</span>
          </span>
          <span className="navbar__sub">Academ</span>
        </a>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mega-menu"
          onClick={() => setOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div
          className="navbar__backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="mega-menu"
        className={`mega-menu ${open ? 'is-open' : ''}`}
        aria-label="Principal"
        aria-hidden={!open}
      >
        <div className="container mega-menu__inner">
          <div className="mega-menu__panel">
            {menuColumns.map((col, ci) => (
              <ul key={ci} className="mega-menu__col">
                {col.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
