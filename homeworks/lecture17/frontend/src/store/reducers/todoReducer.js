const initialState = {
  todos: [],
  inputValue: "",
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        todos: action.payload.todos,
        loading: false,
      };

    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload._id,
            todo: action.payload.title,
            done: action.payload.status === "completed",
          },
        ],
        inputValue: "",
        loading: false,
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload._id ? { ...todo, done: !todo.done } : todo
        ),
        loading: false,
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        loading: false,
      };

    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };

    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default todoReducer;
