import { useEffect } from 'react'
// Reusa estilos de PrivacyPage
import './PrivacyPage.css'

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      <section className="privacy-hero">
        <div className="privacy-hero__bg" aria-hidden="true">
          <div className="privacy-hero__circle privacy-hero__circle--1" />
          <div className="privacy-hero__circle privacy-hero__circle--2" />
        </div>
        <div className="container">
          <h1 className="privacy-hero__title">Términos de uso</h1>
        </div>
      </section>

      <article className="privacy section">
        <div className="container privacy__inner">
          <h2>Términos de Uso</h2>

          <p>
            Estos Términos de Uso (en adelante, <strong>"ToU"</strong>) rigen el
            uso que usted haga del sitio web de <strong>Avalith Academy</strong>{' '}
            y sus empresas afiliadas en todo el mundo (en adelante referidas como{' '}
            <strong>"Avalith Academy"</strong>, "nosotros", "nos" o "nuestro"),
            ubicado en (en adelante referido como el "Sitio"), y de los diversos
            sitios conectados a esta página{' '}
            <a href="https://www.avalith.academy" target="_blank" rel="noreferrer">
              https://www.avalith.academy
            </a>
          </p>

          <p>
            Este Sitio se pone a disposición con fines informativos, para la
            presentación de contactos por parte de nuestro equipo de desarrollo
            de negocios para convertirse en cliente o socio, o para ser
            considerado dentro de nuestros equipos como empleado de{' '}
            <strong>Avalith Academy</strong>.
          </p>

          <p>
            Al utilizar este Sitio, usted acepta los siguientes <strong>ToU</strong>.
            Si no desea o no está de acuerdo con que estos términos se le
            apliquen, debe dejar de utilizar nuestro Sitio de inmediato:
          </p>

          <h3>Reglas del Sitio</h3>
          <p>
            Si usted no interrumpe y continúa utilizando nuestro Sitio, acepta
            acceder al mismo únicamente de la manera prevista por{' '}
            <strong>Avalith Academy</strong>. No accederá ni intentará acceder
            a nuestro Sitio por ningún otro medio ni a través de ninguna otra
            interfaz, a menos que esté debidamente autorizado.
          </p>
          <p>
            Asimismo, acepta no participar en ninguna otra actividad que
            pudiera interferir con el uso, acceso o disponibilidad de nuestro
            Sitio incluyendo, entre otros, la copia, reproducción, duplicación,
            venta, comercialización o reventa de nuestro Sitio para cualquier
            fin no autorizado, o la realización de cualquier tipo de rastreo
            web (web crawling).
          </p>
          <p>
            A menos que se indique lo contrario, los contenidos de este sitio
            incluyendo, entre otros, el texto y las imágenes contenidos aquí y
            su disposición, son propiedad de <strong>Avalith Academy</strong>.
            Todas las marcas comerciales utilizadas o mencionadas en este sitio
            web son propiedad de sus respectivos dueños.
          </p>
          <p>
            Nada de lo contenido en este Sitio se interpretará como la
            concesión por implicación, impedimento (estoppel) o de otro modo,
            de cualquier licencia o derecho sobre cualquier derecho de autor,
            patente, marca comercial u otro interés de propiedad de{' '}
            <strong>Avalith Academy</strong> o de cualquier tercero.
          </p>
          <p>
            Este Sitio y el contenido proporcionado en él, incluyendo, entre
            otros, las páginas y las marcas comerciales de{' '}
            <strong>Avalith Academy</strong> imágenes gráficas, audio, video,
            código fuente, botones y texto, no podrán ser copiados,
            reproducidos, republicados, cargados, publicados, transmitidos o
            distribuidos de ninguna manera sin el consentimiento previo por
            escrito de <strong>Avalith Academy</strong>; con la excepción de
            que usted puede descargar, visualizar e imprimir una copia de los
            materiales en cualquier computadora exclusivamente para su uso
            personal y no comercial, siempre que no modifique el material de
            ninguna manera y mantenga intactos todos los avisos de derechos
            de autor, marcas comerciales y otros avisos de propiedad.
          </p>

          <h3>Contenidos</h3>
          <p>
            La información proporcionada en este Sitio es gratuita y solo con
            fines informativos, y no crea por sí misma una relación comercial
            o de servicios profesionales entre usted y{' '}
            <strong>Avalith Academy</strong>. Los enlaces en este sitio pueden
            conducir a servicios o sitios no operados por{' '}
            <strong>Avalith Academy</strong>.
          </p>
          <p>
            No se realiza ningún juicio ni se otorga garantía con respecto a
            dichos otros servicios o sitios, y <strong>Avalith Academy</strong>{' '}
            no asume responsabilidad alguna por ellos, ni cualquier evento o
            actividad asociada. Un enlace a otro sitio o servicio no constituye
            un respaldo al mismo. Cualquier uso que haga de la información
            proporcionada en este sitio, o cualquier sitio o servicio enlazado
            por este, es bajo su propio riesgo, y cualquier trato entre usted
            y cualquier tercero asociado con dichos sitios es exclusivamente
            entre usted y dicho tercero.
          </p>
          <p>
            Este Sitio y sus contenidos se proporcionan "tal cual" (as is) y{' '}
            <strong>Avalith Academy</strong> no realiza ninguna representación
            o garantía de ningún tipo con respecto a este sitio o cualquier
            sitio accesible a través de él. <strong>Avalith Academy</strong>{' '}
            renuncia expresamente a todas las garantías expresas e implícitas
            incluyendo, entre otras, las garantías implícitas de
            comerciabilidad, idoneidad para un propósito particular, título y
            no infracción.
          </p>
          <p>
            En ningún caso <strong>Avalith Academy</strong> ni sus proveedores
            de servicios externos serán responsables ante ninguna parte por
            daños directos, indirectos, incidentales, especiales, ejemplares,
            consecuentes u otros (incluyendo, entre otros, la pérdida de
            beneficios, interrupción del negocio, pérdida de programas o
            datos) sin importar la forma de la acción, ya sea por contrato,
            agravio, negligencia, responsabilidad estricta o de otro tipo, que
            surjan de o en conexión con este Sitio, cualquier contenido en él
            o accesible a través de este, o cualquier servicio de sitio
            enlazado, o cualquier copia, exhibición o uso del mismo.
          </p>

          <h3>Privacidad</h3>
          <p>
            Cualquier dato personal que sea recolectado o procesado por{' '}
            <strong>Avalith Academy</strong> se realizará de acuerdo con
            nuestra <a href="#/privacidad">Política de Privacidad</a>. No se
            recomienda el envío de ideas no autorizadas fuera de las relaciones
            comerciales confidenciales establecidas y documentadas a través de
            este sitio web, y no serán tratadas de manera confidencial. Por lo
            tanto, <strong>Avalith Academy</strong> podrá desarrollar, utilizar
            y divulgar libremente ideas similares sin necesidad de compensación,
            rendición de cuentas o crédito.
          </p>

          <h3>No constituye oferta</h3>
          <p>
            <strong>Avalith Academy</strong> no garantiza que usted recibirá
            empleo, ofertas de trabajo o llamadas de respuesta a través de
            nuestro Sitio; (b) no será responsable de ningún listado, envío o
            solicitud de información por su parte; y (c) no es su empleador ni
            su agente independiente en el uso que usted haga de nuestro Sitio.
          </p>
          <p>
            <strong>Avalith Academy</strong> se reserva el derecho, a su sola
            discreción y autoridad, de restringir, rescindir, suspender o
            limitar de otro modo estos ToU y cualquier acceso a parte o a la
            totalidad de nuestro Sitio en cualquier momento y por cualquier
            motivo.
          </p>
          <p>
            Asimismo, <strong>Avalith Academy</strong> se reserva el derecho de
            alterar, cambiar, actualizar, discontinuar o suspender el acceso a
            parte o a la totalidad de nuestro Sitio en cualquier momento y por
            cualquier motivo, con o sin previo aviso ni responsabilidad.
          </p>

          <h3>Indemnización</h3>
          <p>
            Usted acepta indemnizar, defender y mantener a{' '}
            <strong>Avalith Academy</strong>, sus afiliadas y subsidiarias,
            empleados, funcionarios, directores y agentes, libres de toda
            responsabilidad ante cualquier reclamo, responsabilidad, daño,
            sentencia, fallo, pérdida, costo, gasto y honorario (incluyendo
            honorarios de abogados) que surjan de su incumplimiento de estos
            ToU, relacionados con su acceso, conexión, actividades y
            compromiso con nuestro Sitio, o cualquier violación de nuestra
            Política de Privacidad y/o de las leyes aplicables.
          </p>
          <p>
            <strong>Avalith Academy</strong> se reserva el derecho de asumir
            la defensa y el control exclusivo de cualquier asunto sujeto a
            indemnización bajo esta sección y estos ToU. En tal caso, usted
            acepta cooperar con cualquier solicitud razonable para asistir en
            la defensa de <strong>Avalith Academy</strong> en dicho asunto.
          </p>

          <h3>Ley Aplicable y Jurisdicción</h3>
          <p>
            Estos ToU se rigen y se interpretarán de acuerdo con las leyes del
            Estado de Florida, Estados Unidos de América, sin tener en cuenta
            ningún principio de conflicto de leyes ni su ubicación. Al utilizar
            nuestro sitio, usted acepta la jurisdicción exclusiva de los
            tribunales federales y estatales ubicados en el condado de Broward,
            estado de Florida, EE. UU., y renuncia a cualquier objeción de
            jurisdicción, competencia o foro inconveniente ante dichos
            tribunales.
          </p>

          <h3>Seguridad</h3>
          <p>
            Usted es responsable de cumplir con las leyes de la jurisdicción
            desde la cual accede a este sitio y acepta que no accederá ni
            utilizará la información de este sitio en violación de dichas
            leyes. A menos que se establezca expresamente lo contrario en este
            documento, cualquier información enviada por usted a través de
            este sitio se considerará no confidencial y no sujeta a derechos
            de propiedad.
          </p>
          <p>
            Usted declara que tiene el derecho legal de enviar dicha información
            y acepta que no enviará ninguna información a menos que esté
            legalmente autorizado para hacerlo. Debido a la naturaleza abierta
            de Internet, recomendamos que no envíe información que considere
            confidencial.
          </p>
          <p>
            La información que se envía electrónicamente a través de Internet
            no puede garantizarse como completamente segura y, como tal,{' '}
            <strong>Avalith Academy</strong> no puede garantizar que terceros
            no autorizados nunca puedan acceder a cualquier datos electrónicos,
            incluidos sus datos, ni que nuestras medidas de seguridad no puedan
            ser vulneradas. Al utilizar nuestro Sitio, usted reconoce que
            cualquier dato personal que proporcione lo hace bajo su propio riesgo.
          </p>

          <p className="privacy__back">
            <a href="#/">← Volver al inicio</a>
          </p>
        </div>
      </article>
    </>
  )
}
