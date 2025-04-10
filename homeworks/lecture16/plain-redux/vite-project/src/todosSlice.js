import { createSlice } from "@reduxjs/toolkit";

let nextId = 0;

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nextId++, text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    clearCompleted: (state) => {
      return state.filter((t) => !t.completed);
    },
    markAllCompleted: (state) => {
      state.forEach((t) => (t.completed = true));
    },
  },
});

export const { addTodo, toggleTodo, clearCompleted, markAllCompleted } =
  todosSlice.actions;

export default todosSlice.reducer;
