import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoToolkit from "./TodoToolkit";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <TodoToolkit />
    </Provider>
  );
}
