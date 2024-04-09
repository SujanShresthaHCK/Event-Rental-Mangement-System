import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./HallSelection.css";

const HallSelection = ({ onSelectClick, onImageClick }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [eventData, setEventData] = useState({});
  const [hallData, setHallData] = useState({});

  let hallnameselected;

  const handleSaveBook = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc&_limit=1")
      .then((response) => {
        setLoading(false);
        const latestData = response.data.data.pop(); // Get the last element of the data array
        const latestId = latestData._id; // Get the _id of the latest data
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
      hallName: hallnameselected,
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
    fetchEventData();
  }, []);

  const fetchEventData = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc")
      .then((response) => {
        setLoading(false);
        const eventData = response.data.data;
        setEventData(eventData);
        console.log(eventData);
        enqueueSnackbar("Event data retrieved successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error retrieving event data", { variant: "error" });
        console.log(error);
      });
  };

  const fetchHallData = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/halls?_sort=createdAt&_order=desc")
      .then((response) => {
        setLoading(false);
        const hallData = response.data.data;
        setHallData(hallData);
        console.log(hallData);
        enqueueSnackbar("Event data retrieved successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error retrieving event data", { variant: "error" });
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
        <div className="halls hall-kathmandu" style={{}}>
          <img src="/images/HallKathmandu.jpg" alt="" className="hallimg" />
          <div className="hallDes">
            <h1>Hall Kathmandu</h1>
            <p>Capacity 850-1000</p>
            <p>Events: Wedding. Anniversary. Engagement. Bartamanda.</p>
            <div className="buttons">
              <button
                className="primarybtn"
                onClick={() => {
                  hallnameselected = "Hall Kathmandu";
                  handleSaveBook();
                  onSelectClick();
                }}
              >
                Select
              </button>

              <button
                className="secondarybtn"
                onClick={() => onImageClick("HallKathmandu")}
              >
                View Hall
              </button>
            </div>
          </div>
        </div>
        <div className="halls hall-bhaktapur">
          <img src="/images/HallBhaktapur.jpg" alt="" className="hallimg" />
          <div className="hallDes">
            <h1>Hall Bhaktapur</h1>
            <p>Capacity 850-1000</p>
            <p>Events: Wedding. Anniversary. Engagement. Bartamanda.</p>
            <div className="buttons">
              <button
                className="primarybtn"
                onClick={() => {
                  hallnameselected = "Hall Bhaktapur";
                  handleSaveBook();
                  onSelectClick();
                }}
              >
                Select
              </button>

              <button
                className="secondarybtn"
                onClick={() => onImageClick("HallBhaktapur")}
              >
                View Hall
              </button>
            </div>
          </div>
        </div>
        <div className="halls hall-patan">
          <img src="/images/HallPatan.jpg" alt="" className="hallimg" />
          <div className="hallDes">
            <h1>Hall Patan</h1>
            <p>Capacity 850-1000</p>
            <p>Events: Wedding. Anniversary. Engagement. Bartamanda.</p>
            <div className="buttons">
              <button
                className="primarybtn"
                onClick={() => {
                  hallnameselected = "Hall Patan";
                  handleSaveBook();
                  onSelectClick();
                }}
              >
                Select
              </button>

              <button
                className="secondarybtn"
                onClick={() => onImageClick("HallPatan")}
              >
                View Hall
              </button>
            </div>
          </div>
        </div>
        <div className="halls hall-kritipur">
          <img src="/images/HallKritipur.jpeg" alt="" className="hallimg" />
          <div className="hallDes">
            <h1>Hall Kritipur</h1>
            <p>Capacity 850-1000</p>
            <p>Events: Wedding. Anniversary. Engagement. Bartamanda.</p>
            <div className="buttons">
              <button
                className="primarybtn"
                onClick={() => {
                  hallnameselected = "Hall Kritipur";
                  handleSaveBook();
                  onSelectClick();
                }}
              >
                Select
              </button>

              <button
                className="secondarybtn"
                onClick={() => onImageClick("HallKritipur")}
              >
                View Hall
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallSelection;
