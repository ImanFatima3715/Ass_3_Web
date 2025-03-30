import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const SessionCalendar = ({ sessions }) => {
  const events = sessions.map((session) => ({
    title: session.tutorName,
    start: new Date(session.date),
    end: new Date(session.date),
  }));

  return <Calendar localizer={localizer} events={events} style={{ height: 500 }} />;
};

export default SessionCalendar;
