import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ title, data }) => {
  if (!data) return <p>Loading {title}...</p>;

  const chartData = {
    labels: data.map((item) => item._id),
    datasets: [
      {
        label: title,
        data: data.map((item) => item.count),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return (
    <div>
      <h3>{title}</h3>
      <Bar data={chartData} />
    </div>
  );
};

export default ChartComponent;
