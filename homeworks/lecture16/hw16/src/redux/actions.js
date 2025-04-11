// Action Types
export const ADD_TODO = "ADDTODO";
export const UPDATE_TODO = "UPDATETODOS";
export const MARK_ALL = "MARKALL";
export const CLEAR_ALL_DONE = "CLEARALLDONE";

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const updateTodo = (index) => ({
  type: UPDATE_TODO,
  payload: index,
});

export const markAll = () => ({
  type: MARK_ALL,
});

export const clearAllDone = () => ({
  type: CLEAR_ALL_DONE,
});
