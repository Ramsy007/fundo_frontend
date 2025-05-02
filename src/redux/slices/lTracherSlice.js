import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

export const lTracherSlice = createSlice({
  name: "loan-tracker",
  initialState,
  reducers: {
    changeTracker: (state, action) => {
      state.step = action.payload.step;
    },
  },
});

export const { changeTracker } = lTracherSlice.actions;
export default lTracherSlice.reducer;
