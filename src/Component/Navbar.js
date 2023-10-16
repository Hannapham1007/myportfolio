import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar-container">
      <div className="nav-con">
        <div className="nav-name">
          <Link
            to="home"
            style={{
              color: "var(--primary)",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            HANNA PHAM
          </Link>
        </div>
        
        <div className="menu-icon " onClick={handleClick}>
          {click ? (
            <FaTimes style={{ fontSize: "25px" }} />
          ) : (
            <FaBars style={{ fontSize: "25px" }} />
          )}
        </div>
       

        <div className={click ? "nav-mobile" : "nav-desktop"}>
          <ul>
            <li>
              <Link to="about" smooth={true} duration={500}> 
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="project" smooth={true} duration={500}>
                PROJECT
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
