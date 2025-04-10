export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_ALL_COMPLETED = "SET_ALL_COMPLETED";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const setAllCompleted = (completed) => {
  return {
    type: SET_ALL_COMPLETED,
    payload: completed,
  };
};
