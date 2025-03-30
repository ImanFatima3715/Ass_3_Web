import axios from "axios";

const API_URL = "http://localhost:5000/api/tutorSessions";

// Get all sessions for a tutor
export const fetchTutorSessions = async (token) => {
  const response = await axios.get(`${API_URL}/sessions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Accept/Decline a session
export const updateSessionStatus = async (sessionId, status, token) => {
  await axios.put(`${API_URL}/sessions/status`, { sessionId, status }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Mark session as completed
export const completeSession = async (sessionId, token) => {
  await axios.put(`${API_URL}/sessions/complete`, { sessionId }, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Fetch earnings summary
export const fetchEarnings = async (token) => {
  const response = await axios.get(`${API_URL}/earnings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
