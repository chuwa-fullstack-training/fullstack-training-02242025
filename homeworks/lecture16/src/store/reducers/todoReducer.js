const initialState = {
  todos: [],
  inputValue: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
        inputValue: "",
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "MARK_ALL_DONE":
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
