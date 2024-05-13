import React from "react";

function ConfirmationPage({ event, onConfirm, onReject }) {
  return (
    <main className="confirmation-page">
      <h2>Event Confirmation</h2>
      <p>Event Name: {event.eventName}</p>
      <p>Hall Name: {event.hallName}</p>
      <p>Date: {event.date}</p>
      <p>Minimum: {event.minimum}</p>
      <button onClick={() => onConfirm(event.id)}>Confirm</button>
      <button onClick={() => onReject(event.id)}>Reject</button>
    </main>
  );
}

export default ConfirmationPage;