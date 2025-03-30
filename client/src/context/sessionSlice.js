import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSessions = createAsyncThunk("sessions/fetchSessions", async () => {
  const response = await axios.get("/api/sessions");
  return response.data;
});

const sessionSlice = createSlice({
  name: "sessions",
  initialState: { items: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSessions.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      });
  },
});

export default sessionSlice.reducer;
