import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Context
import { FetchContextProvider } from "./context/fetchContext";

ReactDOM.render(
  <React.StrictMode>
    <FetchContextProvider>
      <App />
    </FetchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
