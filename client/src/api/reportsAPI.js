import axios from "axios";

const API_URL = "http://localhost:5000/api/reports";

export const fetchReports = async () => {
  try {
    const response = await axios.get(`${API_URL}/dashboard`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reports:", error);
    throw error;
  }
};
