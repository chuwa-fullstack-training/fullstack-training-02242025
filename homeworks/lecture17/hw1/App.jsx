import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import TodoList from "./TodoList";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
