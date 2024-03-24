import React from "react";
import "./Footer.css";
import { FaCalendarAlt, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-content">
          <h1>Hamro Banquet</h1>
          <p>Chabahil, Kathmandu</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            ipsa nostrum, ab doloribus eaque, quod dicta culpa perferendis sunt
            animi magnam libero consectetur sit similique sequi laborum
            repudiandae. Facere, ut!
          </p>
          <FaFacebook style={{ fontSize: "20px", padding: "10px" }} />
          <FaInstagram style={{ fontSize: "20px", padding: "10px" }} />
        </div>
        <div className="footer-bottom">
          <p style={{ fontSize: "14px" }}>Copyright @2024</p>
        </div>
      </div>
    </section>
  );
};
