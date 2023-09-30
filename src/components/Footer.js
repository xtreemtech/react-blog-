
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";import React from "react";
import "./Footer.css";

const Footer = () => {
  const categories = ["Green Hydrogen", "Smart technology", "Solar Energy", "Sustainable building"];
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
        <p><img class="wp-image-548" src="https://dynamotechtrends.com/wp-content/uploads/2023/09/cropped-DynamoTech_white-removebg.png" alt="" width="150" height="auto" /></p>
          <h2>About Us</h2>
          <p>
          Discover the latest in solar energy and technology on our blog. Explore innovations, trends, and the path to a cleaner future powered by the sun.
          </p>
          <p>© Copyright 2023 built and managed by <a target="_blank" rel="noopener">Chinonso Kalu</a></p>
        </div>

        <div className="footer-content">
          <h2>PAGES</h2>
          <div className="Footer-page">
 <address>
            Email: <a href="mailto:info@example.com">info@example.com</a>
            <br />
            Phone: <a href="tel:+123456789">+1 (234) 567-89</a>
          </address>
          </div>
         
        </div>
        <div className="footer-content">
          <h2>CATEGORIES</h2>
          <div className="post-categories">
      {categories.map((category) => (
        <a href="#" key={category}>{category}</a>
      ))}
    </div>
        </div>

        <div className="footer-content">
        <h2>Follow Us</h2>
          <div className="Footer-social">
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
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
