import { Link } from "react-router-dom";
import { INSTAGRAM_URL, FACEBOOK_URL } from "../data/site";
import logo from "../assets/brand/logo-full.png";
import { IconInstagram, IconFacebook } from "./SocialIcons";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img src={logo} alt="Globos Rosas — Imagina y Vuela" className="footer-logo-img" />
          <p>
            Regalos y detalles personalizados para bodas, bautizos, comuniones y eventos, hechos
            con cariño y cuidado en cada paso. Enviamos a toda España.
          </p>
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
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/sobre-pilar">Sobre Pilar</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4>Síguenos</h4>
          <div className="social-row">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconInstagram /> Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <IconFacebook /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Globos Rosas — Regalos y Más. Todos los derechos reservados.</span>
          <div className="footer-legal-links">
            <Link to="/aviso-legal">Aviso legal</Link>
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
