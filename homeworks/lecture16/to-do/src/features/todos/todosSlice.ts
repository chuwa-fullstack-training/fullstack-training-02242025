import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = {
  items: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<string>) => {
      const text = action.payload.trim();
      if (text) {
        state.items.push({
          id: Date.now(),
          text: text,
          completed: false,
        });
      }
    },
    // Toggle a todo's completed status
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Toggle all todos to a specific completed state
    toggleAllTodos: (state) => {
      const allComplete = state.items.length > 0 && state.items.every((todo) => todo.completed);
      state.items.forEach((todo) => {
        todo.completed = !allComplete;
      });
    },
    // Clear all completed todos
    clearCompletedTodos: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },
  },
});

// Export actions
export const { addTodo, toggleTodo, toggleAllTodos, clearCompletedTodos } = todosSlice.actions;

// Selectors
export const selectTodos = (state: RootState) => state.todos.items;
export const selectRemainingCount = (state: RootState) => 
  state.todos.items.filter(todo => !todo.completed).length;
export const selectAllComplete = (state: RootState) => 
  state.todos.items.length > 0 && state.todos.items.every(todo => todo.completed);

export default todosSlice.reducer;