import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import BookVenue from "./assets/pages/BookVenue";
import Admin from "./assets/pages/Admin";
<<<<<<< HEAD

=======
>>>>>>> 00084fa (admin change sujan side)

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookvenue" element={<BookVenue />} />
          <Route path="/admin" element={<Admin />} />
<<<<<<< HEAD
          
=======
>>>>>>> 00084fa (admin change sujan side)
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
