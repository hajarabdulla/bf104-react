import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const { addTodo } = todoSlicer.actions;
export default todoSlicer.reducer;
