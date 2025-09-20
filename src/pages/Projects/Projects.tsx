import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Gestor de facturación",
      description:
        "Aplicación de escritorio para gestión de citas, facturas y pagos sincronizada con Google Calendar.",
      imageUrl: "/assets/project-facturacion.png",
      techs: ["React", "Electron", "SQLite"],
      link: "https://youtu.be/c86ZsJ4Ew2A",
    },
    {
      title: "Asociación de fumadores",
      description:
        "Gestión de socios, generación de contratos, inventario y transacciones usando llaveros NFC y sistema web local.",
      imageUrl: "/assets/project-asociacion.png",
      techs: ["React", "NestJS", "PostgreSQL"],
      private:true,
    },
    {
      title: "Página web de psicología",
      description:
        "Diseño e implementación de una página profesional para consulta de psicología forense. Optimizada para SEO con herramientas como Google Search Console.",
      imageUrl: "/assets/project-psicologia.png",
      techs: ["Wix", "SEO", "Google Search Console"],
      link: "https://www.psicologiadesireeporcel.org/",
    },
    {
      title: "Galería 3D interactiva",
      description:
        "Aplicación web con globo terráqueo 3D y escenas interactivas para mostrar fotos y vídeos de viajes. Desarrollada con integración 3D y contenido dinámico.",
      imageUrl: "/assets/project-galeria.png",
      techs: ["Angular", "Three.js"],
      link: "https://youtu.be/TO2bkzx6ZXc",
    },
    {
      title: "Proyecto final de FP",
      description:
        "Aplicación web completa de comunidad de recetas, visualizando éstas mediante filtros de ingredientes o categorías. Registro de clientes para poder subir y valorar recetas.",
      imageUrl: "/assets/project-helpcook.png",
      techs: ["Java", "Springboot", "SQL", "Angular"],
      link: "https://github.com/JenniferRomanMuerte/helpcook",
    },
  ];

  // nº de tarjetas visibles: 1 en móvil, 2 en ≥768px
  const getVisible = () => (window.innerWidth < 768 ? 1 : 2);

  const [visible, setVisible] = useState(getVisible());
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const steps = projects.length - (visible - 1);
  const next = () => setCurrent((p) => (p + 1) % steps);
  const prev = () => setCurrent((p) => (p - 1 + steps) % steps);

  const slideWidthPct = 100 / visible; // 100% móvil | 50% desktop
  const translatePct = current * slideWidthPct; // desplazamiento del track

  return (
    <main className="projects">
      {/* Barra superior: flecha – título – flecha */}
      <div className="projects-bar">
        <button
          className="carousel-btn left"
          onClick={prev}
          aria-label="Anterior"
        >
          <img src="/assets/arrow.png" alt="" />
        </button>

        <h1 className="projects-title">Mis Proyectos</h1>

        <button
          className="carousel-btn right"
          onClick={next}
          aria-label="Siguiente"
        >
          <img src="/assets/arrow.png" alt="" />
        </button>
      </div>

      {/* Carrusel */}
      <div className="carousel">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${translatePct}%)` }}
        >
          {projects.map((project, i) => (
            <div
              className="carousel-slide"
              key={i}
              style={{ flex: `0 0 ${slideWidthPct}%` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
