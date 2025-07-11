import { NavLink } from "react-router-dom";
import logo from "../assets/react.svg";
import styles from "./Navbar.module.css";

function Navbar() {
  // Define navigation items in an array for better maintainability
  const navItems = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.navbarCustom}`}
      aria-label="Main navigation"
    >
      <div className="container">
        {/* Brand/logo section */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="React Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="ms-2 fw-bold">React App</span>
        </NavLink>

        {/* Mobile toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `nav-link px-3 ${isActive ? styles.active : ""} ${
                      styles.navLinkHover
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
