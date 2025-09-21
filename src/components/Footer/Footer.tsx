import "./Footer.css";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Izquierda: logo + nombre/rol */}
        <div className="footer-left">
          <img
            className="footer-logo"
            src="/assets/logo_sanchez_espin.webp"
            alt="Logotipo J. Mª. Dolores Sanchez Espin"
            loading="lazy"
            decoding="async"
          />
          <div className="footer-id">
            <h2 className="footer-name">J. Mª. Dolores Sanchez Espin</h2>
            <p className="footer-role">Letrada</p>
          </div>
        </div>

        {/* Derecha: dirección + teléfono */}
        <div className="footer-right">
          <p className="footer-item">
            <FaMapMarkerAlt className="footer-icon" />
            Avenida Catedrático Soler, 43 – 03008 Alicante
          </p> <p className="footer-item">
            <MdEmail className="footer-icon" />
            mariadolores@sanchezespin.es
          </p>
          <p className="footer-item">
            <FaPhone className="footer-icon" />
            965 11 23 69
          </p>

        </div>
      </div>
    </footer>
  );
}
