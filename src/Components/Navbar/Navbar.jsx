import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/home">
        <img src={""} alt="" className="logo" />
      </Link>

      <ul className="menuLinks">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to={""} target="_blank">
            Bier Menu
          </Link>
        </li>
        <li>
          <Link to={""} target="_blank">
            Cocktail Menu
          </Link>
        </li>
        <li>
          <Link to={""} target="_blank">
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
