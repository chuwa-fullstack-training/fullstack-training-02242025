import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTasks.pending, (state)=>{
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTasks.fulfilled, (state, action)=>{
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(fetchTasks.rejected, (state, action)=>{
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(updateTask.fullfilled, (state, action)=>{
          const index = state.items.findIndex(task=>task.id === action.payload);
          state.items[index] = action.payload;
        })
        .addCase(deleteTasks.fullfilled, (state, action)=>{
          state.items = state.items.filter(task=>task.id !== action.payload);
        })
    }
});

export const {
    getTasksStart,
    getTasksSuccess,
    getTasksFailure,
    addTaskSuccess,
    updateTaskSuccess,
    deleteTaskSuccess
  } = taskSlice.actions;

export default taskSlice.reducer;


export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, thunkAPI) => {
    try{
      const res = await axios.get('/todos');
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const createTask = (
  'tasks/createTask',
  async (title, thunkAPI) => {
    try {
      const res = await axios.post('/todos', {title});
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const updateTask = (
  'tasks/updateTask',
   async ({id, updatedFields}, thunkAPI) => {
    try {
      const res = await axios.put(`/todos/${id}`, updatedFields);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
   }
);
  
export const deleteTask = (
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try{
      await axios.delete(`/todos/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);