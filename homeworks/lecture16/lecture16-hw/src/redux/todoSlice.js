import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({ text: action.payload, done: false });
    },
    toggleTodo(state, action) {
      const todo = state.todos[action.payload];
      if (todo) {
        todo.done = !todo.done;
      }
    },
    markAllDone(state) {
      state.todos.forEach((todo) => (todo.done = true));
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.done);
    },
  },
});

export const { addTodo, toggleTodo, markAllDone, clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
