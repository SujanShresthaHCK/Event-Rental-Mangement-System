import React, { useState } from "react";
import ConfirmationPage from "./ConfirmationPage";

function PendingEvents() {
  const [events, setEvents] = useState([
    { id: 1, eventName: "Birthday Party", hallName: "Hall A", date: "2023-03-12", minimum: 50 },
    { id: 2, eventName: "Wedding Reception", hallName: "Hall B", date: "2023-03-15", minimum: 100 },
    // Add more events as needed
  ]);

  const handleConfirm = (id) => {
    // Implement the logic to confirm the booking
    // For example, you can filter out the confirmed event from the events array
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleReject = (id) => {
    // Implement the logic to reject the booking
    // For example, you can remove the rejected event from the events array
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="pending-events">
      <h2>Pending Events</h2>
      {events.map((event) => (
        <ConfirmationPage key={event.id} event={event} onConfirm={() => handleConfirm(event.id)} onReject={() => handleReject(event.id)} />
      ))}
    </div>
  );
}

export default PendingEvents;