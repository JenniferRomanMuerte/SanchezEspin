import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaIdCard,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";
import emailIcon from "/assets/email.webp";
import githubIcon from "/assets/github.webp";
import linkedinIcon from "/assets/linkedin.webp";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const pages = [
    { to: "/about", label: "Sobre mí", icon: <FaIdCard className="icon" /> },
    { to: "/projects", label: "Proyectos", icon: <FaProjectDiagram className="icon" /> },
    { to: "/experience", label: "Formación y experiencia", icon: <FaUser className="icon" /> },
  ];

  const socials = [
    { href: "mailto:jenniferromanmuerte@gmail.com", label: "Email",    src: emailIcon },
    { href: "https://github.com/JenniferRomanMuerte", label: "GitHub",  src: githubIcon },
    { href: "https://www.linkedin.com/in/jenniferromanmuerte", label: "LinkedIn", src: linkedinIcon },
  ];

  return (
    <nav className="navbar">
      {/* Izquierda: hamburguesa (móvil) + páginas */}
      <div className="nav-left">
        <button
          className="nav-burger"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <FaBars />
        </button>

        <ul className={`nav-pages ${isOpen ? "open" : ""}`}>
          {pages.map((p) => (
            <li key={p.to} className="nav-pages__item">
              <Link to={p.to} className="nav-link" onClick={closeMenu}>
                {p.icon}
                <span className="label">{p.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Derecha: socials (iconos en móvil; icono+texto ≥768px) */}
      <ul className="nav-right">
        {socials.map((s) => (
          <li key={s.label} className="nav-right__item">
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="nav-link"
            >
              <img src={s.src} alt={s.label} className="social-icon" />
              <span className="label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
