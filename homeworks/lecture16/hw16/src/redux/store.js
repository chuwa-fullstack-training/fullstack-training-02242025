import { todoReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(todoReducer);
