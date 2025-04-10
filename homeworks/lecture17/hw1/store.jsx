import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
