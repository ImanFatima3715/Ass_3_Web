import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch reviews for a tutor
export const fetchReviews = createAsyncThunk("reviews/fetchReviews", async (tutorId) => {
  const response = await axios.get(`/api/reviews/${tutorId}`);
  return response.data;
});

// Submit a new review
export const submitReview = createAsyncThunk("reviews/submitReview", async (reviewData) => {
  const response = await axios.post("/api/reviews", reviewData);
  return response.data;
});

const reviewSlice = createSlice({
  name: "reviews",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export default reviewSlice.reducer;
