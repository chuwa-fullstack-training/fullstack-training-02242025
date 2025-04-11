import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: {},
  errors: {}
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.status = "pending"
    },
    fetchFail: (state) => {
      state.status = "failed"
    },
    setErrorMessage: (state, action) => {
      state.status = "success"
    },
    fetchTodos: (state, action) => {
      state.todos = action.payload
    },
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    updateTodo: (state, action) => {
      const index = action.payload.id;
      if (state.todos[index]) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    markAll: (state) => {
      const allCompleted = state.todos.every((todo) => todo.completed);
      state.todos.forEach((todo) => {
        todo.completed = !allCompleted;
      });
    },
    clearAllDone: (state) => {
      state.todos.forEach((todo) => {
        todo.completed = false;
      });
    },
  },
});

export const fetchTodosAsync = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      dispatch(fetchStart());
      const response = await fetch('/api');
      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message)
      }
      const data = await response.json();
      dispatch(fetchSuccess());
      dispatch(fetchTodos(data.todos));
      return data; // Return data if request is successful
    } catch (error) {
      dispatch(fetchFail());
      dispatch(setErrorMessage(e.message));// Catch network errors
    }
  }
);


export const fetchAddTodosAsync = createAsyncThunk(
  'todos/fetchTodos',
  async (newTodo, { dispatch, rejectWithValue }) => {
    try {
      dispatch(fetchStart());
      const response = await fetch('/api/todos' {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          todo: newTodo,
          checked: false
        })
      });
      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message)
      }
      const data = await response.json();
      dispatch(fetchSuccess());
      dispatch(addTodo(data));
      return data;
    } catch (error) {
      dispatch(fetchFail());
      dispatch(setErrorMessage(e.message));// Catch network errors
    }
  }
);



export const fetchUpdateTodosAsync = createAsyncThunk(
  "todos/fetchUpdateTodos",
  async ({ id, updatedData }, { dispatch, rejectWithValue }) => { // `updatedData` will include the fields to update
    try {
      dispatch(fetchStart());

      const response = await fetch(`/api/todolists/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData) // Send updated data in the body (e.g., toggling `checked`)
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const data = await response.json();
      dispatch(updateTodo({ id, updatedData: data })); // Update the todo in the store
      return data; // Return data on success
    } catch (error) {
      dispatch(fetchFail(error.message)); // Handle error if the request fails
      return rejectWithValue(error.message); // Handle error in the async flow
    }
  }
);
