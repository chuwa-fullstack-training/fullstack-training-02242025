import React from "react";

function TodoList(props) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => props.handleChange("allDone")}
          checked={props.list.every((todo) => todo.completed)}
        />
        Mark All as Done
      </label>
      {props.list.map((todo, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => props.handleChange(index)}
            />
            {todo.text}
          </label>
        </div>
      ))}
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      remainingCount: 0,
    };
    this.inputRef = React.createRef();
  }

  // Add a new todo
  addTodo = (event) => {
    if (event.key === "Enter" && this.inputRef.current.value.trim() !== "") {
      const cur_input = this.inputRef.current.value; // Local variable
      const newTodo = { text: cur_input, completed: false };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        remainingCount: prevState.remainingCount + 1,
      }));
      this.inputRef.current.value = "";
    }
  };

  // Handle changes when a user checks/unchecks a todo or the "Mark All as Done" checkbox
  handleChange = (index) => {
    if (index === "allDone") {
      // Check if all todos are completed or not
      if (
        this.state.todos.filter((todo) => todo.completed).length ===
        this.state.todos.length
      ) {
        // If all are marked as completed, uncheck all
        this.setState((prevState) => {
          const updatedTodos = prevState.todos.map((todo) => ({
            ...todo,
            completed: false,
          }));
          return {
            todos: updatedTodos,
            remainingCount: updatedTodos.length,
          };
        });
      } else {
        // If not all are marked as completed, check all
        this.setState((prevState) => {
          const updatedTodos = prevState.todos.map((todo) => ({
            ...todo,
            completed: true,
          }));
          return { todos: updatedTodos, remainingCount: 0 };
        });
      }
    } else {
      // Toggle individual todo completion
      this.setState((prevState) => {
        const updatedTodos = prevState.todos.map((todo, i) =>
          i === index ? { ...todo, completed: !todo.completed } : todo
        );
        const completedTodos = updatedTodos.filter((todo) => todo.completed);
        return {
          todos: updatedTodos,
          remainingCount: updatedTodos.length - completedTodos.length,
        };
      });
    }
  };

  render() {
    return (
      <div className="HW1">
        <div>Todos-ReactJs</div>
        <input
          name="todo"
          type="text"
          ref={this.inputRef}
          onKeyDown={this.addTodo}
          placeholder="Type a todo and hit Enter"
        />
        <div>{this.state.remainingCount} remaining</div>
        <TodoList list={this.state.todos} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
