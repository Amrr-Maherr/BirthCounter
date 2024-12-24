import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; // استيراد Provider
import AgeStore from "./Redux/AgeStore"; // استيراد الـ store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={AgeStore}>
    <App />
  </Provider>
);


