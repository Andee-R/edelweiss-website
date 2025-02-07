import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import edelweisslogo from "../../images/Flattend_new_logo.png";
import biermenu from "../../images/beirmenu.jpeg";
import cocktail from "../../images/cocktails.pdf";
import food from "../../images/foodmenu.pdf";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav ref={navRef} className={`nav ${sticky ? "darkNav" : ""}`}>
      <Link to="/home">
        <img src={edelweisslogo} alt="Logo" className="logo" />
      </Link>
      <IconContext.Provider
        value={{ color: "black", className: "react-icons" }}>
        <button className="btn" onClick={showNavbar}>
          <FaBars />
        </button>
        <button className="btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </IconContext.Provider>
      <ul className="menuLinks">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown}>Menus</button>
          <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <li>
              <Link to={food} target="_blank">
                Food Menu
              </Link>
            </li>
            <li>
              <Link to={biermenu} target="_blank">
                Bier Menu
              </Link>
            </li>
            <li>
              <Link to={cocktail} target="_blank">
                Cocktail Menu
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
