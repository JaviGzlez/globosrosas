import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center" }}>
      <div className="container">
        <span className="eyebrow">Error 404</span>
        <h1 style={{ margin: "10px 0 18px" }}>No hemos encontrado esta página</h1>
        <p style={{ marginBottom: 24 }}>Puede que el enlace esté mal escrito o haya cambiado.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
