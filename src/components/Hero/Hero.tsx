import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Tu tranquilidad legal en buenas manos</h1>
        <p>
          Te ayudaré a resolver tus dudas jurídicas y te brindaré la asistencia
          legal que solo los abogados expertos pueden ofrecerte.
        </p>
        <a href="/contacto" className="btn">Contáctame</a>
      </div>
    </section>
  );
}
