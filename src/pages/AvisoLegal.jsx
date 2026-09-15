import { WHATSAPP_DISPLAY } from "../data/site";
import "./Legal.css";

const P = ({ children }) => <span className="legal-placeholder">{children}</span>;

export default function AvisoLegal() {
  return (
    <section className="section legal-section">
      <div className="container legal-inner">
        <span className="eyebrow">Información legal</span>
        <h1>Aviso Legal</h1>
        <p className="legal-updated">Última actualización: pendiente de completar</p>

        <h2>1. Datos identificativos del titular</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los
          siguientes datos: el titular de este sitio web (en adelante, "Globos Rosas") es{" "}
          <P>[nombre y apellidos / razón social del titular]</P>, con NIF/CIF{" "}
          <P>[NIF/CIF]</P>, domicilio en <P>[dirección fiscal completa]</P> y correo de contacto{" "}
          <P>[correo electrónico de contacto]</P>. Para consultas rápidas puede contactarse por
          WhatsApp en el {WHATSAPP_DISPLAY}.
        </p>

        <h2>2. Objeto</h2>
        <p>
          Este sitio web tiene como finalidad dar a conocer los productos y servicios de Globos
          Rosas — regalos y detalles personalizados para bodas, bautizos, comuniones y otros
          eventos — así como facilitar el contacto con la empresa a través de WhatsApp. El sitio
          no permite actualmente la contratación ni el pago online de productos.
        </p>

        <h2>3. Condiciones de uso</h2>
        <p>
          El acceso y uso de este sitio web atribuye la condición de usuario e implica la
          aceptación plena de las condiciones incluidas en este Aviso Legal. El usuario se
          compromete a hacer un uso adecuado y lícito del sitio web, de conformidad con la
          legislación aplicable, la buena fe y el orden público.
        </p>

        <h2>4. Propiedad intelectual e industrial</h2>
        <p>
          Los contenidos de este sitio web (textos, imágenes, logotipos, diseños y demás
          elementos) son titularidad de Globos Rosas o de terceros que han autorizado su uso, y
          están protegidos por la normativa de propiedad intelectual e industrial. Queda
          prohibida su reproducción, distribución o comunicación pública total o parcial sin
          autorización expresa del titular.
        </p>

        <h2>5. Exclusión de responsabilidad</h2>
        <p>
          Globos Rosas no se hace responsable de los daños y perjuicios que pudieran derivarse de
          interferencias, interrupciones, virus informáticos, averías telefónicas o
          desconexiones en el funcionamiento operativo del sitio web, ni de aquellos derivados de
          un uso inadecuado del mismo por parte del usuario.
        </p>

        <h2>6. Legislación aplicable</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Para cualquier
          controversia derivada del uso de este sitio web, las partes se someterán a los
          juzgados y tribunales que correspondan conforme a derecho.
        </p>

        <div className="legal-pending-note">
          Este texto es una plantilla legal estándar a falta de los datos fiscales definitivos
          de Globos Rosas (NIF, domicilio y correo de contacto). En cuanto se faciliten estos
          datos, se sustituirán los campos marcados y esta página quedará completa.
        </div>
      </div>
    </section>
  );
}
