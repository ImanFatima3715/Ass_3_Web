import React from "react";

const TutorCard = ({ tutor }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{tutor.name}</h2>
      <p><strong>Subjects:</strong> {tutor.subjects.join(", ")}</p>
      <p><strong>Location:</strong> {tutor.location}</p>
      <p><strong>Price:</strong> ${tutor.price}/hr</p>
      <p><strong>Rating:</strong> {tutor.rating} ⭐</p>
      <p><strong>Availability:</strong> {tutor.availability.join(", ")}</p>
    </div>
  );
};

export default TutorCard;
