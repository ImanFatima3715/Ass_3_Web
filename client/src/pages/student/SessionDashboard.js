import React, { useState, useEffect } from "react";
import SessionList from "../../components/sessions/SessionList";
import SessionCalendar from "../../components/sessions/SessionCalendar";
import { useDispatch, useSelector } from "react-redux";
import { fetchSessions } from "../../context/sessionSlice";

const SessionDashboard = () => {
  const [view, setView] = useState("list");
  const dispatch = useDispatch();
  const sessions = useSelector((state) => state.sessions.items);

  useEffect(() => {
    dispatch(fetchSessions());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Session Management</h2>
      <button onClick={() => setView("list")}>List View</button>
      <button onClick={() => setView("calendar")}>Calendar View</button>
      {view === "list" ? <SessionList sessions={sessions} /> : <SessionCalendar sessions={sessions} />}
    </div>
  );
};

export default SessionDashboard;
