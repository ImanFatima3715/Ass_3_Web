import React, { useState } from "react";
import BookingForm from "../../components/tutors/BookingForm";
import BookingCalendar from "../../components/tutors/BookingCalendar";

const TutorBooking = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Book a Session</h2>
      <BookingCalendar setSelectedSlot={setSelectedSlot} />
      <BookingForm selectedSlot={selectedSlot} />
    </div>
  );
};

export default TutorBooking;
