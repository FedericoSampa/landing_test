import { useState } from 'react'
import './Partners.css'

// Partners. Si el SVG/PNG existe en /images/partners/<file>, se renderiza el logo.
// Si no, queda el nombre como texto (fallback automático).
const partners = [
  { name: 'Mercado Libre', file: 'mercadolibre.svg' },
  { name: 'Ualá',         file: 'uala.svg' },
  { name: 'MODO',         file: 'modo.svg' },
  { name: 'HITSS',        file: 'hitss.svg' },
  { name: 'YPF',          file: 'ypf.svg' },
  { name: 'Cook Unity',   file: 'cookunity.svg' },
  { name: 'GlobalLogic',  file: 'globallogic.svg' },
  { name: 'Jampp',        file: 'jampp.svg' },
  { name: 'Intive',       file: 'intive.svg' },
  { name: 'Ministerio',   file: 'ministerio.svg' },
]

function Logo({ name, file }) {
  const [ok, setOk] = useState(true)
  if (!ok) {
    return <span className="partners__logo-text">{name}</span>
  }
  return (
    <img
      src={`/images/partners/${file}`}
      alt={name}
      className="partners__logo-img"
      onError={() => setOk(false)}
      loading="lazy"
    />
  )
}

export default function Partners() {
  // Duplicamos la lista para loop infinito sin cortes
  const loop = [...partners, ...partners]

  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="partners__title">Partners en Avalith</h2>
      </div>

      <div className="partners__viewport" aria-label="Empresas partner">
        <div className="partners__track">
          {loop.map((p, i) => (
            <span key={i} className="partners__logo" aria-hidden={i >= partners.length}>
              <Logo name={p.name} file={p.file} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
