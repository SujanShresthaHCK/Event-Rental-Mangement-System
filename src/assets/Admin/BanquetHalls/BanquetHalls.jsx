import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";
import "./BanquetHalls.css";

import "../../components/HallSelection/HallSelection.css";
import HallKathmandu from "../../components/HallKathmandu/HallKathmandu";

const BanquetHalls = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [hallData, setHallData] = useState([]);
  const [showAllHalls, setShowAllHalls] = useState(false);
  const [showAllText, setShowAllText] = useState("Show All Halls");

  const fetchHallData = async () => {
    try {
      setLoading(true);
      const hallsResponse = await axios.get(
        "http://localhost:9000/halls?_sort=createdAt&_order=desc"
      );

      const halls = hallsResponse.data.data;

      const hallsInDatabase = halls.filter((hall) => hall.name);

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

  useEffect(() => {
    fetchHallData();
  }, []);

  const handleEditHall = () => {
    // Handle editing all halls here
    console.log("Editing hall");
  };

  const handleRemoveHall = (hallName) => {
    const updatedHallData = hallData.filter((hall) => hall.name !== hallName);
    setHallData(updatedHallData);
    // You may also want to send a request to your backend to remove the hall from the database
  };

  const handleAddHall = () => {
    // Handle adding a new hall here
    console.log("Adding a new hall");
  };

  return (
    <div className="dashboard-body">
      <h1
        style={{
          color: "#846330",
          marginLeft: "40px",
          paddingTop: "20px",
          fontWeight: "600",
          fontSize: "25px",
        }}
      >
        Banquet Halls
      </h1>
      <div className="container-halls">
        <div className="hall-container" style={{ marginTop: "40px" }}>
          {hallData.map((hall, index) => {
            return (
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
                    Price per Shift: {hall.priceShift}
                    <br />
                    Price per Day: {hall.priceDay}
                    <br />
                    {hall.bookings &&
                      hall.bookings
                        .filter(
                          (booking) =>
                            booking.hallName === hall.name &&
                            !booking.eventStatus
                        )
                        .map((booking, idx) => {
                          return (
                            <span key={idx} style={{ color: "red" }}>
                              Hall will be unavailable for the date:{" "}
                              {booking.days === "Single-Day" ? (
                                new Date(booking.bookDate).toLocaleDateString()
                              ) : (
                                <>
                                  <br />
                                  {new Date(
                                    booking.startDate
                                  ).toLocaleDateString()}{" "}
                                  to{" "}
                                  {new Date(
                                    booking.endDate
                                  ).toLocaleDateString()}
                                </>
                              )}
                              <br />
                            </span>
                          );
                        })}
                  </p>
                  <button
                    className="removebtn"
                    onClick={() => handleRemoveHall(hall.name)}
                  >
                    Remove Hall
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="action-buttons">
          <button className="primarybtn" onClick={handleEditHall}>
            Edit Hall
          </button>
          <button className="secondarybtn" onClick={handleAddHall}>
            Add Hall
          </button>
        </div>
        <div className="left-side">
          <div className="hall-kathmandu">
            {/* Render additional components or information here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanquetHalls;

