import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImage from "../../assets/spotLogoGrey.png";
import homeIcon from "../../assets/homeIcon.png";
import listIcon from "../../assets/listIcon.png";
import mapIcon from "../../assets/mapIcon.png";
import testingIcon from "../../assets/testingIcon.png";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container">
      <header className="header">
        <button className="hamburger-button" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div>
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </Link>
        </div>
        <div
          className={`menu-container${isMenuOpen ? " open" : ""}`}
          onClick={closeMenu}
        >
          <button className="menu-close-button">
            <FiX />
          </button>
          <div className="menu-content">
            <div className="menu-link">
              <img src={homeIcon} alt="Menu Icon" className="menu-icon" />
              <Link to="/">Home</Link>
            </div>
            <div className="menu-link">
              <img src={listIcon} alt="Menu Icon" className="menu-icon" />
              <Link to="/listView">List View</Link>
            </div>
            <div className="menu-link">
              <img src={mapIcon} alt="Menu Icon" className="menu-icon" />
              <Link to="/MapView">Map View</Link>
            </div>
            <div className="menu-link">
              <img src={testingIcon} alt="Menu Icon" className="menu-icon" />
              <Link to="/testingEnvironment">Testing Environment</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
