import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../context/reviewSlice";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ tutorId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.items);

  useEffect(() => {
    dispatch(fetchReviews(tutorId));
  }, [dispatch, tutorId]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Student Reviews</h3>
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewItem key={review._id} review={review} />)
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
