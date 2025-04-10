export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED,
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});
