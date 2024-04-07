import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { useSnackbar } from "notistack";
import axios from "axios";
import { Link } from "react-router-dom";

const Checkout = ({ onBack }) => {
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = () => {
    setLoading(true);
    axios
      .get("http://localhost:9000/books?_sort=createdAt&_order=desc&_limit=1")
      .then((response) => {
        setLoading(false);
        const latestData = response.data.data.pop(); // Get the last element of the data array
        setEventData(latestData);
        const latestId = latestData._id;
        enqueueSnackbar("Event data retrieved successfully", {
          variant: "success",
        });

        updateDocument(latestId);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error retrieving event data", { variant: "error" });
        console.log(error);
      });
  };

  const updateDocument = (id) => {
    const data = {
      name,
      email,
      phoneNo,
      checkedOut: true,
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

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <section className="checkout-wrapper">
      <button className="backbtn" onClick={onBack}>
        ⬅ Back
      </button>
      <div className="checkout-container">
        <h1
          style={{ color: "#846330", fontWeight: "400", marginBottom: "20px" }}
        >
          Checkout
        </h1>
        <div className="personalinfo">
          <form action="" className="personalinfoForm">
            <h3>Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h3>Email</h3>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Phone Number</h3>
            <input
              type="text"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </form>
          <br />
          <div className="eventinfo">
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>Event Type:</b>{" "}
              {eventData.eventType}
            </p>
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>
                Function Days:
              </b>{" "}
              {eventData.days}
            </p>

            {eventData.days === "Single-Day" && (
              <>
                <p>
                  <b style={{ fontWeight: "400", color: "#846330" }}>Shift:</b>{" "}
                  {eventData.dayShift}
                </p>
                <p>
                  <b style={{ fontWeight: "400", color: "#846330" }}>
                    Event Date:
                  </b>{" "}
                  {formatDate(eventData.bookDate)}
                </p>
              </>
            )}

            {eventData.days !== "Single-Day" && (
              <>
                <p>
                  <b style={{ fontWeight: "400", color: "#846330" }}>
                    Start Date:
                  </b>{" "}
                  {formatDate(eventData.startDate)}
                </p>
                <p>
                  <b style={{ fontWeight: "400", color: "#846330" }}>
                    End Date:
                  </b>{" "}
                  {formatDate(eventData.endDate)}
                </p>
              </>
            )}

            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>
                Estimated Guests:
              </b>{" "}
              {eventData.estimatedGuests}
            </p>
            <br />
          </div>
          <div className="eventmanagement">
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>
                Selected Hall:
              </b>{" "}
              {eventData.hallName}
            </p>
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>Buffet:</b>{" "}
              {eventData.buffet}
            </p>{" "}
            <p>
              <br />
              <b style={{ fontWeight: "600", fontSize: "18px" }}>
                <b
                  style={{
                    fontWeight: "600",
                    color: "#846330",
                    fontSize: "18px",
                  }}
                >
                  Total:
                </b>{" "}
                Rs. {eventData.price}
              </b>
            </p>
            <button
              className="checkout"
              onClick={() => {
                handleCheckout();
                fetchEventData();
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <Link to="/home">
              <span
                className="close"
                onClick={handleCloseModal}
                style={{ cursor: "pointer" }}
              >
                &times;
              </span>
            </Link>

            <h2>Venue Added!</h2>
            <p>
              Your venue has been successfully added. Our team will get back to
              you for confirmation of the event
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
