import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state[action.payload];
      if (task) task.completed = !task.completed;
    },
    checkAll: (state) => {
      const allDone = state.every(task => task.completed);
      return state.map(task => ({ ...task, completed: !allDone }));
    },
    clearCompleted: (state) => {
      return state.filter(task => !task.completed);
    }
  }
});

export const { addTask, toggleTask, checkAll, clearCompleted } = taskSlice.actions;
export default taskSlice.reducer;
