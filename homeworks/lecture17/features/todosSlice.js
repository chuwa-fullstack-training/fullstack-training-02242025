import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, toggleTodo, clearCompleted } from './todosThunk';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, state => { state.loading = true })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(clearCompleted.fulfilled, (state) => {
        state.items = state.items.filter(todo => !todo.done);
      });
  }
});

export default todosSlice.reducer;
