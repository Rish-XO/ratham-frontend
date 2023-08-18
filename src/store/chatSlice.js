import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    name: "",
    age: "",
  },
  reducers: {
    nameAdder(state, action) {
      const data = action.payload;
      console.log(data);
      state.name = data;
    },
    ageAdder(state, action) {
      const data = action.payload;
      console.log(data);
      state.age = data;
    },
  },
});

export const { nameAdder, ageAdder } = chatSlice.actions;

export default chatSlice.reducer;
