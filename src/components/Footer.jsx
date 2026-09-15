import { Link } from "react-router-dom";
import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_DISPLAY, buildWhatsAppLink } from "../data/site";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">🎀 Globos Rosas</div>
          <p>
            Regalos y detalles personalizados para bodas, bautizos, comuniones y eventos, hechos
            con cariño y cuidado en cada paso.
          </p>
          <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div>
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/bodas">Bodas</Link></li>
            <li><Link to="/bautizos">Bautizos</Link></li>
            <li><Link to="/comuniones">Comuniones</Link></li>
            <li><Link to="/eventos">Eventos</Link></li>
          </ul>
        </div>

        <div>
          <h4>Globos Rosas</h4>
          <ul>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/sobre-nosotras">Sobre nosotras</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4>Síguenos</h4>
          <div className="social-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © {year} Globos Rosas — Regalos y Más. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
