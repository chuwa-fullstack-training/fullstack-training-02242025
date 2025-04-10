// redux/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  nextId: 1,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload.trim();
      if (text) {
        state.todos.push({
          id: state.nextId,
          value: text,
          done: false,
        });
        state.nextId += 1;
      }
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    checkAll: (state) => {
      state.todos.forEach(todo => {
        todo.done = true;
      });
    },
    clearAll: (state) => {
      state.todos.forEach(todo => {
        todo.done = false;
      });
    }
  }
});

export const { addTodo, toggleTodo, checkAll, clearAll } = todoSlice.actions;
export default todoSlice.reducer;
