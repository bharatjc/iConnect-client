import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userInfo } = userSlice.actions;

export default userSlice.reducer;
