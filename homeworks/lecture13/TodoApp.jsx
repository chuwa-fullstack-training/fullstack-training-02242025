import React from "react";

function TodoList(props) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={() => props.handleChange("allDone")}
          checked={props.list.length > 0 && props.list.every((todo) => todo.completed)}
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

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      remainingCount: 0,
    };
    this.inputRef = React.createRef();
  }

  addTodo = (event) => {
    if (event.key === "Enter" && this.inputRef.current.value.trim() !== "") {
      const text = this.inputRef.current.value.trim();
      const newTodo = { text, completed: false };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        remainingCount: prevState.remainingCount + 1,
      }));
      this.inputRef.current.value = "";
    }
  };

  handleChange = (index) => {
    if (index === "allDone") {
      const allCompleted = this.state.todos.every((todo) => todo.completed);
      const updatedTodos = this.state.todos.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      }));
      const remaining = updatedTodos.filter((todo) => !todo.completed).length;
      this.setState({ todos: updatedTodos, remainingCount: remaining });
    } else {
      const updatedTodos = this.state.todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      );
      const remaining = updatedTodos.filter((todo) => !todo.completed).length;
      this.setState({ todos: updatedTodos, remainingCount: remaining });
    }
  };

  clearCompleted = () => {
    const activeTodos = this.state.todos.filter((todo) => !todo.completed);
    this.setState({
      todos: activeTodos,
      remainingCount: activeTodos.length,
    });
  };

  render() {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial" }}>
        <h2>📝 Todo List - React</h2>
        <input
          name="todo"
          type="text"
          ref={this.inputRef}
          onKeyDown={this.addTodo}
          placeholder="Type a todo and hit Enter"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #aaa",
            marginBottom: "1rem",
            width: "300px",
          }}
        />
        <div style={{ marginBottom: "1rem" }}>
          <strong>{this.state.remainingCount}</strong> remaining
        </div>

        <TodoList list={this.state.todos} handleChange={this.handleChange} />

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={this.clearCompleted}
            style={{
              padding: "8px 16px",
              backgroundColor: "#e53935",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clear Completed
          </button>
        </div>
      </div>
    );
  }
}

export default TodoApp;
