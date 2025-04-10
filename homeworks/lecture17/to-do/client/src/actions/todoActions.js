import axios from 'axios';

// Action Types
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const UPDATE_TODO_REQUEST = 'UPDATE_TODO_REQUEST';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE';

// Action Creators with Thunk
export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  
  try {
    const response = await axios.get('/api/todos');
    // Checking if response contains todos in a property or directly
    // Adjust based on your actual API response structure
    const todos = response.data.todos || response.data;
    dispatch({
      type: FETCH_TODOS_SUCCESS,
      payload: todos
    });
  } catch (error) {
    dispatch({
      type: FETCH_TODOS_FAILURE,
      payload: error.message
    });
  }
};

export const addTodo = (todoText) => async (dispatch) => {
  dispatch({ type: ADD_TODO_REQUEST });
  
  try {
    await axios.post('/api/todos', { todo: todoText });
    dispatch({ type: ADD_TODO_SUCCESS });
    // Fetch the updated list of todos
    dispatch(fetchTodos());
  } catch (error) {
    dispatch({
      type: ADD_TODO_FAILURE,
      payload: error.message
    });
  }
};

export const updateTodo = (id, updates) => async (dispatch) => {
  dispatch({ type: UPDATE_TODO_REQUEST });
  
  try {
    const response = await axios.put(`/api/todos/${id}`, updates);
    dispatch({
      type: UPDATE_TODO_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TODO_FAILURE,
      payload: error.message
    });
  }
};