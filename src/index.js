import React from "react";
import ReactDOM from "react-dom";
import Router from "./router/Router";
import { LangProvider } from "./context/langContext";

ReactDOM.render(
  <React.StrictMode>
    <LangProvider>
      <Router />
    </LangProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
