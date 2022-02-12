import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { ATP, Main, Contact, Header } from "./components";

import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/atp" element={<ATP />} />
      </Routes>
    </BrowserRouter>,
    rootElement
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
