import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";

const Checkout = ({ onBack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <p>
            <b style={{ fontWeight: "400", color: "#846330" }}>Name:</b> Sujan
            Shrestha
          </p>
          <p>
            <b style={{ fontWeight: "400", color: "#846330" }}>Email</b>{" "}
            sujanstha.0122@gmail.com
          </p>
          <p>
            {" "}
            <b style={{ fontWeight: "400", color: "#846330" }}>
              Phone Number:
            </b>{" "}
            9808000574
          </p>
          <br />
          <div className="eventinfo">
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>Event Type:</b>{" "}
              Aniversary
            </p>
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>Event Date:</b>{" "}
              30/03/2024
            </p>
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>Shift:</b>{" "}
              Whole Day
            </p>
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>
                Estimated Guests:
              </b>{" "}
              879
            </p>
            <br />
          </div>
          <div className="eventmanagement">
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>
                Selected Hall:
              </b>{" "}
              Hall Kathmandu (Capacity 600 - 1000)
            </p>
            <p>
              <b style={{ fontWeight: "400", color: "#846330" }}>Buffet:</b>{" "}
              Golden Package
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
                Rs. 2781000
              </b>
            </p>
            <button className="checkout" onClick={handleCheckout}>
              Check Out
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

            <h2>Venue Booked!</h2>
            <p>Your venue has been successfully booked.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
