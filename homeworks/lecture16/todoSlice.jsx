import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    inputValue: "",
  },
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },

    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    markAllCompleted: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = true;
      });
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const {
  setInputValue,
  addTodo,
  toggleTodo,
  markAllCompleted,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
