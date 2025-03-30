import React, { useEffect, useState } from "react";
import { fetchEarnings } from "../../api/tutorApi";

const EarningsDashboard = ({ token }) => {
  const [earnings, setEarnings] = useState([]);

  useEffect(() => {
    fetchEarningsData();
  }, []);

  const fetchEarningsData = async () => {
    const data = await fetchEarnings(token);
    setEarnings(data);
  };

  return (
    <div>
      <h2>Earnings Overview</h2>
      {earnings.map((entry) => (
        <div key={entry._id}>
          <h4>{entry._id}</h4>
          <p>Total Earnings: ${entry.totalEarnings}</p>
          <p>Sessions Completed: {entry.totalSessions}</p>
        </div>
      ))}
    </div>
  );
};

export default EarningsDashboard;
