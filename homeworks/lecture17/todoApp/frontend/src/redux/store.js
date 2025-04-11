import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import errorSlice from "./errorSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    error: errorSlice
  },
  devTools: true,
});
