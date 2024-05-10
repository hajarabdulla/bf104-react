import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import todoSlice from "./features/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
});
