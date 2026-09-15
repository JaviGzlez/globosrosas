import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_DISPLAY } from "../data/site";
import WhatsAppCTA from "../components/WhatsAppCTA";
import { IconInstagram, IconFacebook } from "../components/SocialIcons";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="section contact-section">
      <div className="container contact-inner">
        <span className="eyebrow">Contacto</span>
        <h1>Hablemos de tu celebración</h1>
        <p className="hero-text contact-text">
          La forma más rápida de contactar con nosotras es WhatsApp. Cuéntanos la ocasión, la
          fecha aproximada y tu idea, y te respondemos con opciones y plazos sin compromiso.
        </p>

        <WhatsAppCTA label="Escribir por WhatsApp" />

        <a className="contact-phone" href={`tel:+${"34" + WHATSAPP_DISPLAY.replace(/\s/g, "")}`}>
          {WHATSAPP_DISPLAY}
        </a>

        <div className="contact-social-links">
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <IconInstagram />
          </a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            <IconFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}
