import {
    FETCH_TODOS_REQUEST,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO_REQUEST,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS,
    UPDATE_TODO_FAILURE
  } from '../actions/todoActions';
  
  const initialState = {
    items: [],
    loading: false,
    error: null,
    addingTodo: false,
    addError: null,
    updatingTodo: false,
    updateError: null
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TODOS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case FETCH_TODOS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload
        };
      case FETCH_TODOS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case ADD_TODO_REQUEST:
        return {
          ...state,
          addingTodo: true,
          addError: null
        };
      case ADD_TODO_SUCCESS:
        return {
          ...state,
          addingTodo: false,
          // We'll fetch the todos again after adding, so no need to update items here
        };
      case ADD_TODO_FAILURE:
        return {
          ...state,
          addingTodo: false,
          addError: action.payload
        };
      case UPDATE_TODO_REQUEST:
        return {
          ...state,
          updatingTodo: true,
          updateError: null
        };
      case UPDATE_TODO_SUCCESS:
        return {
          ...state,
          updatingTodo: false,
          items: state.items.map(todo => 
            todo._id === action.payload._id ? action.payload : todo
          )
        };
      case UPDATE_TODO_FAILURE:
        return {
          ...state,
          updatingTodo: false,
          updateError: action.payload
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  