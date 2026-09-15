import "./Legal.css";

const P = ({ children }) => <span className="legal-placeholder">{children}</span>;

export default function Privacidad() {
  return (
    <section className="section legal-section">
      <div className="container legal-inner">
        <span className="eyebrow">Información legal</span>
        <h1>Política de Privacidad</h1>
        <p className="legal-updated">Última actualización: pendiente de completar</p>

        <h2>1. Responsable del tratamiento</h2>
        <p>
          El responsable del tratamiento de los datos personales recogidos a través de este
          sitio web es <P>[nombre y apellidos / razón social del titular]</P>, con NIF/CIF{" "}
          <P>[NIF/CIF]</P>, domicilio en <P>[dirección fiscal completa]</P> y correo de contacto{" "}
          <P>[correo electrónico de contacto]</P>.
        </p>

        <h2>2. Finalidad del tratamiento</h2>
        <p>
          Los datos que el usuario facilita a través de este sitio web (por ejemplo, al iniciar
          una conversación de WhatsApp mediante el formulario de contacto) se utilizan
          exclusivamente para gestionar la consulta, elaborar un presupuesto y mantener la
          comunicación comercial relacionada con el pedido o encargo solicitado. No se toman
          decisiones automatizadas ni se elaboran perfiles con estos datos.
        </p>

        <h2>3. Legitimación</h2>
        <p>
          La base legal para el tratamiento de los datos es el consentimiento del usuario,
          otorgado libremente al iniciar el contacto a través de WhatsApp u otros canales
          habilitados en el sitio web.
        </p>

        <h2>4. Destinatarios</h2>
        <p>
          Los datos no se ceden a terceros, salvo obligación legal. Cuando el usuario contacta a
          través de WhatsApp, el tratamiento de esa comunicación está además sujeto a la
          política de privacidad propia de WhatsApp/Meta.
        </p>

        <h2>5. Conservación de los datos</h2>
        <p>
          Los datos se conservarán durante el tiempo necesario para atender la consulta o
          encargo solicitado, y posteriormente durante los plazos legalmente exigibles.
        </p>

        <h2>6. Derechos de las personas interesadas</h2>
        <p>
          Cualquier usuario tiene derecho a obtener confirmación sobre si en Globos Rosas se
          están tratando datos personales que le conciernan, y a ejercer sus derechos de acceso,
          rectificación, supresión, oposición, limitación del tratamiento y portabilidad de los
          datos (derechos ARCO+) escribiendo a <P>[correo electrónico de contacto]</P>. Asimismo,
          el usuario tiene derecho a presentar una reclamación ante la Agencia Española de
          Protección de Datos (AEPD) si considera que el tratamiento no se ajusta a la normativa
          vigente.
        </p>

        <h2>7. Normativa aplicable</h2>
        <p>
          Esta política se rige por el Reglamento (UE) 2016/679, General de Protección de Datos
          (RGPD), y por la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
          Personales y garantía de los derechos digitales (LOPDGDD).
        </p>

        <div className="legal-pending-note">
          Este texto es una plantilla estándar de privacidad a falta de los datos fiscales
          definitivos de Globos Rosas. En cuanto se faciliten, se completarán los campos
          marcados.
        </div>
      </div>
    </section>
  );
}
