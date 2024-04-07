import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import BookVenue from "./assets/pages/BookVenue";
import Admin from "./assets/pages/Admin";
import Hall from "./assets/pages/Hall";
import Food from "./assets/pages/Food";
import Add from "./assets/pages/Add";
import Edit from "./assets/pages/Edit";
import Remove from "./assets/pages/Remove";
import Silver from "./assets/pages/Silver";
import Gold from "./assets/pages/Gold"
import Platinium from "./assets/pages/Platinium";

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
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/remove" element={<Remove />} />
          <Route path="/silver" element={<Silver />} />
          <Route path="/golden" elements={<Gold />} />
          <Route path="/platinium" elements={<Platinium />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
