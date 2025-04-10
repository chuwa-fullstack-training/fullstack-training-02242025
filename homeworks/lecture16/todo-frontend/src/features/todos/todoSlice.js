import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('/');
  return response.data.todos;
});

export const addTodoAsync = createAsyncThunk('todos/addTodo', async (title) => {
  const response = await axios.post('/todos', { title });
  return response.data.todo;
});

export const toggleTodoAsync = createAsyncThunk('todos/toggleTodo', async (id) => {
  const response = await axios.post(`/todos/${id}/update`);
  return response.data.todo;
});

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.post(`/todos/${id}/delete`);
  return id;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (_, action) => action.payload)
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.findIndex(todo => todo._id === action.payload._id);
        if (index >= 0) state[index] = action.payload;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        return state.filter(todo => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;