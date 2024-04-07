import React, { useRef, useState } from "react";
import { imageData } from "./mockData";
import "./HallPatan.css";

const HallKathmandu = ({ onSelectClick, onBack }) => {
  const scrollRef = useRef(null);
  const [showBackButton, setShowBackButton] = useState(false); // State to control back button visibility

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setShowBackButton(container.scrollLeft > 0); // Show back button if scrolled to the right
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="kathmanducontainer">
      <div className="kathmandu-wrapper">
        <button className="backbtn" onClick={onBack}>
          ⬅ Back
        </button>
        <div className="kathmandu-content">
          <h1 className="title" style={{ fontWeight: "500", color: "#846330" }}>
            Hall Patan
          </h1>
          <span>Capacity 200 - 500</span>
          <div
            className="scroll-container"
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {imageData.map((item, index) => (
              <img
                key={index}
                src={item.img}
                alt=""
                className="kathmandu-image"
              />
            ))}
          </div>
        </div>
      </div>
      <button className="selectbtn" onClick={onSelectClick}>
        Select Hall
      </button>
    </div>
  );
};

export default HallKathmandu;
