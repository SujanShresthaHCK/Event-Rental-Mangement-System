import React, { useRef, useState } from "react";
import { imageData } from "./mockData";
import "./HallKathmandu.css";
import { useSnackbar } from "notistack";
import axios from "axios";

const HallKathmandu = ({ onSelectClick, onBack }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc&_limit=1")
      .then((response) => {
        setLoading(false);
        const latestData = response.data.data.pop(); // Get the last element of the data array
        const latestId = latestData._id; // Get the _id of the latest data
        console.log("Latest ID:", latestId);
        enqueueSnackbar("Latest data retrieved. Check console.", {
          variant: "info",
        });
        // Update the document with the new value
        updateDocument(latestId);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  const updateDocument = (id) => {
    const data = {
      hallName: "Hall Kathmandu",
    };
    axios
      .put(`http://localhost:9000/books/${id}`, data)
      .then(() => {
        enqueueSnackbar("Document updated successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar("Error updating document", { variant: "error" });
        console.log(error);
      });
  };

  const scrollRef = useRef(null);
  const [showBackButton, setShowBackButton] = useState(false);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setShowBackButton(container.scrollLeft > 0);
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
          handleSaveBook(); // Call handleSaveBook when Select Hall button is clicked
        }}
      >
        Select Hall
      </button>
    </div>
  );
};

export default HallKathmandu;
