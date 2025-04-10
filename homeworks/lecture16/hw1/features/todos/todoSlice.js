import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state[action.payload];
      if (todo) todo.completed = !todo.completed;
    },
    markAllCompleted: (state) => {
      return state.map(todo => ({ ...todo, completed: true }));
    },
    clearCompleted: (state) => {
      return state.filter(todo => !todo.completed);
    }
  },
});

export const { addTodo, toggleTodo, markAllCompleted, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;
