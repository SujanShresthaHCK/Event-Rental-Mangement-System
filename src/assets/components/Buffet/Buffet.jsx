import React from "react";
import "./Buffet.css";

const Buffet = ({ onBack, onBuffetSelectClick }) => {
  return (
    <section className="buffet-wrapper">
      <button onClick={onBack} className="backbtn">
        ⬅ Back
      </button>
      <div className="buffet-container">
        <h1
          style={{ color: "#846330", fontWeight: "400", marginBottom: "80px" }}
        >
          Buffet Selection
        </h1>
        <div className="buffetcontents">
          <div className="buffetpackages">
            <div className="goldpackage" style={{ display: "flex" }}>
              <img
                src="images/GoldPackage.jpg"
                alt=""
                className="buffetimages"
              />
              <div className="buffet-des">
                <h1>Gold Package</h1>
                <p>Per Person Rs. 3400</p>
                <p>
                  Items: Soup [3], Starters [11], Main Course [15], Dessert [5]
                </p>
                <button className="select" onClick={onBuffetSelectClick}>
                  Select
                </button>
              </div>
            </div>

            <div className="silverpackage" style={{ display: "flex" }}>
              <img
                src="images/SilverPackage.jpg"
                alt=""
                className="buffetimages"
              />
              <div className="buffet-des">
                <h1>Platinium Package</h1>
                <p>Per Person Rs. 2600</p>
                <p>
                  Items: Soup [1], Starters [7], Main Course [10], Dessert [3]
                </p>
                <button className="select" onClick={onBuffetSelectClick}>
                  Select
                </button>
              </div>
            </div>
            <div className="patiniumpackage" style={{ display: "flex" }}>
              <img
                src="images/PlatiniumPackage.jpg"
                alt=""
                className="buffetimages"
              />
              <div className="buffet-des">
                <h1>Silver Package</h1>
                <p>Per Person Rs. 2200</p>
                <p>Soup [1], Starters [5], Main Course [8], Dessert [2]</p>
                <button className="select" onClick={onBuffetSelectClick}>
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="menuimg">
            <img src="images/menu.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buffet;
