import { ADD_TODO, TOGGLE_TODO, SET_ALL_COMPLETED } from "./actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case SET_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: action.payload,
        })),
      };

    default:
      return state;
  }
};

export default todoReducer;
