// src/features/todos/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from './todoThunks';
const initialState = {
  items: [],
  loading: false,
  error: null,
};
const todoSlice = createSlice({
  name: 'todos',
  initialState,  
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const updated = state.items.find(t => t._id === action.payload._id);
        if (updated) updated.completed = action.payload.completed;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(t => t._id !== action.payload._id);
      });
  },
});

export default todoSlice.reducer;
export const selectTodos = state => state.todos.items;
export const selectLoading = state => state.todos.loading;
export const selectError = state => state.todos.error;
export const selectTodoById = (state, id) => state.todos.items.find(t => t._id === id);