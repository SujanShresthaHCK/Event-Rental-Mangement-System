import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import BookVenue from "./assets/pages/BookVenue";
import Admin from "./assets/pages/Admin";
import Hall from "./assets/pages/Hall";
import Food from "./assets/pages/Food";

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookvenue" element={<BookVenue />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
