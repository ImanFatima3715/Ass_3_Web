import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../context/wishlistSlice";

const WishlistButton = ({ tutor }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isSaved = wishlist.some((item) => item._id === tutor._id);

  const handleWishlist = () => {
    if (isSaved) {
      dispatch(removeFromWishlist(tutor._id));
    } else {
      dispatch(addToWishlist(tutor));
    }
  };

  return (
    <button
      onClick={handleWishlist}
      className={`px-3 py-1 rounded-md ${isSaved ? "bg-red-500 text-white" : "bg-gray-200"}`}
    >
      {isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
    </button>
  );
};

export default WishlistButton;
