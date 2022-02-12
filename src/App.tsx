import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Header } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

App.displayName = "App";

export default App;
