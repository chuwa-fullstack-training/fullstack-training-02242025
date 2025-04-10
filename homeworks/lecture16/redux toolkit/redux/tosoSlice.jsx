import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setAllCompleted: (state, action) => {
      state.todos.forEach((todo) => {
        todo.completed = action.payload;
      });
    },
  },
});

export const { addTodo, toggleTodo, setAllCompleted } = todoSlice.actions;
export default todoSlice.reducer;
