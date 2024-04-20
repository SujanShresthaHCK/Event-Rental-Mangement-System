import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./HallSelection.css";

const HallSelection = ({ onSelectClick, onImageClick }) => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const [hallData, setHallData] = useState([]);
  let hallNameSelected;

  const fetchHallData = async () => {
    try {
      setLoading(true);
      const hallsResponse = await axios.get(
        "http://localhost:9000/halls?_sort=createdAt&_order=desc"
      );

      const halls = hallsResponse.data.data;

      // Filter halls that are present in the database and have a name
      const hallsInDatabase = halls.filter((hall) => hall.name);

      // Fetch bookings for halls in the database with eventStatus as false
      const hallsWithBookings = await Promise.all(
        hallsInDatabase.map(async (hall) => {
          try {
            console.log("Fetching bookings for hall:", hall.name);
            const bookingsResponse = await axios.get(
              `http://localhost:9000/books?hallName=${hall.name}&eventStatus=false`
            );
            const bookings = bookingsResponse.data.data;
            console.log("Bookings for hall:", hall.name, bookings);
            return { ...hall, bookings };
          } catch (error) {
            console.error(
              "Error fetching bookings for hall:",
              hall.name,
              error
            );
            return hall;
          }
        })
      );

      setHallData(hallsWithBookings);
      setLoading(false);
      enqueueSnackbar("Hall data retrieved successfully", {
        variant: "success",
      });
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Error retrieving hall data", { variant: "error" });
      console.error("Error fetching hall data:", error);
    }
  };

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
      <div className="hall-container">
        {hallData.map((hall, index) => (
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
              <p>
                Capacity: {hall.minCapacity} - {hall.maxCapacity}
                <br />
                {hall.bookings &&
                  hall.bookings
                    .filter(
                      (booking) =>
                        booking.hallName === hall.name && !booking.eventStatus
                    )
                    .map((booking, idx) => (
                      <span key={idx} style={{ color: "red" }}>
                        Hall will be unavailable for the date:{" "}
                        {new Date(booking.bookDate).toLocaleDateString()}{" "}
                        {/* Display booked date */}
                        <br />
                      </span>
                    ))}
              </p>

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
        ))}
      </div>
    </section>
  );
};

export default HallSelection;
