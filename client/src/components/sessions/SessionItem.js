import React from "react";

const SessionItem = ({ session }) => {
  return (
    <div className="border p-3 my-2">
      <h3 className="text-lg font-semibold">{session.tutorName}</h3>
      <p>Date: {new Date(session.date).toLocaleDateString()}</p>
      <p>Time: {session.time}</p>
      <p>Mode: {session.mode}</p>
    </div>
  );
};

export default SessionItem;
