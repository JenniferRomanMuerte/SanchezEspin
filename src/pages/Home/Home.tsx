// Home.tsx
import { useEffect, useState } from "react";
import "./Home.css";
import SplitImage from "../../components/SplitImage/SplitImage";
import LegalBackdrop from "../../components/LegalBackdrop/LegalBackdrop";

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
        <h1
          className={`home__title from-left ${inView ? "is-in" : ""}`}
          aria-label="J. Mª. Dolores Sanchez Espin"
        >
          <span className="home__measure" aria-hidden>
            J. Mª. Dolores Sanchez Espin
          </span>
          <span className="home__layer home__layer--brown" aria-hidden>
            J. Mª. Dolores Sanchez Espin
          </span>
          <span className="home__layer home__layer--blue" aria-hidden>
            J. Mª. Dolores Sanchez Espin
          </span>
        </h1>

        <SplitImage disabled={!canInteract} />

        <h2
          className={`home__subtitle from-right ${inView ? "is-in" : ""}`}
          aria-label="Letrada"
        >
          <span className="home__measure" aria-hidden>
            Letrada
          </span>
          <span className="home__layer home__layer--brown" aria-hidden>
            Letrada
          </span>
          <span className="home__layer home__layer--blue" aria-hidden>
            Letrada
          </span>
        </h2>
      </section>
    </main>
  );
}
