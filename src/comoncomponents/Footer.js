import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer data-aos="fade-up">
      <div className="container">
        <div className="row g-5 footer-main-content">
          {/* Contact Info - LEFT */}
          <div className="col-lg-4 col-md-6 text-center text-md-start order-lg-1 order-2">
            <h5 className="fw-bold">Contact Us</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <a
                  href="tel:+918488895151"
                  className="footer-link text-light py-1 d-block"
                >
                  <FontAwesomeIcon icon={faPhone} className="me-2" /> +91 84888
                  95151
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="mailto:iinfinitivegroup7@gmail.com"
                  className="footer-link text-light py-1 d-block"
                >
                  <FaEnvelope className="me-2" /> infinitivegroup7@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://wa.me/918488895151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link text-light py-1 d-block"
                >
                  <FaWhatsapp className="me-2" /> WhatsApp Us
                </a>
              </li>
              <li className="mt-3">
                <h5 className="fw-bold mb-1" style={{ color: "#00d9ff" }}>
                  Our Office
                </h5>
                <p className="mb-0">
                  Office No: 104, Sicillia, Nr. ABC Circle,
                </p>
                <p className="mb-0">Mota Varachha, Surat-394101.</p>
              </li>
            </ul>
          </div>

          {/* Quick Links - CENTER */}
          <div className="col-lg-2 col-md-6 d-flex flex-column align-items-center text-center order-lg-2 order-1">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              {["Home", "about", "Services", "Projects", "contact"].map(
                (link, idx) => (
                  <li key={idx} className="mb-2">
                    <Link
                      to={
                        link === "Home"
                          ? "/"
                          : `/${link.toLowerCase().replace(" ", "")}`
                      }
                      className="footer-link text-light py-1 d-block"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Info - RIGHT */}
          <div className="col-lg-6 col-md-6 text-center text-md-end order-lg-3 order-3">
            <Link to="/" className="text-decoration-none">
              <h2 className="fw-bold">
                Infinitive <span style={{ color: "#fff" }}>Groups</span>
              </h2>
            </Link>
            <p className="mt-3">
              We deliver top-quality construction services with a commitment to
              safety, durability, and client satisfaction.
            </p>

            <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="footer-icon"
                />
              </a>
              <a href="tel:+919016972420">
                <FontAwesomeIcon
                  icon={faHeadset}
                  size="2x"
                  className="footer-icon"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="text-light mt-5 mb-4" />

        {/* Bottom Section */}
        <div className="text-center text-light bottom-section">
          <p>
            © 2025 <span style={{ color: "#00d9ff" }}>Infinitive Groups</span>.
            All rights reserved. Design and Developed by{" "}
            <span style={{ color: "#00d9ff" }}>Infinitive Groups</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
