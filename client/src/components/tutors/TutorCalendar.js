import React, { useEffect, useState } from "react";
import { fetchTutorSessions } from "../../api/tutorApi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const TutorCalendar = ({ token }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const data = await fetchTutorSessions(token);
    setSessions(data);
  };

  const getSessionDates = () => {
    return sessions.map((session) => new Date(session.sessionDate));
  };

  return (
    <div>
      <h2>Upcoming Sessions</h2>
      <Calendar tileClassName={({ date }) =>
        getSessionDates().some((d) => d.toDateString() === date.toDateString()) ? "highlight" : null
      } />
    </div>
  );
};

export default TutorCalendar;
