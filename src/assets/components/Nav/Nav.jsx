import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <section className="nav-wrapper">
      <nav className="nav-container">
        <Link to="/home">
          <img src="/images/logo.png" alt="" />
        </Link>
        <h1>Hamro Banquet</h1>
        <div className="line"></div>
      </nav>
    </section>
  );
};

export default Nav;
