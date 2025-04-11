import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, done: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) todo.done = !todo.done;
    },
    markAllDone: (state) => {
      return state.map((todo) => ({ ...todo, done: true }));
    },
    clearCompleted: (state) => {
      return state.filter((todo) => !todo.done);
    },
  },
});

export const { addTodo, toggleTodo, markAllDone, clearCompleted } =
  todosSlice.actions;
export default todosSlice.reducer;
