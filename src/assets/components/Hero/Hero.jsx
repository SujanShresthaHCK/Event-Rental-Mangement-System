import React from "react";
import { FiMapPin } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        {/* left-side */}
        <div className="hero-left">
          <div className="hero-head2">
            <h2>Hamro Banquet</h2>
            <span>
              <FiMapPin className="location-icon" />
            </span>
            <span> Chabahil, Kathmandu</span>
          </div>
          <div className="hero-content">
            <h1>
              The Perfect Event <br />
              Venue for
              <span style={{ color: "#ffbf00" }}>
                <Typewriter
                  words={[
                    " Wedding.",
                    " Engagement.",
                    " Aniversary.",
                    " Bartamanda.",
                    " Reception.",
                  ]}
                  loop={0}
                  Cursor
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p>
              If you are looking for a perfect event experience with memories to
              cherish you are at the right place. Let’s plan a grand event for
              you.
            </p>
            <Link to="/bookvenue">
              {" "}
              <button className="button">Book Now</button>
            </Link>
          </div>
        </div>

        {/* right-side */}
        <div className="hero-right"></div>
      </div>
    </section>
  );
};

export default Hero;
