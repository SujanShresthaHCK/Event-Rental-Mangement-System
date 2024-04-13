import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import BookVenue from "./assets/pages/BookVenue";
import Admin from "./assets/pages/Admin";
import Hall from "./assets/pages/Hall";
import Food from "./assets/pages/Food";
import AdminDashboard from "./assets/components/AdminDashboard/AdminDashboard";
import AdminLog from "./assets/pages/AdminLog";
import Silver from "./assets/pages/Silver";
import Gold from "./assets/pages/Gold";
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
          <Route path="/admin" element={<AdminLog />} />
          <Route path="/dashboard" element={<Admin />} >
          <Route index element={<AdminDashboard />} />
          <Route path="foodCategories" element={<Food/>} />
          <Route path="hall" element={<Hall />} />
          </Route>
          <Route path="/food" element={<Food />} />
          <Route path="/silver" element={<Silver/>} />
          <Route path="/gold" element={<Gold />} />
          <Route path="platinium" element={<Platinium />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
