import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const res = await fetch('http://localhost:5400/api/todos');
  return await res.json();
});

export const addTask = createAsyncThunk('tasks/addTask', async (title) => {
  const res = await fetch('http://localhost:5400/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todo: title })
  });
  return await res.json();
});

export const toggleTask = createAsyncThunk('tasks/toggleTask', async (id) => {
  const res = await fetch(`http://localhost:5400/api/todos/${id}`, {
    method: 'PUT'
  });
  return await res.json();
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await fetch(`http://localhost:5400/todos/${id}`, { method: 'DELETE' });
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    clearCompleted: (state) => {
      return state.filter(t => !t.completed);
    },
    checkAll: (state) => {
      const allCompleted = state.every(t => t.completed);
      return state.map(t => ({ ...t, completed: !allCompleted }));
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (_, action) => action.payload)
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        const task = state.find(t => t._id === action.payload._id);
        if (task) task.completed = action.payload.completed;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter(t => t._id !== action.payload);
      });
  }
});

export const { clearCompleted, checkAll } = taskSlice.actions;
export default taskSlice.reducer;
