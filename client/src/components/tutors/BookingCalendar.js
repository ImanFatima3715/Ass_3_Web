import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingCalendar = ({ setSelectedSlot }) => {
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bookings/slots")
      .then((response) => setAvailableSlots(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold">Select a Time Slot:</h3>
      <div className="grid grid-cols-3 gap-2">
        {availableSlots.map((slot) => (
          <button
            key={slot}
            className="p-2 bg-gray-200 rounded"
            onClick={() => setSelectedSlot(slot)}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingCalendar;
