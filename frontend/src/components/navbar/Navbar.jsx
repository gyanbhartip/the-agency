import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            The Agency
          </a>
          <ul className="right">
            <li>
              <Link to="home" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="login" className="nav-item">
                Login
              </Link>
            </li>
            <li>
              <Link to="about" className="nav-item">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
