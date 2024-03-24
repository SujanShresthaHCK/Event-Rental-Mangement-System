import React from "react";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Occasion from "../components/Occasion/Occasion";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Occasion />
      <Footer />
    </div>
  );
};

export default Home;
