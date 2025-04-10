import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const addTodoAsync = createAsyncThunk('todos/addTodo', async (text, { getState }) => {
    const response = await axios.post(API_URL, { todo: text });
    return response.data;
  });

export const toggleTodoAsync = createAsyncThunk('todos/toggleTodo', async (id) => {
  const response = await axios.put(`${API_URL}/${id}`);
  return response.data;
});

export const checkAllAsync = createAsyncThunk('todos/checkAll', async () => {
  const response = await axios.put(`${API_URL}/check/all`);
  return response.data;
});

export const clearAllAsync = createAsyncThunk('todos/clearAll', async () => {
  const response = await axios.put(`${API_URL}/clear/all`);
  return response.data;
});

const initialState = {
  todos: [],
  status: 'idle',
  error: null
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos.push(action.payload); 
      })
      
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTodoAsync.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        state.todos = state.todos.map(todo => 
          todo._id === updatedTodo._id ? updatedTodo : todo
        );
      })
      .addCase(checkAllAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(clearAllAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  }
});

export const selectAllTodos = (state) => state.todos.todos || [];
export const getTodosStatus = (state) => state.todos.status;
export const getTodosError = (state) => state.todos.error;

export default todoSlice.reducer;