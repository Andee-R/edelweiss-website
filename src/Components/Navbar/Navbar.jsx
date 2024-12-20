import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import edelweisslogo from "../../assets/Flattend_new_logo.png";
import biermenu from "../../assets/biermenu.pdf";
import cocktail from "../../assets/cocktails.pdf";
import food from "../../assets/foodmenu.pdf";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav ref={navRef} className={`nav ${sticky ? "darkNav" : ""}`}>
      <Link to="/home">
        <img src={edelweisslogo} alt="" className="logo" />
      </Link>
      <IconContext.Provider
        value={{ color: "black", className: "react-icons" }}>
        <button className="btn " onClick={showNavbar}>
          <FaBars />
        </button>
        <button className="btn " onClick={showNavbar}>
          <FaTimes />
        </button>
      </IconContext.Provider>
      <ul className="menuLinks">
        <li>
          <Link to="/home">Home</Link>
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
        <li>
          <Link to={food} target="_blank">
            Food Menu
          </Link>
        </li>
        <li>
          <Link to="/hostEvent" target="_blank">
            Host an Event
          </Link>
        </li>
        <li>
          <Link to="/Gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
