import { useEffect } from 'react'
import './PrivacyPage.css'

export default function PrivacyPage() {
  // Scroll al tope al entrar
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
          <h1 className="privacy-hero__title">Política de Privacidad</h1>
        </div>
      </section>

      <article className="privacy section">
        <div className="container privacy__inner">
          <h2>Política de Privacidad</h2>
          <p className="privacy__date">Última actualización: 2026</p>

          <p>
            Esta Política de Privacidad describe cómo <strong>Avalith Academy</strong>{' '}
            (en adelante referida como <strong>"Avalith Academy"</strong>, "nosotros"
            o "nuestro") utiliza la información de identificación personal de
            nuestros usuarios y clientes recolectada en nuestro sitio web{' '}
            <a href="https://www.avalith.academy" target="_blank" rel="noreferrer">
              https://www.avalith.academy
            </a>{' '}
            (en adelante referido como el "Sitio") y los diversos sitios
            conectados a esta página.
          </p>

          <p>
            Este Sitio se pone a disposición con fines informativos, para la
            presentación de contactos por parte de nuestro equipo de desarrollo
            de negocios para convertirse en cliente o socio, o para ser
            considerado dentro de nuestros equipos como empleado de{' '}
            <strong>Avalith Academy</strong>. Salvo lo expresamente descrito
            en esta Política de Privacidad, no compartiremos, venderemos ni
            alquilaremos información de identificación personal con nadie
            fuera de <strong>Avalith Academy</strong> (lo que incluye a
            nuestras empresas afiliadas, empleados, contratistas y agentes),
            sin su permiso previo o a menos que así lo ordene un tribunal de
            justicia.
          </p>

          <p>
            Al utilizar este Sitio, usted acepta la siguiente Política de
            Privacidad. Si no desea o no está de acuerdo con que estos
            términos se le apliquen, debe dejar de utilizar nuestro Sitio
            de inmediato:
          </p>

          <h3>Recolección y Uso de la Información</h3>
          <p>
            Recolectamos diferentes tipos de información para diversos fines,
            incluyendo, entre otros, proporcionar y mejorar nuestro Sitio y
            servicios.
          </p>

          <h3>Tipos de Datos Recolectados</h3>
          <p>
            Recolectamos diferentes tipos de información para diversos fines,
            incluyendo, entre otros, proporcionar y mejorar nuestro Sitio y
            servicios.
          </p>

          <h4>Datos Personales</h4>
          <p>
            Los Datos Personales son información sobre una persona física que
            puede ser identificada a partir de esos datos (o a partir de esos
            y otra información que esté en nuestra posesión o que sea probable
            que llegue a nuestra posesión).
          </p>
          <p>
            Es posible que se le solicite proporcionarnos cierta información
            de identificación personal que pueda ser utilizada para
            contactarlo o identificarlo ("Datos Personales") en los formularios
            web del Sitio.
          </p>
          <p>Esta información puede incluir, entre otros:</p>
          <ul>
            <li>Dirección de correo electrónico</li>
            <li>Nombre</li>
            <li>Cargo / Puesto laboral</li>
            <li>Empresa</li>
            <li>País</li>
            <li>Número de teléfono</li>
          </ul>
          <p>
            <strong>Avalith Academy</strong> podrá utilizar sus Datos Personales
            para contactarlo mediante correos electrónicos, boletines informativos
            (newsletters), acciones de marketing y otra información que pueda ser
            de su interés. Usted puede optar por no recibir ninguna, o todas,
            estas comunicaciones de nuestra parte utilizando el enlace de
            "cancelar suscripción" (unsubscribe) o las instrucciones
            proporcionadas en cualquier correo electrónico que enviemos.
          </p>

          <h4>Datos de Uso</h4>
          <p>
            Los Datos de Uso son información que se recopila automáticamente,
            ya sea generada por el uso del Sitio o por su interacción con las
            comunicaciones de marketing (por ejemplo, al abrir o hacer clic en
            un correo electrónico).
          </p>
          <p>
            También podemos recopilar información sobre cómo se accede y se
            utiliza el Sitio ("Datos de Uso"). Estos Datos de Uso pueden
            incluir información como la dirección del Protocolo de Internet
            de su computadora (p. ej., dirección IP), el tipo de navegador,
            las páginas que visita, la hora y fecha de su visita, el tiempo
            permanecido en esas páginas, identificadores únicos de dispositivos
            y otros datos de diagnóstico.
          </p>

          <h4>Datos de Cookies y Seguimiento (Política de Cookies)</h4>
          <p>
            Las cookies son pequeños fragmentos de datos almacenados en su
            dispositivo (computadora o dispositivo móvil) que pueden incluir
            un identificador único anónimo.
          </p>
          <p>
            Utilizamos cookies y tecnologías similares para rastrear la
            actividad en el Sitio y mantener cierta información. Las cookies
            se envían a su navegador desde un sitio web y se almacenan en su
            dispositivo. También se utilizan tecnologías de seguimiento como
            etiquetas (tags), balizas (beacons) y scripts para recopilar,
            rastrear y analizar información con el fin de mejorar nuestro
            Sitio y/o servicios.
          </p>
          <p>
            Usted puede configurar su navegador para rechazar todas las
            cookies o para que le avise cuando se envía una. Sin embargo, si
            no acepta las cookies, es posible que no pueda utilizar algunas
            partes de nuestro Sitio.
          </p>

          <h4>Ejemplos de Cookies que utilizamos:</h4>
          <ul>
            <li><strong>Cookies de Sesión:</strong> Se utilizan para operar nuestro Sitio.</li>
            <li><strong>Cookies de Preferencia:</strong> Se utilizan para recordar sus preferencias y diversas configuraciones.</li>
            <li><strong>Cookies de Seguridad:</strong> Se utilizan con fines de seguridad.</li>
          </ul>

          <h4>Cómo utilizamos las cookies</h4>
          <p>
            Cuando usted utiliza y accede al Sitio, es posible que instalamos
            una serie de archivos de cookies en su navegador web.
          </p>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Habilitar ciertas funciones del Sitio.</li>
            <li>Proporcionar análisis estadísticos (analytics).</li>
          </ul>
          <p>
            En el Sitio utilizamos tanto cookies de sesión como persistentes,
            y empleamos diferentes tipos de cookies para su funcionamiento:
          </p>
          <ul>
            <li><strong>Cookies esenciales:</strong> Podemos utilizar cookies para recordar información que cambia la forma en que se comporta el Sitio.</li>
            <li><strong>Cookies de análisis:</strong> Podemos utilizar cookies de análisis para rastrear información sobre cómo se utiliza el Sitio, de modo que podamos realizar mejoras. También podemos utilizarlas para probar nuevos anuncios, páginas, características o nuevas funcionalidades del Sitio y observar la reacción de nuestros usuarios.</li>
          </ul>

          <h4>Cookies de terceros</h4>
          <p>
            Además de nuestras propias cookies, también podemos utilizar varias
            cookies de terceros para informar estadísticas de uso del Servicio,
            ofrecer publicidad en y a través del Servicio, etc.
          </p>

          <h4>¿Cuáles son sus opciones con respecto a las cookies?</h4>
          <p>
            Si desea eliminar las cookies o dar instrucciones a su navegador
            web para que las elimine o las rechace, visite las páginas de
            ayuda de su navegador.
          </p>
          <p>
            Tenga en cuenta, sin embargo, que si elimina las cookies o se
            niega a aceptarlas, es posible que no pueda utilizar todas las
            funciones que ofrecemos, no pueda almacenar sus preferencias y
            que algunas de nuestras páginas no se visualicen correctamente.
          </p>
          <ul>
            <li>
              Navegador Chrome: visite esta página de Google:{' '}
              <a href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noreferrer">
                https://support.google.com/accounts/answer/32050
              </a>
            </li>
            <li>
              Navegador Internet Explorer: visite esta página:{' '}
              <a href="http://support.microsoft.com/kb/278835" target="_blank" rel="noreferrer">
                http://support.microsoft.com/kb/278835
              </a>
            </li>
            <li>
              Navegador Firefox: visite esta página de Mozilla:{' '}
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer">
                https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias
              </a>
            </li>
            <li>
              Navegador Safari: visite esta página de Apple:{' '}
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
                https://support.apple.com/es-es/guide/safari/sfri11471/mac
              </a>
            </li>
          </ul>
          <p>
            Para otros navegadores web, visite las páginas de instrucciones
            oficiales de su propio navegador.
          </p>

          <h3>Uso de los Datos</h3>
          <p>Utilizamos los datos recopilados para diversos fines:</p>
          <ul>
            <li>Para proporcionar y mantener el Sitio.</li>
            <li>Para notificarle sobre cambios en nuestro Sitio o servicios.</li>
            <li>Para permitirle participar en funciones interactivas del Sitio cuando usted así lo decida.</li>
            <li>Para recopilar información que nos permita mejorar el Sitio.</li>
            <li>Para monitorear el uso del Sitio.</li>
            <li>Para detectar y prevenir problemas técnicos.</li>
            <li>Para proporcionar noticias, ofertas especiales e información similar a la que ya ha mostrado interés, adquirido o consultado, a menos que haya optado por no recibir dicha información.</li>
          </ul>

          <h3>Responsable del Tratamiento de Datos (Data Controller)</h3>
          <p>
            El Responsable del Tratamiento es la persona que determina los
            fines y la manera en que se procesa cualquier información personal.
          </p>
          <ul>
            <li>Nosotros somos el <strong>Responsable del Tratamiento de sus Datos Personales</strong>, tal como se especifica en esta Política de Privacidad.</li>
            <li>Puede enviarnos un correo electrónico con respecto a sus datos a <a href="mailto:academy@avalith.net">academy@avalith.net</a></li>
          </ul>

          <h3>Procesamiento de Datos Personales bajo el Reglamento General de Protección de Datos (GDPR)</h3>
          <p>
            Si usted reside en el Espacio Económico Europeo (EEE), nuestra
            base legal para recopilar y utilizar la información personal
            descrita en esta Política de Privacidad depende de los Datos
            Personales que recopilemos y del contexto específico en el que
            los recopilemos.
          </p>
          <p>Podemos procesar sus <strong>Datos Personales</strong> porque:</p>
          <ul>
            <li>Necesitamos cumplir un contrato con usted.</li>
            <li>Usted nos ha dado su permiso para hacerlo.</li>
            <li>El procesamiento responde a nuestros intereses legítimos y no vulnera sus derechos.</li>
            <li>Para cumplir con la ley.</li>
          </ul>

          <h3>Retención de Datos</h3>
          <p>
            Conservaremos sus Datos Personales únicamente durante el tiempo
            que sea necesario para los fines establecidos en esta Política
            de Privacidad.
          </p>
          <p>
            Conservaremos y utilizaremos sus Datos Personales en la medida
            necesaria para cumplir con nuestras obligaciones legales (por
            ejemplo, si se nos requiere conservar sus datos para cumplir con
            las leyes aplicables), resolver disputas y hacer cumplir nuestros
            acuerdos y políticas legales.
          </p>
          <p>
            También conservaremos los Datos de Uso para fines de análisis
            interno. Los Datos de Uso suelen conservarse durante un período
            de tiempo más corto, excepto cuando estos datos se utilizan para
            mejorar la seguridad o cuando estamos legalmente obligados a
            conservarlos por un período de tiempo determinado.
          </p>

          <h3>Transferencia de Datos</h3>
          <p>
            Su información, incluidos los Datos Personales, puede ser
            transferida y mantenida en computadoras ubicadas fuera de su
            estado, provincia, país u otra jurisdicción gubernamental donde
            las leyes de protección de datos pueden diferir de las de su
            jurisdicción.
          </p>
          <p>
            Si se encuentra fuera de los Estados Unidos y decide
            proporcionarnos información, tenga en cuenta que transferimos los
            datos, incluidos los Datos Personales, a los Estados Unidos y los
            procesamos allí. Su consentimiento a esta Política de Privacidad,
            seguido del envío de dicha información, representa su acuerdo con
            dicha transferencia.
          </p>
          <p>
            Realizaremos todos los esfuerzos razonables para garantizar que
            sus datos se mantengan de forma segura. Sus Datos Personales no
            serán transferidos a una organización o país a menos que existan
            controles de seguridad adecuados.
          </p>

          <h3>Divulgación de Datos</h3>
          <h4>Requisitos Legales</h4>
          <p>
            Podemos divulgar sus Datos Personales bajo la creencia de buena
            fe de que tal acción es necesaria para:
          </p>
          <ul>
            <li>Cumplir con una obligación legal.</li>
            <li>Defender nuestros derechos o propiedad.</li>
            <li>Prevenir o investigar posibles irregularidades o responsabilidades legales.</li>
            <li>Proteger la seguridad de los usuarios o del público.</li>
          </ul>

          <h3>Seguridad de los Datos</h3>
          <p>
            La seguridad de sus datos es muy importante para nosotros, pero
            ningún método de transmisión por Internet o método de
            almacenamiento electrónico es 100% seguro. Utilizamos medios
            comercialmente aceptables para proteger sus Datos Personales,
            pero no podemos garantizar su seguridad absoluta.
          </p>

          <h3>Sus Derechos</h3>
          <p>
            Usted puede tener ciertos derechos relacionados con sus datos
            personales bajo las leyes locales de protección de datos.
          </p>

          <h4>Espacio Económico Europeo (EEE)</h4>
          <p>
            <strong>Sus derechos de protección de datos bajo el Reglamento
            General de Protección de Datos (GDPR):</strong> Si reside en el
            EEE, tiene ciertos derechos. Nuestro objetivo es tomar medidas
            razonables para permitirle corregir, enmendar, eliminar o limitar
            el uso de sus Datos Personales. Si desea ser informado sobre qué
            Datos Personales tenemos de usted y si desea que se eliminen de
            nuestros sistemas, contáctenos en{' '}
            <a href="mailto:academy@avalith.net">academy@avalith.net</a>
          </p>
          <p>En determinadas circunstancias, tiene los siguientes derechos:</p>
          <ul>
            <li><strong>Acceso:</strong> Puede acceder, actualizar o solicitar la eliminación de sus datos directamente en su cuenta o formularios. Si no puede hacerlo, contáctenos para asistirlo.</li>
            <li><strong>Portabilidad:</strong> Derecho a recibir una copia de su información en un formato de uso común.</li>
            <li><strong>Rectificación:</strong> Derecho a corregir información inexacta o incompleta.</li>
            <li><strong>Oposición:</strong> Derecho a oponerse al procesamiento de sus Datos Personales.</li>
            <li><strong>Restricción:</strong> Derecho a solicitar que limitemos el procesamiento de su información.</li>
            <li><strong>Retirar el consentimiento:</strong> Derecho a retirar su consentimiento en cualquier momento.</li>
          </ul>

          <h4>California, EE. UU.</h4>
          <p>Si reside en California, tiene derechos específicos:</p>
          <ul>
            <li><strong>Acceso y Eliminación:</strong> Puede solicitar el acceso o la eliminación de sus datos. No estamos obligados a eliminar datos si su procesamiento es necesario para cumplir obligaciones legales o defensas jurídicas.</li>
            <li><strong>No Discriminación:</strong> No discriminamos a nadie por ejercer sus derechos; no le negaremos el acceso al Sitio ni le cobraremos tarifas diferentes por hacerlo.</li>
          </ul>

          <h3>Proveedores de Servicios</h3>
          <p>
            Contratamos a terceras empresas e individuos ("Proveedores de
            Servicios") para facilitar nuestro Sitio, prestar servicios en
            nuestro nombre o ayudarnos a analizar cómo se utiliza el Sitio.
            Estos terceros tienen acceso a sus Datos Personales solo para
            realizar tareas específicas y están obligados a no divulgarlos
            ni utilizarlos para ningún otro fin.
          </p>
          <ul>
            <li><strong>Google Analytics:</strong> Servicio de análisis web de Google que rastrea el tráfico del sitio. Google puede usar los datos para personalizar los anuncios de su propia red. Puede inhabilitar esta opción instalando el "Complemento de inhabilitación para navegadores de Google Analytics".</li>
            <li>
              <strong>Manatal:</strong> Software de reclutamiento basado en la
              nube. Los CV enviados por los solicitantes serán procesados por
              Manatal para nuestras búsquedas de talento. Para más información,
              visite su política de privacidad:{' '}
              <a href="https://www.manatal.com/privacy-policy" target="_blank" rel="noreferrer">
                https://www.manatal.com/privacy-policy
              </a>
            </li>
          </ul>

          <h3>Enlaces a otros sitios</h3>
          <p>
            Nuestro Sitio puede contener enlaces a otros sitios que no son
            operados por nosotros. No asumimos ninguna responsabilidad por
            las políticas de privacidad o el contenido de sitios web de
            terceros. Es su responsabilidad revisar la Política de Privacidad
            de cada sitio que visite.
          </p>

          <h3>Privacidad de menores</h3>
          <p>
            No nos dirigimos a ninguna persona menor de 18 años ("Niños").
            No recopilamos conscientemente información de identificación
            personal de menores de 18 años. Por favor, contáctenos si cree
            que un menor nos ha proporcionado Datos Personales. Tomaremos
            las medidas necesarias para eliminar dicha información de
            nuestros servidores.
          </p>

          <h3>Cambios en esta Política de Privacidad</h3>
          <p>
            Es posible que actualicemos nuestra Política de Privacidad
            periódicamente. Se le recomienda revisar esta política con
            regularidad para estar al tanto de cualquier cambio. Los cambios
            en esta Política de Privacidad entran en vigor en el momento en
            que se publican en esta página.
          </p>

          <h3>Contacto</h3>
          <p>
            Si tiene alguna pregunta sobre esta Política de Privacidad, puede
            contactarnos:
          </p>
          <ul>
            <li>Por correo electrónico: <a href="mailto:academy@avalith.net">academy@avalith.net</a></li>
            <li>A través del formulario(s) de contacto en el Sitio.</li>
          </ul>

          <p className="privacy__back">
            <a href="#/">← Volver al inicio</a>
          </p>
        </div>
      </article>
    </>
  )
}
