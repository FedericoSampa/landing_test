import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    q: '¿Qué es Avalith Academy?',
    a: (
      <>
        Es tu puerta de entrada al ecosistema tech. No es una escuela, es un{' '}
        <strong>Hub de Aceleración</strong> donde te sumergís en la cultura de
        una software factory real para que tu carrera despegue desde el primer día.
      </>
    ),
  },
  {
    q: '¿Qué es el PATH?',
    a: (
      <>
        Es el mapa hacia tu próximo <strong>Seniority</strong>. Es un
        entrenamiento de alto rendimiento diseñado para que dejes de ser un
        alumno y te conviertas en un <strong>Player</strong>: un talento capaz
        de ejecutar soluciones de IA a nivel global.
      </>
    ),
  },
  {
    q: '¿Voy a salir con un proyecto real?',
    a: (
      <>
        Exacto. Vas a desarrollar un <strong>MVP Real</strong> (Minimum Viable
        Product). No es un trabajo práctico; es un producto funcional que vas a
        desplegar en el mercado. Es la pieza clave de tu portfolio que demuestra
        que sabés resolver problemas de la industria.
      </>
    ),
  },
  {
    q: '¿Quién me va a guiar?',
    a: (
      <>
        Contamos con <strong>Mentores</strong>, no solo profesores. Son guías
        expertos y líderes activos en la industria IT que te acompañan durante
        toda la formación, desafiando tu lógica y criterio profesional.
      </>
    ),
  },
  {
    q: '¿Qué es "AA: Action & IA"?',
    a: (
      <>
        <p>
          Es nuestro manifiesto de ejecución. <strong>AA</strong> es la potencia
          de <strong>Avalith Academy</strong> impulsada por nuestra metodología{' '}
          <strong>Action & IA</strong>.
        </p>
        <p>
          Aquí el conocimiento no se queda en la teoría: se activa. Cada concepto
          que dominás se aplica al instante en proyectos reales de la industria.
          Venís a tomar el control, a buildear soluciones y a resolver desafíos
          de mercado desde el primer minuto.{' '}
          <strong>En este PATH, tu talento se transforma en impacto real.</strong>
        </p>
      </>
    ),
  },
  {
    q: '¿Cómo es la modalidad de entrenamiento?',
    a: (
      <>
        <p>
          Olvidate de las clases tradicionales. Aplicamos el{' '}
          <strong>Método Avalith: Hands-On</strong>, donde la teoría se aprende
          ejecutando.
        </p>
        <p>
          No sos un alumno, sos un Player integrado en{' '}
          <strong>Células de Trabajo</strong> de alto rendimiento. Vas a
          prototipar, fallar y buildear soluciones de IA reales en un entorno
          que simula exactamente cómo operamos en la industria.{' '}
          <strong>¡Menos presentaciones, más acción!</strong>
        </p>
      </>
    ),
  },
  {
    q: '¿Recibo una certificación al finalizar?',
    a: (
      <>
        <p>
          Desde luego. Al completar el desafío, recibís un{' '}
          <strong>Certificado de Finalización avalado por los líderes
          expertos de Avalith</strong>. Es un sello que garantiza ante cualquier
          empresa que fuiste entrenado bajo los estándares de ejecución más
          altos de la industria.
        </p>
        <p>
          Pero vamos un paso más allá: tu verdadera certificación es el{' '}
          <strong>MVP Real</strong> que vas a dejar funcionando. En el mundo de
          la IA, lo que te hace imparable es combinar el respaldo de nuestra
          firma con un portfolio de soluciones reales. Te vas con el título,
          pero sobre todo, con el <strong>Seniority</strong> para liderar
          proyectos desde el primer día.
        </p>
      </>
    ),
  },
  {
    q: '¿Cuál es la modalidad y ubicación?',
    a: (
      <>
        <p>
          El programa es <strong>100% presencial</strong>, fomentando el
          aprendizaje colaborativo en nuestra sede:
        </p>
        <p><strong>Mar del Plata: Formosa 2531 (Avalith Academy).</strong></p>
      </>
    ),
  },
  {
    q: '¿Cuándo empezamos y qué horarios hay?',
    a: (
      <>
        <p>
          Arrancamos el próximo mes y cerramos el año en diciembre 2026. Para
          adaptarnos a tu ritmo, contamos con dos turnos:
        </p>
        <ul className="faq-item__bullets">
          <li><strong>Turno Tarde:</strong> 13:30 h a 17:30 h.</li>
          <li><strong>Turno Noche:</strong> 18:00 h a 22:00 h.</li>
        </ul>
        <p>Una vez que asegures tu lugar, te enviaremos el cronograma completo.</p>
      </>
    ),
  },
  {
    q: '¿Precios y Becas?',
    a: (
      <>
        Tenemos beneficios exclusivos por apertura y cupos{' '}
        <strong>limitados. Asegurá tu beca comple</strong>tando el formulario de
        inscripción y reservá tu lugar en la preventa.{' '}
        <a href="#cta" className="faq-item__link">¡Quiero ser un Player!</a>
      </>
    ),
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="faq section" id="faq">
      <div className="container faq__inner">
        <header className="faq__header">
          <h2>¡Sacate las dudas!</h2>
          <p>¡Lo que tenes que saber para acelerar tu ingreso!</p>
        </header>

        <ul className="faq__list">
          {faqs.map((f, i) => (
            <li key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
              <button
                className="faq-item__q"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{f.q}</span>
                <span className="faq-item__chev" aria-hidden="true">▾</span>
              </button>
              <div className="faq-item__a">
                <div className="faq-item__a-inner">{f.a}</div>
              </div>
            </li>
          ))}
        </ul>

        <div className="faq__cta-wrap">
          <a href="#cta" className="btn-player is-blue">¡Quiero ser un player!</a>
        </div>
      </div>
    </section>
  )
}
