import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Header.css";
import image from "../assets/Images/DynamoTech.png";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className="Header">
      <nav>
 
      <div className="menu-toggle">
          <button onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="logo">
          <img src={image} className="img-logo" alt="" />
        
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="nav-right">
          <ul className="social-icon">
            <li>
              <a href="#">
                <FaFacebook className="facebook" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <FaTwitter className="twitter" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <FaLinkedin className="linkedin" />
              </a>
            </li>
          </ul>
          <a class="search-toggle-btn" aria-label="Search toggle"><i class="fa fa-search" aria-hidden="true"></i></a>
        </div>
      </nav>
    </div>
  );
};

export default Header;