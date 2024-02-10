import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

// Throttle function to limit the frequency of scroll event handling
const throttle = (callback, delay) => {
  let lastTime = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      callback();
      lastTime = now;
    }
  };
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 70);
    }, 50);

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");

    setActiveLink(currentPath || "home");
  }, [location.pathname]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    
    setIsNavbarOpen(false);
  };

  const handleToggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <Link className="logo" to="/">
          START FRAMEWORK
        </Link>
        <span
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={handleToggleNavbar}
        >
          <i className="fa-solid fa-bars"></i>
        </span>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                to="/"
                onClick={() => handleLinkClick("home")}
              >
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                to="/about"
                onClick={() => handleLinkClick("about")}
              >
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "portfolio" ? "active" : ""
                }`}
                to="/portfolio"
                onClick={() => handleLinkClick("portfolio")}
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                to="/contact"
                onClick={() => handleLinkClick("contact")}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
