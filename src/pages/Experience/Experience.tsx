import "./Experience.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

export default function Experience() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  return (
    <main className="experience-container">
      {/* Capas de fondo */}
      <div className="experience-bg" />
      <div className="experience-overlay-pattern" />

      <div className="experience-content">

        {/* EXPERIENCIA */}
        <div className="section-wrapper exp-section">
          <h1 className="experience-title">Experiencia</h1>
          <section className="experience-box">

            {/* HORUS */}
            <div className="experience-item clickable" onClick={() => setOpenModal("horus")}>
              <FaBriefcase className="experience-icon" />
              <div>
                <strong>Horus Financial – Desarrolladora Web Full Stack</strong>
                <br />
                Plataforma web de gestión de inventario y depósitos
              </div>
              <span className="experience-date">Mar 2025 – Sep 2025</span>
            </div>
            <Modal
              isOpen={openModal === "horus"}
              onClose={() => setOpenModal(null)}
              title="Horus Financial – Desarrolladora Web Full Stack"
              subtitle="Marzo 2025 – Septiembre 2025"
              content={[
                "- Desarrollo de plataforma web de gestión de inventario y depósitos, con monitorización en tiempo real.",
                "- Implementación de alertas automáticas y reportes exportables.",
                "- Creación de un dashboard analítico con métricas clave y gráficos interactivos.",
                "- Diseño y desarrollo de la web corporativa con área privada y gestión documental.",
              ]}
            />

            {/* VT-LAB */}
            <div className="experience-item clickable" onClick={() => setOpenModal("vtlab")}>
              <FaBriefcase className="experience-icon" />
              <div>
                <strong>VT-LAB – Desarrolladora Web (Prácticas FP – Proyecto I+D)</strong>
                <br />
                Soluciones web con React, Python y Knowledge Graphs
              </div>
              <span className="experience-date">2023 – 2024</span>
            </div>
            <Modal
              isOpen={openModal === "vtlab"}
              onClose={() => setOpenModal(null)}
              title="VT-LAB – Desarrolladora Web (Prácticas FP – Proyecto I+D)"
              subtitle="2023 – 2024"
              content={[
                "- Desarrollo de interfaces web con HTML, CSS, Bootstrap y JavaScript.",
                "- Creación de componentes reutilizables para mejorar eficiencia.",
                "- Soluciones web con React (frontend) y Python (backend).",
                "- Integración de modelos BIM con datos externos.",
                "- Gestión de bases de datos grafo (Neo4j) para Knowledge Graphs.",
                "- Validaciones de datos con JSON Schema para calidad e interoperabilidad.",
                "- Automatización de procesos con Celery, optimizando tareas asíncronas.",
              ]}
            />

            {/* FREELANCE */}
            <div className="experience-item clickable" onClick={() => setOpenModal("freelance")}>
              <FaBriefcase className="experience-icon" />
              <div>
                <strong>Proyectos Freelance – Desarrolladora Web</strong>
                <br />
                Aplicaciones multiplataforma y páginas corporativas
              </div>
              <span className="experience-date">2024 – 2025</span>
            </div>
            <Modal
              isOpen={openModal === "freelance"}
              onClose={() => setOpenModal(null)}
              title="Proyectos Freelance – Desarrolladora Web"
              subtitle="2024 – 2025"
              content={[
                "- Web responsive con SEO y optimización de conversión.",
                "- Página corporativa con portfolio multimedia y blog autogestionable.",
                "- Aplicación multiplataforma para facturación, control de clientes y reportes de ventas.",
                "- Sistema de registro y seguimiento de miembros con base de datos segura y exportación de informes.",
              ]}
            />
          </section>
        </div>

        {/* FORMACIÓN */}
        <div className="section-wrapper form-section">
          <h1 className="experience-title">Formación</h1>
          <section className="experience-box">
            <div className="experience-item">
              <FaGraduationCap className="experience-icon" />
              <div className="experience-text">
                <strong>FP Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>
                <br />
                IFP
                <p>
                  Programación en HTML, CSS, Java, SQL, SpringBoot, Android Studio, Bootstrap, UML. <br />
                  Desarrollo multiplataforma y gestión de bases de datos. <br />
                  Diseño de interfaces y experiencia de usuario. <br />
                  Proyecto final: Web de recetas con Angular y SpringBoot.
                </p>
              </div>
              <span className="experience-date">2021 – 2023</span>
            </div>

            <div className="experience-item">
              <FaGraduationCap className="experience-icon" />
              <div className="experience-text">
                <strong>Bootcamp de Programación Web – Adalab</strong>
                <br />
                Desarrollo web con HTML, CSS, JavaScript, React, Node.js, PostgreSQL. <br />
                Aplicación de Scrum y metodologías ágiles. <br />
                Uso de Git y GitHub para trabajo colaborativo.

              </div>
              <span className="experience-date">Actualidad</span>
            </div>
          </section>
        </div>

        {/* CURSOS */}
        <div className="section-wrapper cursos-section">
          <h2 className="experience-subtitle">🧠 Cursos Complementarios</h2>
          <section className="experience-grid">
            <div className="experience-card">
              <FaGraduationCap className="experience-icon" />
              <div>SEO: Posicionar una Web en Google – Udemy</div>
              <span className="experience-date">2024</span>
            </div>
            <div className="experience-card">
              <FaGraduationCap className="experience-icon" />
              <div>Git y GitHub – Udemy</div>
              <span className="experience-date">2024</span>
            </div>
            <div className="experience-card">
              <FaGraduationCap className="experience-icon" />
              <div>JavaScript Básico – OpenBootcamp</div>
              <span className="experience-date">2023</span>
            </div>
            <div className="experience-card">
              <FaGraduationCap className="experience-icon" />
              <div>Universidad CSS y HTML – Udemy</div>
              <span className="experience-date">2022</span>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}
