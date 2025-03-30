import React from "react";
import TutorSessionList from "../components/tutor/TutorSessionList";
import EarningsDashboard from "../components/tutor/EarningsDashboard";
import TutorCalendar from "../components/tutor/TutorCalendar";

const TutorDashboard = ({ token }) => {
  return (
    <div>
      <h1>Welcome, Tutor!</h1>
      <TutorSessionList token={token} />
      <EarningsDashboard token={token} />
      <TutorCalendar token={token} />
    </div>
  );
};

export default TutorDashboard;
