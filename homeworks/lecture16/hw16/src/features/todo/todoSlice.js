import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    updateTodo: (state, action) => {
      const index = action.payload;
      if (state.todos[index]) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    markAll: (state) => {
      const allCompleted = state.todos.every((todo) => todo.completed);
      state.todos.forEach((todo) => {
        todo.completed = !allCompleted;
      });
    },
    clearAllDone: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = false;
      });
    },
  },
});

export const { addTodo, updateTodo, markAll, clearAllDone } =
  todosSlice.actions;
export default todosSlice.reducer;
