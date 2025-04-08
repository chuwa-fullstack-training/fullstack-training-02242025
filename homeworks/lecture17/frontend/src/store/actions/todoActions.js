import {
  fetchTodos,
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../../services/api";

// Action Types
export const TODO_ACTIONS = {
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

// Action Creators
export const loadTodos = () => async (dispatch) => {
  dispatch({ type: TODO_ACTIONS.SET_LOADING, payload: true });
  try {
    const todos = await fetchTodos();
    dispatch({ type: TODO_ACTIONS.SET_TODOS, payload: todos });
  } catch (error) {
    console.error("Error loading todos:", error);
    dispatch({
      type: TODO_ACTIONS.SET_ERROR,
      payload: "Failed to load todos. Please check your server connection.",
    });
  }
};

export const createTodo = (text) => async (dispatch) => {
  dispatch({ type: TODO_ACTIONS.SET_LOADING, payload: true });
  try {
    const newTodo = await addTodo(text);
    dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: newTodo });
  } catch (error) {
    console.error("Error adding todo:", error);
    dispatch({
      type: TODO_ACTIONS.SET_ERROR,
      payload: "Failed to add todo. Please try again.",
    });
  }
};

export const toggleTodoStatus = (id) => async (dispatch) => {
  dispatch({ type: TODO_ACTIONS.SET_LOADING, payload: true });
  try {
    const updatedTodo = await toggleTodo(id);
    dispatch({ type: TODO_ACTIONS.TOGGLE_TODO, payload: updatedTodo });
  } catch (error) {
    console.error("Error toggling todo:", error);
    dispatch({
      type: TODO_ACTIONS.SET_ERROR,
      payload: "Failed to toggle todo status. Please try again.",
    });
  }
};

export const removeTodo = (id) => async (dispatch) => {
  dispatch({ type: TODO_ACTIONS.SET_LOADING, payload: true });
  try {
    await deleteTodo(id);
    dispatch({ type: TODO_ACTIONS.DELETE_TODO, payload: id });
  } catch (error) {
    console.error("Error deleting todo:", error);
    dispatch({
      type: TODO_ACTIONS.SET_ERROR,
      payload: "Failed to delete todo. Please try again.",
    });
  }
};

export const setInputValue = (value) => ({
  type: TODO_ACTIONS.SET_INPUT_VALUE,
  payload: value,
});

export const clearError = () => ({
  type: TODO_ACTIONS.SET_ERROR,
  payload: null,
});
