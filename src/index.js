import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CardsProvider from "./context/CardsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CardsProvider>
    <App />
  </CardsProvider>
);
