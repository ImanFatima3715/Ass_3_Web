import React, { useEffect, useState } from "react";
import axios from "axios";
import ChartComponent from "./ChartComponent";

const ReportsDashboard = () => {
  const [reports, setReports] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reports/dashboard")
      .then((response) => setReports(response.data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div>
      <h2>Admin Reports Dashboard</h2>

      {reports ? (
        <div>
          <ChartComponent title="Popular Subjects" data={reports.subjectPopularity} />
          <ChartComponent title="Session Completion Rate" data={reports.sessionCompletion} />
          <ChartComponent title="User Growth" data={reports.userGrowth} />
          <ChartComponent title="Platform Usage by City" data={reports.cityUsage} />
        </div>
      ) : (
        <p>Loading reports...</p>
      )}
    </div>
  );
};

export default ReportsDashboard;
