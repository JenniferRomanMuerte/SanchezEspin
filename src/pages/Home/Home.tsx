// Home.tsx
import { useEffect, useState } from "react";
import "./Home.css";
import SplitImage from "../../components/SplitImage/SplitImage";

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

  // ✅ espera a que terminen TÍTULOS + IMAGEN y habilita el slider
  useEffect(() => {
    const dur = cssMs("--fx-dur", 2000);
    const d1  = cssMs("--fx-delay-title", 0);
    const d2  = cssMs("--fx-delay-sub",   0);
    const imgDur = 1500; // transición de las mitades (SplitImage.css)
    const EXTRA = 1500; // margen extra para que no se active justo al terminar

    const total = Math.max(imgDur, dur + Math.max(d1, d2)) + 120 + EXTRA; // margen

    const t = setTimeout(() => setCanInteract(true), total);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className={`home ${canInteract ? "ready" : "locked"}`}>
      <div className="home__bg" aria-hidden="true">
        <video className="home__video" autoPlay loop muted playsInline preload="auto">
          <source src="/assets/VideoCode.mp4" type="video/mp4" />
          Tu navegador no soporta el vídeo.
        </video>
      </div>

      <section className="home__content">
        <h1 className={`home__title from-left ${inView ? "is-in" : ""}`} aria-label="Jennifer Román">
          <span className="home__measure" aria-hidden>Jennifer Román</span>
          <span className="home__layer home__layer--mono" aria-hidden>Jennifer Román</span>
          <span className="home__layer home__layer--rainbow" aria-hidden>Jennifer Román</span>
        </h1>

        {/* ⬇️ bloqueado hasta que canInteract sea true */}
        <SplitImage disabled={!canInteract} />

        <h2 className={`home__subtitle from-right ${inView ? "is-in" : ""}`} aria-label="Fullstack Developer">
          <span className="home__measure" aria-hidden>Fullstack Developer</span>
          <span className="home__layer home__layer--mono" aria-hidden>Fullstack Developer</span>
          <span className="home__layer home__layer--rainbow" aria-hidden>Fullstack Developer</span>
        </h2>
      </section>
    </main>
  );
}
