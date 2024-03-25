import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import FixedButton from "../components/FixedButton/FixedButton";
import Form from "../components/Form/Form";
import HallSelection from "../components/HallSelection/HallSelection";
import Buffet from "../components/Buffet/Buffet";
import Checkout from "../components/Checkout/Checkout";

const BookVenue = () => {
  const [showForm, setShowForm] = useState(true);
  const [showBuffet, setShowBuffet] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBackClick = () => {
    if (showCheckout) {
      setShowForm(false);
      setShowBuffet(true);
      setShowCheckout(false);
    } else {
      setShowForm(true);
      setShowBuffet(false);
      setShowCheckout(false);
    }
  };

  const handleImageClick = () => {
    setShowForm(false);
    setShowBuffet(true);
    setShowCheckout(false);
  };

  const handleBuffetBackClick = () => {
    setShowForm(false);
    setShowBuffet(false);
    setShowCheckout(false);
  };

  const handleSelectClick = () => {
    setShowForm(false);
    setShowBuffet(false);
    setShowCheckout(true);
  };

  return (
    <div>
      <Nav />
      <FixedButton />
      {showForm ? (
        <Form toggle={() => setShowForm(false)} />
      ) : showBuffet ? (
        <Buffet onBack={handleBuffetBackClick} onSelect={handleSelectClick} />
      ) : showCheckout ? (
        <Checkout onBack={handleBackClick} />
      ) : (
        <HallSelection
          onBack={handleBackClick}
          onImageClick={handleImageClick}
        />
      )}
    </div>
  );
};

export default BookVenue;
