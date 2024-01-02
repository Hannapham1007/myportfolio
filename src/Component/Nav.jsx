import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className=" container navbar navbar-expand-lg ">
      <h3 className="navbar-brand" >
        Hanna Pham
      </h3>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav text-center">
          <li className="nav-item">
            <Link className="nav-link" to="tech">
              Tech
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="project">
              Project
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
