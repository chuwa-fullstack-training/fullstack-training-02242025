// src/features/todos/todoThunks.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// fetchTodos.js
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get('/api/todos');
   return res.data.todos;
});


export const addTodo = createAsyncThunk('todos/addTodo', async (title) => {
  const res = await axios.post('/todos', { title });
  return res.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
  const res = await axios.post(`/todos/${id}/update`);
  return res.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const res = await axios.post(`/todos/${id}/delete`);
  return { _id: id };
});
