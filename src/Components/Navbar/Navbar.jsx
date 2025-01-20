import React, { useEffect, useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../images/Flattend_new_logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 90 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav ref={navRef} className={`nav ${sticky ? "darkNav" : ""}`}>
      <Link to="/home">
        <img src={logo} alt="" className="logo" />
      </Link>

      <ul className="menuLinks">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <ul className="dropDown">
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
        </ul>
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
