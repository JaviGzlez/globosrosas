import procesoImg from "../assets/brand/proceso-artesanal.jpg";
import pilarImg from "../assets/brand/pilar.jpg";
import WhatsAppCTA from "../components/WhatsAppCTA";
import "./SobrePilar.css";

const TRAITS = [
  {
    title: "Años de experiencia real",
    text: "Mucho antes de que existiera Globos Rosas, ya ayudaba a preparar celebraciones de familia y amigos.",
  },
  {
    title: "Trato cercano y personal",
    text: "Cada pedido pasa por mis manos de principio a fin — no hay un equipo detrás, hay una persona.",
  },
  {
    title: "Hecho con cariño",
    text: "Cuido cada detalle como si fuera para los míos, porque sé lo que significa un día así.",
  },
];

export default function SobrePilar() {
  return (
    <>
      <section className="section pilar-hero">
        <div className="container pilar-hero-inner">
          <div className="pilar-photo">
            <img src={pilarImg} alt="Pilar, fundadora de Globos Rosas" />
          </div>
          <div>
            <span className="eyebrow">Sobre Pilar</span>
            <h1>Soy Pilar, la persona detrás de Globos Rosas</h1>
            <p className="hero-text">
              Desde hace muchos años me dedico, de forma cercana y personal, a ayudar a
              familiares y amigos a preparar todo tipo de celebraciones: bodas, bautizos,
              comuniones y encuentros especiales. Siempre de manera privada, cuidando cada
              detalle como si fuera para mi propia familia.
            </p>
            <p className="hero-text">
              Con el tiempo decidí dar el paso: convertir esa dedicación en un proyecto propio,
              Globos Rosas, para poder ayudar a más personas a cubrir esas necesidades que
              surgen alrededor de un evento importante — el detalle que faltaba, el regalo
              perfecto para los invitados, ese toque personal que hace que todo se recuerde con
              cariño.
            </p>
          </div>
        </div>
      </section>

      <section className="section pilar-process">
        <div className="container pilar-process-inner">
          <div>
            <span className="eyebrow">Cómo trabajo</span>
            <h2>Sigo trabajando igual que siempre lo he hecho</h2>
            <p className="hero-text" style={{ marginBottom: 28 }}>
              Escuchando cada idea, cuidando cada material y acompañando a cada familia desde el
              primer mensaje hasta el día de la celebración.
            </p>
            <div className="traits-list">
              {TRAITS.map((t) => (
                <div className="trait-item" key={t.title}>
                  <span className="value-dot" />
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pilar-process-media">
            <img src={procesoImg} alt="Pilar preparando a mano un detalle personalizado" />
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>¿Hablamos de tu próxima celebración?</h2>
          <p className="hero-text">Cuéntame qué estáis preparando y te ayudo a darle forma.</p>
          <WhatsAppCTA label="Escríbeme por WhatsApp" />
        </div>
      </section>
    </>
  );
}
