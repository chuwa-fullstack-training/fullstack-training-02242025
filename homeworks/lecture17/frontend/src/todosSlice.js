import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001/api/todos";

// Thunks
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
});

export const addTodo = createAsyncThunk("todos/addTodo", async (task) => {
  const res = await axios.post(BASE_URL, { task });
  return res.data;
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // add
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      // delete
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todosSlice.reducer;
