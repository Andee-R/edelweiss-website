import React from "react";
import "./Navbar.css";
import edelweisslogo from "../Images/Flattend_new_logo.png";
import biermenu from "../Images/biermenu.pdf";
import cocktail from "../Images/cocktails.pdf";
import food from "../Images/foodmenu.pdf";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/home">
        <img src={edelweisslogo} alt="" className="logo" />
      </Link>

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
