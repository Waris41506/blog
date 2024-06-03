import React from "react";
import "./MobileMenu.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="show-menu">
      <div className="menu-list">
        <span onClick={closeMenu}>X</span>
        <h1>Y Blogs</h1>
        <div className="list">
          <h3>Home</h3>
          <h3>Latest</h3>
          <h3>Trendind</h3>
          <h3>About Us</h3>
          <h3>Contact</h3>
        </div>
        <div className="icons-box">
          <FaFacebookF className="icon" size={20} color="#444" />
          <FaInstagram className="icon" size={20} color="#444" />
          <FaLinkedin className="icon" size={20} color="#444" />
          <FaYoutube className="icon" size={20} color="#444" />
          <FaTwitterSquare className="icon" size={20} color="#444" />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
