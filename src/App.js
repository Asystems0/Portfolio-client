import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;
