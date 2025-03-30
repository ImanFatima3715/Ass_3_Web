import React from "react";

const ReviewItem = ({ review }) => {
  return (
    <div className="border p-3 my-2">
      <p><strong>Rating:</strong> {review.rating} ⭐</p>
      <p><strong>Comment:</strong> {review.comment}</p>
      <p className="text-gray-500 text-sm">By {review.studentName}</p>
    </div>
  );
};

export default ReviewItem;
