import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const LINKS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/bodas", label: "Bodas" },
  { to: "/bautizos", label: "Bautizos" },
  { to: "/comuniones", label: "Comuniones" },
  { to: "/eventos", label: "Eventos" },
  { to: "/galeria", label: "Galería" },
  { to: "/sobre-nosotras", label: "Sobre Nosotras" },
  { to: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <NavLink to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">🎀</span>
          <span className="logo-text">
            Globos Rosas
            <small>Regalos y Más</small>
          </span>
        </NavLink>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
