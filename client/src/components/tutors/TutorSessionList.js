import React, { useEffect, useState } from "react";
import { fetchTutorSessions, updateSessionStatus, completeSession } from "../../api/tutorApi";

const TutorSessionList = ({ token }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const data = await fetchTutorSessions(token);
    setSessions(data);
  };

  const handleUpdateStatus = async (sessionId, status) => {
    await updateSessionStatus(sessionId, status, token);
    fetchSessions();  // Refresh list after update
  };

  const handleCompleteSession = async (sessionId) => {
    await completeSession(sessionId, token);
    fetchSessions();
  };

  return (
    <div>
      <h2>Your Sessions</h2>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>
            <strong>{session.subject}</strong> with {session.studentId.name} on {new Date(session.sessionDate).toDateString()}  
            - Status: {session.status}
            {session.status === "pending" && (
              <>
                <button onClick={() => handleUpdateStatus(session._id, "accepted")}>Accept</button>
                <button onClick={() => handleUpdateStatus(session._id, "declined")}>Decline</button>
              </>
            )}
            {session.status === "accepted" && (
              <button onClick={() => handleCompleteSession(session._id)}>Mark as Completed</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorSessionList;
