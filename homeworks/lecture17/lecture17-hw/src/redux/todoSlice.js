import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/todos';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (title) => {
  const res = await axios.post(BASE_URL, { title });
  return res.data;
});
export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
    const res = await axios.put(`${BASE_URL}/toggle/${id}`);
    return res.data;
  });
  
  export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
  });
  const todoSlice = createSlice({
    name: 'todos',
    initialState: {
      list: [],
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getTodos.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getTodos.fulfilled, (state, action) => {
          state.loading = false;
          state.list = action.payload;
        })
        .addCase(getTodos.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(addTodo.fulfilled, (state, action) => {
          state.list.push(action.payload);
        })
        .addCase(toggleTodo.fulfilled, (state, action) => {
          const updated = action.payload;
          const index = state.list.findIndex((t) => t._id === updated._id);
          if (index !== -1) state.list[index] = updated;
        })
        .addCase(deleteTodo.fulfilled, (state, action) => {
          state.list = state.list.filter((t) => t._id !== action.payload);
        })
        .addCase(clearCompleted.fulfilled, (state, action) => {
            const ids = action.payload;
            state.list = state.list.filter(todo => !ids.includes(todo._id));
          });
    },
  });
  export const clearCompleted = createAsyncThunk('todos/clearCompleted', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const completedTodos = state.todos.list.filter(todo => todo.completed);
  
    await Promise.all(
      completedTodos.map(todo => axios.delete(`${BASE_URL}/${todo._id}`))
    );
  
    return completedTodos.map(todo => todo._id);
  });
  
  export default todoSlice.reducer;
  
  