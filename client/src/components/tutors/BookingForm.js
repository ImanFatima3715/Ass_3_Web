import React, { useState } from "react";
import axios from "axios";

const BookingForm = ({ selectedSlot }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "online",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert("Please select a time slot.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/bookings", {
        ...formData,
        selectedSlot,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Booking failed. Try again.");
    }
  };

  return (
    <form className="bg-white shadow-md p-4 rounded" onSubmit={handleSubmit}>
      <label className="block">Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} className="border p-2 w-full" required />

      <label className="block mt-2">Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 w-full" required />

      <label className="block mt-2">Session Type:</label>
      <select name="sessionType" value={formData.sessionType} onChange={handleChange} className="border p-2 w-full">
        <option value="online">Online</option>
        <option value="in-person">In-Person</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 w-full">Book Session</button>
    </form>
  );
};

export default BookingForm;
