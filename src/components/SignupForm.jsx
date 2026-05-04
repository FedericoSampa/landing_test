import { useState } from 'react'
import './SignupForm.css'

const steps = [
  { n: 1, label: 'Datos personales' },
  { n: 2, label: 'Perfil talent' },
  { n: 3, label: 'Formación y background' },
  { n: 4, label: 'Challenge' },
]

const initial = {
  nombre: '', fecha: '', email: '', telefono: '',
  perfil: '',
  secundario: '', especialidad: '', materia: '',
  nivel: '', rol: '', stack: '',
  challenge: '',
}

const isNonEmpty = (v) => typeof v === 'string' && v.trim().length > 0
const isName = (v) => isNonEmpty(v) && v.trim().length >= 3 && /\s/.test(v.trim())
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v.trim())
const isPhone = (v) => {
  const digits = (v || '').replace(/[^\d]/g, '')
  return digits.length >= 8 && digits.length <= 20
}
const isBirthDate = (v) => {
  if (!isNonEmpty(v)) return false
  let d
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) d = new Date(v)
  else if (/^\d{2}\/\d{2}\/\d{4}$/.test(v)) {
    const [dd, mm, yyyy] = v.split('/')
    d = new Date(`${yyyy}-${mm}-${dd}`)
  } else return false
  if (isNaN(d)) return false
  const min = new Date(); min.setFullYear(min.getFullYear() - 16)
  const max = new Date(); max.setFullYear(max.getFullYear() - 100)
  return d <= min && d >= max
}
const minLen = (v, n) => isNonEmpty(v) && v.trim().length >= n

function validateStep(step, data) {
  const e = {}
  if (step === 1) {
    if (!isName(data.nombre)) e.nombre = 'Ingresá nombre y apellido completos'
    if (!isBirthDate(data.fecha)) e.fecha = 'Fecha inválida (mayor de 16)'
    if (!isEmail(data.email)) e.email = 'Email inválido'
    if (!isPhone(data.telefono)) e.telefono = 'Teléfono inválido'
  }
  if (step === 2) {
    if (!data.perfil) e.perfil = 'Seleccioná una opción'
  }
  if (step === 3) {
    if (data.perfil === 'junior') {
      if (!isNonEmpty(data.secundario)) e.secundario = 'Campo requerido'
      if (!minLen(data.especialidad, 2)) e.especialidad = 'Campo requerido'
      if (!minLen(data.materia, 3)) e.materia = 'Contanos un poco más'
    } else if (data.perfil === 'professional') {
      if (!isNonEmpty(data.nivel)) e.nivel = 'Campo requerido'
      if (!minLen(data.rol, 2)) e.rol = 'Campo requerido'
      if (!minLen(data.stack, 2)) e.stack = 'Campo requerido'
    }
  }
  if (step === 4) {
    if (!minLen(data.challenge, 20)) e.challenge = 'Tu respuesta es muy corta (mín. 20 caracteres)'
  }
  return e
}

export default function SignupForm() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initial)
  const [touched, setTouched] = useState({})
  const [showErrors, setShowErrors] = useState(false)
  const [sent, setSent] = useState(false)

  const errors = validateStep(step, data)
  const isStepValid = Object.keys(errors).length === 0

  const update = (k) => (e) => {
    setData(d => ({ ...d, [k]: e.target.value }))
    setTouched(t => ({ ...t, [k]: true }))
  }
  const blur = (k) => () => setTouched(t => ({ ...t, [k]: true }))
  const setPerfil = (perfil) => {
    setData(d => ({ ...d, perfil }))
    setTouched(t => ({ ...t, perfil: true }))
  }

  const next = () => {
    if (!isStepValid) {
      setShowErrors(true)
      setTouched(t => ({ ...t, ...Object.fromEntries(Object.keys(errors).map(k => [k, true])) }))
      return
    }
    setShowErrors(false)
    if (step === steps.length) { setSent(true); return }
    setStep(s => Math.min(s + 1, steps.length))
  }
  const back = () => { setShowErrors(false); setStep(s => Math.max(s - 1, 1)) }

  const showErr = (k) => (touched[k] || showErrors) && errors[k]
  const isStepDone = (n) => n < step
  const isStepActive = (n) => n === step

  return (
    <section className="signup section" id="cta">
      <div className="signup__bg" aria-hidden="true">
        <div className="signup__circle signup__circle--1 bg-orb" />
        <div className="signup__circle signup__circle--2 bg-orb" />
        <div className="signup__circle signup__circle--3 bg-orb" />
      </div>

      <div className="container signup__inner">
        <header className="signup__header">
          <h2>¿Queres ser un <strong>Player</strong>?</h2>
        </header>

        <div className="signup__card">
          <div className="signup__stepper-band">
            <ol className="signup__stepper" role="list">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className={`signup-step ${isStepDone(s.n) ? 'is-done' : ''} ${isStepActive(s.n) ? 'is-active' : ''}`}
                >
                  <span className="signup-step__num">{s.n}</span>
                  <span className="signup-step__label">{s.label}</span>
                </li>
              ))}
            </ol>
          </div>

          <form className="signup__form" onSubmit={(e) => { e.preventDefault(); next() }} noValidate>
            {step === 1 && !sent && (
              <>
                <div className="signup__row">
                  <Field label="Nombre y Apellido" id="f-nombre" error={showErr('nombre')}>
                    <input id="f-nombre" type="text" placeholder="Tu nombre completo"
                      value={data.nombre} onChange={update('nombre')} onBlur={blur('nombre')}
                      aria-invalid={!!showErr('nombre')} />
                  </Field>
                  <Field label="Fecha de nacimiento" id="f-fecha" error={showErr('fecha')}>
                    <input id="f-fecha" type="date"
                      value={data.fecha} onChange={update('fecha')} onBlur={blur('fecha')}
                      aria-invalid={!!showErr('fecha')} />
                  </Field>
                </div>
                <div className="signup__row">
                  <Field label="Email" id="f-email" error={showErr('email')}>
                    <input id="f-email" type="email" placeholder="tu@email.com"
                      value={data.email} onChange={update('email')} onBlur={blur('email')}
                      aria-invalid={!!showErr('email')} />
                  </Field>
                  <Field label="Teléfono" id="f-tel" error={showErr('telefono')}>
                    <input id="f-tel" type="tel" placeholder="+54 9 11 1234-5678"
                      value={data.telefono} onChange={update('telefono')} onBlur={blur('telefono')}
                      aria-invalid={!!showErr('telefono')} />
                  </Field>
                </div>
              </>
            )}

            {step === 2 && !sent && (
              <div className="signup__profile">
                <p className="signup__question">
                  <span className="signup__question-mark" aria-hidden="true">¥</span>
                  ¿En qué etapa de tu PATH te encontrás hoy?
                </p>
                <label className={`signup-radio ${data.perfil === 'junior' ? 'is-checked' : ''}`}>
                  <input type="radio" name="perfil" value="junior"
                    checked={data.perfil === 'junior'} onChange={() => setPerfil('junior')} />
                  <span className="signup-radio__box" aria-hidden="true" />
                  <span className="signup-radio__text">
                    <strong>Junior Talent</strong>{' '}
                    <span>(Estoy terminando el colegio o recién graduado).</span>
                  </span>
                </label>
                <label className={`signup-radio ${data.perfil === 'professional' ? 'is-checked' : ''}`}>
                  <input type="radio" name="perfil" value="professional"
                    checked={data.perfil === 'professional'} onChange={() => setPerfil('professional')} />
                  <span className="signup-radio__box" aria-hidden="true" />
                  <span className="signup-radio__text">
                    <strong>Tech Professional</strong>{' '}
                    <span>(Ya trabajo en tecnología o tengo experiencia técnica).</span>
                  </span>
                </label>
                {showErr('perfil') && <p className="signup__error">{errors.perfil}</p>}
              </div>
            )}

            {step === 3 && !sent && data.perfil === 'junior' && (
              <>
                <p className="signup__sub-form-title">Formulario junior</p>
                <div className="signup__row">
                  <Field label="Secundario" id="f-sec" error={showErr('secundario')}>
                    <select id="f-sec" value={data.secundario}
                      onChange={update('secundario')} onBlur={blur('secundario')}
                      aria-invalid={!!showErr('secundario')}>
                      <option value="">Seleccione estado de secundario</option>
                      <option value="cursando">En curso</option>
                      <option value="finalizado">Finalizado</option>
                      <option value="adeudo">Adeudo materias</option>
                    </select>
                  </Field>
                  <Field label="Especialidad de tu título" id="f-esp" error={showErr('especialidad')}>
                    <input id="f-esp" type="text" placeholder="Ej: Bachiller en Informática"
                      value={data.especialidad} onChange={update('especialidad')} onBlur={blur('especialidad')}
                      aria-invalid={!!showErr('especialidad')} />
                  </Field>
                </div>
                <Field label="Tu materia preferida:" id="f-mat" full error={showErr('materia')}>
                  <textarea id="f-mat" rows={3} placeholder="Ingresa tu respuesta aquí"
                    value={data.materia} onChange={update('materia')} onBlur={blur('materia')}
                    aria-invalid={!!showErr('materia')} />
                </Field>
              </>
            )}

            {step === 3 && !sent && data.perfil === 'professional' && (
              <>
                <p className="signup__sub-form-title">Formulario professional</p>
                <Field label="Nivel de estudio" id="f-niv" full error={showErr('nivel')}>
                  <select id="f-niv" value={data.nivel}
                    onChange={update('nivel')} onBlur={blur('nivel')}
                    aria-invalid={!!showErr('nivel')}>
                    <option value="">Seleccione nivel de estudio</option>
                    <option value="secundario">Secundario completo</option>
                    <option value="terciario">Terciario</option>
                    <option value="universitario-curso">Universitario en curso</option>
                    <option value="universitario-completo">Universitario completo</option>
                    <option value="posgrado">Posgrado / Master</option>
                  </select>
                </Field>
                <Field label="Rol actual o último cargo:" id="f-rol" full error={showErr('rol')}>
                  <input id="f-rol" type="text" placeholder="Ingresa tu respuesta aquí"
                    value={data.rol} onChange={update('rol')} onBlur={blur('rol')}
                    aria-invalid={!!showErr('rol')} />
                </Field>
                <Field label="Stack o herramientas que manejas:" id="f-stack" full error={showErr('stack')}>
                  <textarea id="f-stack" rows={3} placeholder="Ingresa tu respuesta aquí"
                    value={data.stack} onChange={update('stack')} onBlur={blur('stack')}
                    aria-invalid={!!showErr('stack')} />
                </Field>
              </>
            )}

            {step === 4 && !sent && (
              <>
                <div className="signup__challenge-q">
                  <span className="signup__challenge-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                  </span>
                  <p>
                    Si estás seguro de que tu instrucción (Prompt) es perfecta, pero
                    la IA te sigue dando una respuesta incorrecta, ¿cómo lo resuelves?
                  </p>
                </div>
                <Field label="" id="f-ch" full hideLabel error={showErr('challenge')}>
                  <textarea id="f-ch" rows={4} placeholder="Ingresa tu respuesta aquí"
                    value={data.challenge} onChange={update('challenge')} onBlur={blur('challenge')}
                    aria-invalid={!!showErr('challenge')} />
                </Field>
              </>
            )}

            {sent && (
              <div className="signup__success">
                <div className="signup__success-icon" aria-hidden="true">✓</div>
                <h3>¡Gracias por postularte, {data.nombre.split(' ')[0]}!</h3>
                <p>
                  Confirmamos que recibimos tu postulación. Te enviamos un email a{' '}
                  <strong>{data.email}</strong> con los próximos pasos.
                </p>
              </div>
            )}

            {!sent && (
              <div className="signup__actions">
                <button type="button" className="signup-btn signup-btn--ghost"
                  onClick={back} disabled={step === 1}>
                  Atrás
                </button>
                <button type="submit" className="signup-btn signup-btn--primary"
                  disabled={!isStepValid}>
                  {step === steps.length ? 'Enviar' : 'Siguiente'}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({ label, id, children, full, hideLabel, error }) {
  return (
    <div className={`signup-field ${full ? 'signup-field--full' : ''} ${error ? 'has-error' : ''}`}>
      {!hideLabel && <label htmlFor={id}>{label}</label>}
      {children}
      {error && <small className="signup-field__error">{error}</small>}
    </div>
  )
}
