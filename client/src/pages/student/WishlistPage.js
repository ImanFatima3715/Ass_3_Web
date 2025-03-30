import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../context/wishlistSlice";

const WishlistPage = () => {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No tutors saved in wishlist.</p>
      ) : (
        <ul>
          {wishlist.map((tutor) => (
            <li key={tutor._id} className="flex justify-between items-center p-2 border rounded-md mb-2">
              <span>{tutor.name} - {tutor.subject}</span>
              <button
                onClick={() => dispatch(removeFromWishlist(tutor._id))}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage;
