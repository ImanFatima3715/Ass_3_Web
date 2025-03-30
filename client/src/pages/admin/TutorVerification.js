import React, { useEffect, useState } from "react";
import axios from "../../api/adminApi";

const TutorVerification = () => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchPendingTutors();
  }, []);

  const fetchPendingTutors = async () => {
    try {
      const response = await axios.get("/admin/tutor-verification");
      setTutors(response.data);
    } catch (error) {
      console.error("Error fetching pending tutors", error);
    }
  };

  const handleApproval = async (tutorId) => {
    try {
      await axios.post(`/admin/tutor-verify/${tutorId}`, { status: "approved" });
      setTutors(tutors.filter((tutor) => tutor._id !== tutorId));
    } catch (error) {
      console.error("Error approving tutor", error);
    }
  };

  const handleRejection = async (tutorId) => {
    try {
      await axios.post(`/admin/tutor-verify/${tutorId}`, { status: "rejected" });
      setTutors(tutors.filter((tutor) => tutor._id !== tutorId));
    } catch (error) {
      console.error("Error rejecting tutor", error);
    }
  };

  return (
    <div>
      <h2>Pending Tutor Verifications</h2>
      <ul>
        {tutors.map((tutor) => (
          <li key={tutor._id}>
            <h3>{tutor.name}</h3>
            <p>Subjects: {tutor.subjects.join(", ")}</p>
            <button onClick={() => handleApproval(tutor._id)}>Approve</button>
            <button onClick={() => handleRejection(tutor._id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorVerification;
