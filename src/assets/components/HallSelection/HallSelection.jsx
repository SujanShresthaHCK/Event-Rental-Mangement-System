import React from "react";
import "./HallSelection.css";
import { FaArrowLeft } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";

const HallSelection = ({ onBack }) => {
  return (
    <section className="hall-wrapper">
      <button onClick={onBack}>
        <FaArrowLeft className="back" style={{ marginRight: "6px" }} /> Back
      </button>
      <div className="hall-container">
        <h1
          style={{ color: "#846330", fontWeight: "500", marginBottom: "80px" }}
        >
          Select a Hall
        </h1>
        <div className="hall">
          <div
            className="hallkathmandu"
            style={{ paddingRight: "80px", paddingBottom: "80px" }}
          >
            <img
              src="/images/HallKathmandu.jpg"
              alt=""
              className="hallimages"
            />
            <h1>Hall Kathmandu</h1>
          </div>
          <div className="hallbhaktapur">
            <img
              src="/images/HallBhaktapur.jpg"
              alt=""
              className="hallimages"
            />
            <h1>Hall Bhaktapur</h1>
          </div>
        </div>
        <div className="hall">
          <div
            className="hallpatan"
            style={{ paddingRight: "80px", paddingBottom: "80px" }}
          >
            <img src="/images/HallPatan.jpg" alt="" className="hallimages" />
            <h1>Hall Patan</h1>
          </div>
          <div className="hallkritipur">
            <img
              src="/images/HallKritipur.jpeg"
              alt=""
              className="hallimages"
            />
            <h1>Hall Kritipur</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallSelection;
