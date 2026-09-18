import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

const STORAGE_KEY = "gr_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      // Si el navegador bloquea localStorage, mostramos el aviso igualmente.
      setVisible(true);
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      // Nada que hacer si el almacenamiento no está disponible.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Usamos cookies propias necesarias para el funcionamiento de la web. Puedes leer más en
        nuestra <Link to="/cookies">Política de Cookies</Link>.
      </p>
      <button className="btn btn-primary cookie-accept" onClick={accept}>
        Aceptar
      </button>
    </div>
  );
}
