import {createSlice} from '@reduxjs/toolkit';
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
        getTasksStart: (state) => {
            state.loading = true;
            state.error = null;
          },
          getTasksSuccess: (state, action) => {
            state.items = action.payload;
            state.loading = false;
          },
          getTasksFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
          addTaskSuccess: (state, action) => {
            state.items.push(action.payload);
          },
          updateTaskSuccess: (state, action) => {
            const index = state.items.findIndex(task => task._id === action.payload._id);
            if (index !== -1) state.items[index] = action.payload;
          },
          deleteTaskSuccess: (state, action) => {
            state.items = state.items.filter(task => task._id !== action.payload);
          }
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


export const fetchTasks = () => async dispatch => {
    dispatch(getTasksStart());
    try {
      const res = await axios.get('/todos');
      dispatch(getTasksSuccess(res.data));
    } catch (err) {
      dispatch(getTasksFailure(err.message));
    }
  };
  
  export const createTask = (title) => async dispatch => {
    try {
      const res = await axios.post('/todos', { title });
      dispatch(addTaskSuccess(res.data));
    } catch (err) {
      alert(err.message);
    }
  };
  
  export const updateTask = (id, updatedFields) => async dispatch => {
    try {
      const res = await axios.put(`/todos/${id}`, updatedFields);
      dispatch(updateTaskSuccess(res.data));
    } catch (err) {
      alert(err.message);
    }
  };
  
  export const deleteTask = (id) => async dispatch => {
    try {
      await axios.delete(`/todos/${id}`);
      dispatch(deleteTaskSuccess(id));
    } catch (err) {
      alert(err.message);
    }
  };

