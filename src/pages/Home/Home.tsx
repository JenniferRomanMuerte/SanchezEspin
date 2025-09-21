// Home.tsx
import { useEffect, useState } from "react";
import "./Home.css";
import SplitImage from "../../components/SplitImage/SplitImage";
import LegalBackdrop from "../../components/LegalBackdrop/LegalBackdrop";
import { GiInjustice } from "react-icons/gi";

const areas = [
  "Derecho Civil",
  "Derecho Penal",
  "Derecho Fiscal",
  "Derecho Laboral",
  "Derecho Mercantil",
  "Urbanismo",
  "Extranjería",
];

function cssMs(varName: string, fallbackMs: number) {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  const m = raw.match(/^([\d.]+)(ms|s)$/);
  if (!m) return fallbackMs;
  const v = parseFloat(m[1]);
  return m[2] === "s" ? v * 1000 : v;
}

export default function Home() {
  const [inView, setInView] = useState(false);
  const [canInteract, setCanInteract] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setInView(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const dur = cssMs("--fx-dur", 2000);
    const d1 = cssMs("--fx-delay-title", 0);
    const d2 = cssMs("--fx-delay-sub", 0);
    const imgDur = 1500;
    const EXTRA = 1500;
    const total = Math.max(imgDur, dur + Math.max(d1, d2)) + 120 + EXTRA;
    const t = setTimeout(() => setCanInteract(true), total);

    return () => clearTimeout(t);
  }, []);

  return (
    <main className={`home ${canInteract ? "ready" : "locked"}`}>
      {/* Fondo de frases legales */}
      <LegalBackdrop />

      <section className="home__content">
        {/* HERO */}
        <div className={`hero__content from-left ${inView ? "is-in" : ""}`}>
          <h1>Tu tranquilidad legal en buenas manos</h1>
          <p>
            Te ayudaré a resolver tus dudas jurídicas y te brindaré la
            asistencia legal que solo los abogados expertos pueden ofrecerte.
          </p>
          <a href="/contacto" className="btn">
            Contáctame
          </a>
        </div>

        <SplitImage disabled={!canInteract} />

        {/* Áreas de práctica */}
        <ul
          className={`home__areas from-right ${inView ? "is-in" : ""}`}
          aria-label="Áreas de práctica"
          role="list"
        >
          {areas.map((area) => (
            <li key={area}>
              <GiInjustice className="area-icon" aria-hidden />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
