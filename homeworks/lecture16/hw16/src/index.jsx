// import App from "./App";
import App from "./RTKApp";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
//import { store } from "./redux/store.js";
import { store } from "./app/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
