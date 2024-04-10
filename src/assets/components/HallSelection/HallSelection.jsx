import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./HallSelection.css";

const HallSelection = ({ onSelectClick, onImageClick }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [hallData, setHallData] = useState([]);

  let hallNameSelected;

  const handleSaveBook = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc&_limit=1")
      .then((response) => {
        setLoading(false);
        const latestData = response.data.data.pop();
        const latestId = latestData._id;
        enqueueSnackbar("Latest data retrieved. Check console.", {
          variant: "info",
        });

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
      hallName: hallNameSelected,
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

  useEffect(() => {
    fetchHallData();
  }, []);

  const fetchHallData = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/halls?_sort=createdAt&_order=desc")
      .then((response) => {
        setLoading(false);
        const hallData = response.data.data;
        setHallData(hallData);
        enqueueSnackbar("Hall data retrieved successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error retrieving hall data", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <section className="hall-wrapper">
      <h1
        style={{
          paddingLeft: "60px",
          paddingTop: "70px",
          paddingBottom: "80px",
          color: "#846330",
          fontWeight: "500",
          fontSize: "25px",
        }}
      >
        Hall Selection
      </h1>
      <p
        style={{
          color: "green",
          paddingLeft: "60px",
          paddingBottom: "10px",
        }}
      >
        Available halls for the selected date.
      </p>
      <div className="hall-container">
        {hallData.map((hall, index) =>
          hall.name === "Hall Bhaktapur" ? null : (
            <div
              key={index}
              className={`halls hall-${hall.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <img
                src={`/images/${hall.name}.jpg`}
                alt={hall.name}
                className="hallimg"
              />
              <div className="hallDes">
                <h1>{hall.name}</h1>
                <p>Capacity: {hall.capacity}</p>

                <div className="buttons">
                  <button
                    className="primarybtn"
                    onClick={() => {
                      hallNameSelected = hall.name;
                      handleSaveBook();
                      onSelectClick();
                    }}
                  >
                    Select
                  </button>

                  <button
                    className="secondarybtn"
                    onClick={() => onImageClick(hall.name)}
                  >
                    View Hall
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default HallSelection;
