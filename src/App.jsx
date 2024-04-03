import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import BookVenue from "./assets/pages/BookVenue";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookvenue" element={<BookVenue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
