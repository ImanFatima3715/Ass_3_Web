import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TutorDashboard from "./pages/TutorDashboard";

function App() {
  const token = localStorage.getItem("token"); // Retrieve stored authentication token

  return (
    <Router>
      <Routes>
        <Route path="/tutor-dashboard" element={<TutorDashboard token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;
