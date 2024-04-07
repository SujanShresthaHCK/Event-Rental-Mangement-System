import React, { useRef, useState, useEffect } from "react";
import { imageData } from "./mockData";
import "./HallKathmandu.css";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const HallKathmandu = ({ onSelectClick, onBack }) => {
  const [hallName, setHallName] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      hallName: "Hall Kathmandu",
    };
    setLoading(true);
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc")

      .then(() => {
        axios
          .post(`http://localhost:9000/books/`, data)
          .then((response) => {
            setLoading(false);
            const lastEnteredValues = response.data._id;
            console.log(lastEnteredValues);
            enqueueSnackbar(
              "Last entered values retrieved: " +
                JSON.stringify(lastEnteredValues),
              { variant: "info" }
            );
          })
          .catch((error) => {
            setLoading(false);
            enqueueSnackbar("Error fetching last entered values", {
              variant: "error",
            });
            console.log(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

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
            Hall Kathmandu
          </h1>
          <span>Capacity 600 - 1000</span>
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
      <button
        className="selectbtn"
        onClick={() => {
          onSelectClick();
          handleSaveBook();
        }}
      >
        Select Hall
      </button>
    </div>
  );
};

export default HallKathmandu;
