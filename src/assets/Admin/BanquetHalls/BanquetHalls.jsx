import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

import "../../components/HallSelection/HallSelection.css";
import HallKathmandu from "../../components/HallKathmandu/HallKathmandu";

const BanquetHalls = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  //   const [selectedHall, setSelectedHall] = useState("Hall Kathmandu");
  const [hallData, setHallData] = useState([]);
  const [showAllHalls, setShowAllHalls] = useState(false);
  const [showAllText, setShowAllText] = useState("Show All Halls");
  let hallNameSelected;
  let hallprice;

  const fetchHallData = async () => {
    try {
      setLoading(true);
      const hallsResponse = await axios.get(
        "http://localhost:9000/halls?_sort=createdAt&_order=desc"
      );

      const halls = hallsResponse.data.data;

      // Filter halls that are present in the database and have a name
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

  const getNumberOfDays = (startDate, endDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffDays = Math.round(Math.abs((start - end) / oneDay)) + 1;
    return diffDays;
  };

  useEffect(() => {
    fetchHallData();
  }, []);

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
                  <div className="buttons">
                    {/* <button
                    className="primarybtn"
                    onClick={() => {
                      hallNameSelected = hall.name;
                      handleSaveBook();
                      onSelectClick();
                    }}
                  >
                    Select
                  </button> */}
                    {/* <button
                      className="secondarybtn"
                      onClick={() => setSelectedHall(hall.name)}
                    >
                      View Hall
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="left-side">
          <div className="hall-kathmandu">
            {/* {selectedHall === "Hall Kathmandu" && <HallKathmandu />} */}

            {/* {selectedHall === "Hall Bhaktapur" && }
          {selectedHall === "Hall Patan" && <HallPatan />}
          {selectedHall === "Hall Kritipur" && <HallKritipur />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BanquetHalls;
