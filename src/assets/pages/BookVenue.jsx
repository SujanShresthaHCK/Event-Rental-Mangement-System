// BookVenue.js
import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import FixedButton from "../components/FixedButton/FixedButton";
import Form from "../components/Form/Form";
import HallSelection from "../components/HallSelection/HallSelection";

const BookVenue = () => {
  const [showForm, setShowForm] = useState(true);

  const handleBackClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Nav />
      <FixedButton />
      {showForm ? (
        <Form toggle={() => setShowForm(false)} />
      ) : (
        <HallSelection onBack={handleBackClick} />
      )}
    </div>
  );
};

export default BookVenue;
