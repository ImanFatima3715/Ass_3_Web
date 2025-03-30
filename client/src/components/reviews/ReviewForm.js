import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitReview } from "../../context/reviewSlice";

const ReviewForm = ({ tutorId, sessionId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and a comment.");
      return;
    }

    dispatch(submitReview({ tutorId, sessionId, rating, comment }));
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded-md">
      <h3 className="text-lg font-semibold">Leave a Review</h3>
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
        <option value={0}>Select Rating</option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num} Stars</option>
        ))}
      </select>
      <label>Comment:</label>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
