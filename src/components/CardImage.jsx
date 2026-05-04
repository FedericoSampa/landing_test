import { useState } from 'react'

/**
 * Imagen con fallback automático.
 * Si la imagen no existe en el formato dado, prueba .png, .jpg, .jpeg, .webp
 * antes de rendirse y dejar visible el gradiente del wrapper.
 *
 * Uso:
 *   <CardImage src="/images/squad/players.jpg" alt="..." className="squad-card__img" />
 */
const EXT_FALLBACKS = ['.png', '.jpg', '.jpeg', '.webp']

function buildCandidates(src) {
  // separar base y extensión actual
  const m = src.match(/^(.*)\.([a-zA-Z0-9]+)$/)
  if (!m) return [src]
  const base = m[1]
  const original = '.' + m[2].toLowerCase()
  // empezar con el src original, luego probar las otras extensiones
  const others = EXT_FALLBACKS.filter(e => e !== original).map(e => base + e)
  return [src, ...others]
}

export default function CardImage({ src, alt = '', className = '' }) {
  const [idx, setIdx] = useState(0)
  const [done, setDone] = useState(false)
  const candidates = buildCandidates(src)

  const handleError = () => {
    if (idx + 1 < candidates.length) {
      setIdx(idx + 1)
    } else {
      setDone(true)
    }
  }

  return (
    <div className={`card-image ${className}`}>
      {!done && (
        <img
          src={candidates[idx]}
          alt={alt}
          className="card-image__photo"
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  )
}
