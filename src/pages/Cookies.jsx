import "./Legal.css";

export default function Cookies() {
  return (
    <section className="section legal-section">
      <div className="container legal-inner">
        <span className="eyebrow">Información legal</span>
        <h1>Política de Cookies</h1>
        <p className="legal-updated">Última actualización: septiembre de 2026</p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Una cookie es un pequeño archivo que se almacena en el navegador del usuario al
          visitar un sitio web. Las cookies permiten, entre otras cosas, recordar preferencias o
          recopilar información estadística sobre la navegación.
        </p>

        <h2>2. Cookies utilizadas en este sitio web</h2>
        <p>
          Este sitio web utiliza únicamente cookies técnicas necesarias para su funcionamiento
          básico, además de una cookie propia que recuerda que ya has aceptado el aviso de
          cookies que aparece en tu primera visita, para no volver a mostrártelo. Actualmente no
          se utilizan cookies de analítica, publicidad ni de terceros con fines de seguimiento.
          Si en el futuro se incorporan herramientas de analítica (por ejemplo, para medir
          visitas) o de publicidad, esta política se actualizará y se solicitará tu
          consentimiento antes de instalarlas.
        </p>

        <h2>3. Cookies de terceros</h2>
        <p>
          Al hacer clic en los enlaces de contacto de WhatsApp, Instagram o Facebook, el usuario
          abandona este sitio web y accede a servicios de terceros que tienen sus propias
          políticas de cookies y privacidad, ajenas a Globos Rosas.
        </p>

        <h2>4. Cómo gestionar o desactivar las cookies</h2>
        <p>
          El usuario puede permitir, bloquear o eliminar las cookies instaladas en su equipo
          mediante la configuración de las opciones del navegador que utilice. A continuación se
          incluyen enlaces a la configuración de cookies de los navegadores más habituales:
          Google Chrome, Mozilla Firefox, Safari y Microsoft Edge (consultar la sección de ayuda
          de cada navegador).
        </p>

        <h2>5. Aviso de cookies</h2>
        <p>
          Al visitar la web por primera vez verás un aviso en la parte inferior de la pantalla
          informando del uso de cookies, con un enlace a esta página. Al continuar navegando o
          pulsar "Aceptar" confirmas que has leído esta información.
        </p>

        <div className="legal-pending-note">
          Esta política se revisará y ampliará si en el futuro se incorporan cookies de
          analítica o marketing al sitio web.
        </div>
      </div>
    </section>
  );
}
