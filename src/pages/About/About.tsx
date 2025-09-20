import { useEffect, useRef, useState } from "react";
import "./About.css";

export default function About() {
  const [typedText, setTypedText] = useState("");
  const [showPolaroid, setShowPolaroid] = useState(false);

  // para animar la polaroid cuando la imagen ya está decodificada
  const [polaroidReady, setPolaroidReady] = useState(false);

  const paperRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullText = `Soy desarrolladora web full stack, con experiencia en proyectos reales que combinan front-end moderno y back-end robusto.

He trabajado con React, Angular, Node.js, Three.js, Electron, creando aplicaciones web y de escritorio.

Tras una trayectoria en atención al cliente y el ámbito social, he canalizado mi capacidad resolutiva y mi pasión por la tecnología hacia el desarrollo de soluciones intuitivas, eficientes y bien estructuradas.

Me motiva el aprendizaje continuo y disfruto enfrentando retos.`;

  // efecto "máquina de escribir" (menos reflows: añade 2 chars por tick)
  useEffect(() => {
    if (!showPolaroid) {
      let i = 0;
      const STEP = 2;
      setTypedText("");
      const id = setInterval(() => {
        i += STEP;
        setTypedText(fullText.slice(0, i));
        // auto-scroll con menos frecuencia
        if (paperRef.current && i % 4 === 0) {
          paperRef.current.scrollTop = paperRef.current.scrollHeight;
        }
        if (i >= fullText.length) clearInterval(id);
      }, 45);
      return () => clearInterval(id);
    }
  }, [showPolaroid]);

  // guardar altura del header para calcular alto útil
  useEffect(() => {
    const header = document.querySelector(".about-header");
    if (header) {
      const h = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--about-header-h", `${h}px`);
    }
  }, []);

  // escalar wrapper dinámicamente (solo máquina)
  useEffect(() => {
    function resize() {
      if (!wrapperRef.current || !containerRef.current) return;
      const containerH = containerRef.current.clientHeight;
      const wrapperW = wrapperRef.current.offsetWidth;
      const naturalH = wrapperW * (900 / 1100);
      const scale = Math.min(1, containerH / naturalH);
      wrapperRef.current.style.transform = `scale(${scale})`;
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="about">
      {/* Header móvil */}
      <div className="about-header mobile-only">
        <h1 className="about-title">Sobre mí</h1>
        {!showPolaroid ? (
          <img
            src="/assets/camera.png"
            alt="Ver Polaroid"
            className="action-btn"
            onClick={() => setShowPolaroid(true)}
          />
        ) : (
          <img
            src="/assets/arrow.png"
            alt="Volver"
            className="action-btn"
            onClick={() => setShowPolaroid(false)}
          />
        )}
      </div>

      {/* Layout */}
      <div className="about-layout">
        <div className="about-left desktop-only">
          <h1 className="about-title">Sobre mí</h1>
          <div className="polaroid-block">
            <img
              src="/assets/polaroid_Jennifer.png"
              alt="Polaroid de Jennifer Román"
              draggable={false}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onLoad={() => setPolaroidReady(true)}
              className={polaroidReady ? "ready" : ""}
            />
          </div>
        </div>

        <div className="about-right" ref={containerRef}>
          {/* Desktop: siempre máquina */}
          <div className="typewriter-wrapper desktop-only" ref={wrapperRef}>
            <img
              className="typewriter-up"
              src="/assets/printwriter/typewriter_up-1100.webp"
              alt="Parte superior máquina"
              loading="eager"
              fetchPriority="high"
            />
            <div className="paper" ref={paperRef}>
              <p>{typedText}</p>
            </div>
            <img
              className="typewriter-down"
              src="/assets/printwriter/typewriter_down-1100.webp"
              alt="Parte inferior máquina"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Mobile: alterna entre máquina y polaroid */}
          {!showPolaroid ? (
            <div className="typewriter-wrapper mobile-only" ref={wrapperRef}>
              <img
                className="typewriter-up"
                src="/assets/printwriter/typewriter_up-1100.webp"
                alt="Parte superior máquina"
              />
              <div className="paper" ref={paperRef}>
                <p>{typedText}</p>
              </div>
              <img
                className="typewriter-down"
                src="/assets/printwriter/typewriter_down-1100.webp"
                alt="Parte inferior máquina"
              />
            </div>
          ) : (
            <div className="polaroid-stack mobile-only">
              <div className="polaroid-main flip-in">
                <img
                  src="/assets/polaroid_Jennifer.png"
                  alt="Jennifer Román"
                  draggable={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
