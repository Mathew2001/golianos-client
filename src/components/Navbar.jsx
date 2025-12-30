import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import HomeButton from "./buttons/HomeButton";
import AboutButton from "./buttons/AboutButton";
import ServicesButton from "./buttons/ServicesButton";
import ContactButton from "./buttons/ContactButton";


const Navbar = () => {
  const { business } = useSelector((state) => state.businessReducer);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Disable scrolling on sidebar open
  if (typeof window !== "undefined") {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <nav className="navbar navbar-light shadow-sm sticky-top" style={{ backgroundColor: "#0184f9",height: "110px" }}>
      <div className="container d-flex justify-content-between align-items-center">

        {/* Logo / Business Name */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2" dir="rtl">
          {business?.businessName && (
            <span className="fw-bold text-white" style={{ fontSize: "3rem" }}>{business?.businessName}</span>
          )}
          {business?.businessLogo ? (
            <img
              src={business.businessLogo?.image}
              alt={business?.businessName}
              height="80"
              width="80"
              className="rounded-circle"
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span className="fw-bold">{business?.businessName}</span>
          )}
        </NavLink>

        {/* Desktop Navbar */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center" dir="rtl">
          <ul className="navbar-nav flex-row gap-lg-3">
            <li className="nav-item">
              <HomeButton/>
            </li>
            <li className="nav-item">
              <AboutButton/>
            </li>
            <li className="nav-item">
              <ServicesButton/>
            </li>
            <li className="nav-item">
              <ContactButton/>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column justify-content-start d-none d-md-flex">
          <span className="text-white d-flex align-items-center">
            <i className="bi bi-envelope-fill me-2"></i>
            {business?.businessEmail}
          </span>
          <span className="text-white d-flex align-items-center mb-1">
            <i className="bi bi-telephone-fill me-2"></i>
            {business?.businessPhone}
          </span>
          <span className="text-white d-flex align-items-center">
            <i className="bi bi-geo-alt-fill me-2"></i>
            {business?.businessAddress}
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
          style={{ zIndex: 1101 }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`mobile-navbar-sidebar ${sidebarOpen ? "open" : ""}`}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          width: "80vw",
          maxWidth: 180,
          background: "#0184f9",
          boxShadow: sidebarOpen ? "-2px 0 15px rgba(0,0,0,0.2)" : "none",
          transition: "transform 0.3s ease, box-shadow 0.3s",
          transform: sidebarOpen ? "translateX(0)" : "translateX(100%)",
          zIndex: 1200,
          display: "block",
        }}
      >
        {/* Sidebar header */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom" dir="rtl">
          <NavLink
            to="/"
            className="navbar-brand d-flex align-items-center gap-2"
            onClick={() => setSidebarOpen(false)}
          >
            {business?.businessLogo ? (
              <img
                src={business.businessLogo?.image}
                alt={business?.businessName}
                height="36"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <span className="fw-bold">{business?.businessName}</span>
            )}
          </NavLink>
          <button
            className="btn btn-outline-secondary"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            style={{ fontSize: "1.5rem", lineHeight: "1" }}
          >
            ×
          </button>
        </div>
        {/* Sidebar Links */}
        <ul className="navbar-nav flex-column px-3 pt-3 gap-2" dir="rtl">
          <li className="nav-item">
            <HomeButton onClick={() => setSidebarOpen(false)}/>
          </li>
          <li className="nav-item">
            <AboutButton onClick={() => setSidebarOpen(false)}/>
          </li>
          <li className="nav-item">
            <ServicesButton onClick={() => setSidebarOpen(false)}/>
          </li>
          <li className="nav-item mt-3">

            <ContactButton onClick={() => setSidebarOpen(false)}/>
          </li>
        </ul>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="mobile-navbar-overlay"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1199,
            animation: "fadeIn 0.3s"
          }}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
