import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Home />
    </BrowserRouter>
  );
}

export default App;
