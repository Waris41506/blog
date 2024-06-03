import React, { useState } from "react";
import "./Navber.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Shearch from "./Shearch";

const Navber = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shearch, setShearch] = useState(false);

  const [navBg, setnavBg] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleCloseShearch = () => {
    setShearch(false);
  };

  const handleNavBg = () => {
    if (window.scrollY >= 100) {
      setnavBg(true);
    } else {
      setnavBg(false);
    }
  };

  window.addEventListener("scroll", handleNavBg);

  return (
    <>
      <nav className={navBg ? "nav-bg " : ""}>
        <h1>
          <Link to="/">Y Blogs</Link>
        </h1>
        <ul>
          <li className="active">
            Home
            <div className="sub-menu">
              <ul>
                <li>
                  <Link to="/fashion">Fashion</Link>
                </li>
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/electronic">Electronic</Link>
                </li>
                <li>
                  <Link to="/cricket">Cricket</Link>
                </li>
                <li>
                  <Link to="/technology">Technology</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="li">Latest</li>
          <li className="li">Trending</li>
          <li className="li">About </li>
          <li className="li">Contact</li>
        </ul>

        <div className="icons-box nav-icon">
          <FaFacebookF className="icon" size={20} color="#444" />
          <FaInstagram className="icon" size={20} color="#444" />
          <FaLinkedin className="icon" size={20} color="#444" />
          <FaYoutube className="icon" size={20} color="#444" />
          <FaTwitterSquare className="icon" size={20} color="#444" />
        </div>
        <div className="menu-box">
          <FiSearch
            className="icon icon-down"
            size={20}
            color="white"
            onClick={() => setShearch(true)}
          />
          <FiMenu
            className="icon icon-down icon-menu"
            size={20}
            color="white"
            onClick={() => setShowMenu(true)}
          />
        </div>

        <div className={showMenu ? "nav-mobile" : "hide-nav-mobile"}>
          <MobileMenu closeMenu={handleCloseMenu} />
        </div>
        <div className={shearch ? "nav-mobile" : "hide-nav-mobile"}>
          {shearch && <Shearch closeShearch={handleCloseShearch} />}
        </div>
      </nav>

      {/* <MobileMenu closeMenu={handleCloseMenu}/> */}
    </>
  );
};

export default Navber;
