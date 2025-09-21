import { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";
import { FaSquareFacebook, FaLinkedin, FaSquareInstagram   } from "react-icons/fa6";
import "./NavBar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  const pages = [
    { to: "/", label: "Sobre mí"},
    { to: "/", label: "Servicios" },
    { to: "/", label: "Equipo"},
    { to: "/", label: "Contacto"},
    { to: "/", label: "FAQ"},
  ];

  const socials = [
    { href: "/", icon: <FaSquareInstagram/> },
    { href: "/",  icon: <FaSquareFacebook/> },
    { href: "/",  icon: <FaLinkedin/> },
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
                <span className="label">{p.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Derecha: socials (iconos en móvil */}
      <ul className="nav-right">
        {socials.map((s) => (
          <li className="nav-right__item">
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="nav-link"
            >
              {s.icon}

            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
