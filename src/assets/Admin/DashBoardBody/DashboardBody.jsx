import "../DashBoard/Dashboard.css";
import React, { useState, useEffect } from "react";

import { RiHomeFill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { BiSolidBuilding } from "react-icons/bi";
import { LuMenuSquare } from "react-icons/lu";
import { MdMeetingRoom } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";
import { useSnackbar } from "notistack";
import { Link } from "react-router-dom";

const DashboardBody = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [unconfirmedData, setUnconfirmedData] = useState([]);

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/books")
      .then((response) => {
        setLoading(false);
        const dbData = response.data.data.filter(
          (entry) => !entry.confirmed && entry.checkedOut
        );
        setUnconfirmedData(dbData);
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const handleAccept = (entryId) => {
    axios
      .put(`http://localhost:9000/books/${entryId}`, { confirmed: true })
      .then((response) => {
        setUnconfirmedData((prevData) =>
          prevData.filter((entry) => entry._id !== entryId)
        );
        enqueueSnackbar("Event confirmed successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar("Error confirming event", { variant: "error" });
        console.log(error);
      });
  };

  const handleDecline = (entryId) => {
    axios
      .put(`http://localhost:9000/books/${entryId}`, { checkedOut: false })
      .then((response) => {
        setUnconfirmedData((prevData) =>
          prevData.filter((entry) => entry._id !== entryId)
        );
        enqueueSnackbar("Event declined successfully", {
          variant: "success",
        });
      })
      .catch((error) => {
        enqueueSnackbar("Error declining event", { variant: "error" });
        console.log(error);
      });
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
        Hamro Banquet Dashboard
      </h1>
      <p style={{ marginLeft: "40px" }}>Welcome Admin,</p>

      <div className="dashboard-contents">
        <h2>Newly Added Events</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact Number</th>
                <th>Price</th>
                <th>Event Type</th>
                <th>Hall Name</th>
                <th>Estimated Guests</th>
                <th>Days</th>
                <th>Booked Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {unconfirmedData.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.name}</td>
                  <td>{entry.phoneNo}</td>
                  <td>Rs. {entry.price}</td>
                  <td>{entry.eventType}</td>
                  <td>{entry.hallName}</td>
                  <td>{entry.estimatedGuests}</td>
                  <td>{entry.days}</td>
                  <td>
                    {entry.days === "Single-Day"
                      ? formatDate(entry.bookDate)
                      : `${formatDate(entry.startDate)} to
                          ${formatDate(entry.endDate)}`}
                  </td>
                  <td>
                    <button
                      className="acceptbtn"
                      onClick={() => handleAccept(entry._id)}
                    >
                      ACCEPT
                    </button>
                    <button
                      className="declinebtn"
                      onClick={() => handleDecline(entry._id)}
                    >
                      DECLINE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="summary">
        <h2
          style={{
            fontWeight: "500",
            fontSize: "24px",
            marginLeft: "40px",
            marginTop: "20px",
          }}
        >
          Summary
        </h2>
        <div className="summary-contents">
          <div className="summaryboxes">
            <div className="boxes">
              <div className="box-content">
                <h1
                  style={{
                    color: "white",
                    marginLeft: "20px",
                    paddingTop: "20px",
                    fontWeight: "500",
                  }}
                >
                  Events Pending
                </h1>
                <h1
                  style={{
                    fontSize: "100px",
                    marginLeft: "20px",
                    color: "white",
                    fontWeight: "600",
                  }}
                >
                  3
                </h1>
              </div>
              <div className="box-content">
                <img src="./images/mountain.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBody;
