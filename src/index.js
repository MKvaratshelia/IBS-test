import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { WeatherProvider } from "./components/weatherContext";

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
