const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };

    case "UPDATETODOS":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case "MARKALL":
      const allCompleted = state.todos.every((todo) => todo.completed);
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: !allCompleted,
        })),
      };

    case "CLEARALLDONE":
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: false,
        })),
      };

    default:
      return state;
  }
};
