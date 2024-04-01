import React, { useState } from "react";
import Nav from "../components/Nav/Nav";
import FixedButton from "../components/FixedButton/FixedButton";
import HallSelection from "../components/HallSelection/HallSelection";
import Buffet from "../components/Buffet/Buffet";
import Checkout from "../components/Checkout/Checkout";

const BookVenue = () => {
  const [showBuffet, setShowBuffet] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBackClick = () => {
    if (showCheckout) {
      setShowBuffet(true);
      setShowCheckout(false);
    } else {
      setShowBuffet(false);
      setShowCheckout(false);
    }
  };

  const handleImageClick = () => {
    setShowBuffet(true);
    setShowCheckout(false);
  };

  const handleBuffetBackClick = () => {
    setShowBuffet(false);
    setShowCheckout(false);
  };

  const handleSelectClick = () => {
    setShowBuffet(false);
    setShowCheckout(true);
  };

  return (
    <div>
      <Nav />
      <FixedButton />
      {showBuffet ? (
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
