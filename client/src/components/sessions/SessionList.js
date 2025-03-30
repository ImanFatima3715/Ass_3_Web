import React from "react";
import SessionItem from "./SessionItem";

const SessionList = ({ sessions }) => {
  return (
    <div>
      {sessions.length > 0 ? (
        sessions.map((session) => <SessionItem key={session._id} session={session} />)
      ) : (
        <p>No sessions found.</p>
      )}
    </div>
  );
};

export default SessionList;
