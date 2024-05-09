import React, { useState } from "react";
import "./HallHomePage.css";
import HallKathmandu from "../HallKathmandu/HallKathmandu";
import HallBhaktapur from "../HallBhaktapur/HallBhaktapur";
import HallPatan from "../HallPatan/HallPatan";
import HallKritipur from "../HallKritipur/HallKritipur";

const HallHomePage = () => {
  const [selectedHall, setSelectedHall] = useState("Kathmandu");

  return (
    <section className="HallImages-Wrapper">
      <div className="first">
        <h1
          style={{
            textDecoration: selectedHall === "Kathmandu" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => setSelectedHall("Kathmandu")}
        >
          Hall Kathmandu
        </h1>
        <h1
          style={{
            textDecoration: selectedHall === "Bhaktapur" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => setSelectedHall("Bhaktapur")}
        >
          Hall Bhaktapur
        </h1>

        <h1
          style={{
            textDecoration: selectedHall === "Patan" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => setSelectedHall("Patan")}
        >
          Hall Patan
        </h1>

        <h1
          style={{
            textDecoration: selectedHall === "Kritipur" ? "underline" : "",
            cursor: "pointer",
          }}
          onClick={() => setSelectedHall("Kritipur")}
        >
          Hall Kritipur
        </h1>
      </div>

      {selectedHall === "Kathmandu" && <HallKathmandu />}
      {selectedHall === "Bhaktapur" && <HallBhaktapur />}
      {selectedHall === "Patan" && <HallPatan />}
      {selectedHall === "Kritipur" && <HallKritipur />}
    </section>
  );
};

export default HallHomePage;
