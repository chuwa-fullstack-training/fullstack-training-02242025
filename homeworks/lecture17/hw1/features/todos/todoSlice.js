
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'http://localhost:5000/api/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get(api);
  return res.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const res = await axios.post(api, { text });
  return res.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
  const res = await axios.put(`${api}/${id}/toggle`);
  return res.data;
});

export const clearCompleted = createAsyncThunk('todos/clearCompleted', async () => {
  await axios.delete(`${api}/clear-completed`);
  return;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(t => t._id === action.payload._id);
        if (index > -1) state.items[index] = action.payload;
      })
      .addCase(clearCompleted.fulfilled, state => {
        state.items = state.items.filter(todo => !todo.completed);
      });
  },
});

export default todosSlice.reducer;
