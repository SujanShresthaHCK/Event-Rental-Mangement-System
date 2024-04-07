import React from "react";
import "./HallSelection.css";

const HallSelection = ({ onImageClick }) => {
  return (
    <section className="hall-wrapper">
      <div className="hall-container">
        <h1
          style={{ color: "#846330", fontWeight: "400", marginBottom: "80px" }}
        >
          Select a Hall
        </h1>
        <div className="hall">
          <div
            className="hallkathmandu"
            style={{ paddingRight: "80px", paddingBottom: "80px" }}
            onClick={() => onImageClick("HallKathmandu")}
          >
            <img
              src="/images/HallKathmandu.jpg"
              alt=""
              className="hallimages"
            />
            <h1>Hall Kathmandu</h1>
            <p>Capacity 600 - 1000</p>
          </div>
          <div
            className="hallbhaktapur"
            onClick={() => onImageClick("HallBhaktapur")}
          >
            <img
              src="/images/HallBhaktapur.jpg"
              alt=""
              className="hallimages"
            />
            <h1>Hall Bhaktapur</h1>
            <p>Capacity 450 - 800</p>
          </div>
        </div>
        <div className="hall">
          <div
            className="hallpatan"
            style={{ paddingRight: "80px", paddingBottom: "80px" }}
            onClick={() => onImageClick("HallPatan")}
          >
            <img src="/images/HallPatan-3.jpg" alt="" className="hallimages" />
            <h1>Hall Patan</h1>
            <p>Capacity 200 - 500</p>
          </div>
          <div
            className="hallkritipur"
            onClick={() => onImageClick("HallKritipur")}
          >
            <img
              src="/images/HallKritipur.jpeg"
              alt=""
              className="hallimages"
            />
            <h1>Hall Kritipur</h1>
            <p>Capacity 100 - 250</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallSelection;
