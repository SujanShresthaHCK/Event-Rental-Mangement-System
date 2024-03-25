import React, { useState } from "react";
import "./Form.css";
import Datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const Form = () => {
  const [selectedDate, setDate] = useState(null);
  return (
    <section className="form-wrapper">
      <div className="head-line"></div>
      <div className="form-container">
        <h1
          style={{
            fontWeight: "600px",
            fontSize: "40px",
            textAlign: "center",
            color: "#846330",
            zIndex: "2",
            marginTop: "-12vh",
            marginBottom: "50px",
          }}
        >
          Book a Venue
        </h1>
        <div className="form-contents">
          <h1 style={{ color: "#846330", fontSize: "24px" }}>
            Personal Information
          </h1>
          <h1>Name*</h1>
          <input className="input-form" type="text" />
        </div>
        <div className="form-contents">
          <h1>Email*</h1>
          <input className="input-form" type="text" />
        </div>
        <div className="form-contents">
          <h1>Phone Number*</h1>
          <input className="input-form" type="text" />
        </div>
        <div className="form-contents">
          <h1 style={{ color: "#846330", fontSize: "24px" }}>
            Event Information
          </h1>
          <h1>Estimated Number of Guests*</h1>
          <input className="input-form" type="text" placeholder="Max. 1500" />
        </div>
        <div className="form-contents datepicker-container">
          <div className="date-con">
            <h2>Select Date</h2>
            <FaCalendarAlt className="calendar-icon" />
          </div>

          <div className="datepicker-content">
            <Datepicker
              selected={selectedDate}
              onChange={(date) => setDate(date)}
              className="custom-datepicker"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
