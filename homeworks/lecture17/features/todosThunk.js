import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:4000/api/todos';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get(API);
  return res.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (text) => {
  const res = await axios.post(API, { text, done: false });
  return res.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
  const res = await axios.put(`${API}/${id}`);
  return res.data;
});

export const clearCompleted = createAsyncThunk('todos/clearCompleted', async () => {
  await axios.delete(`${API}/completed`);
});
