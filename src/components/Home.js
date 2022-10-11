import React from "react";
import Navbar from "./Navbar";
import "../App.css";
import Cards from "./Cards";
import Button from "./Button";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="info-section">
        <div className="info">
          <div className="info-text">
            <h1>
              Memories-App is the perfect Group card for special Ocassions
            </h1>
            <p>
              Celebrate someone with an online group card file with messages,
              GIFs,Photos, & Videos
            </p>

            <Button />
          </div>
        </div>

        <div className="info-cards">
          <div className="info-cards1">
            <Cards />
            <Cards />
          </div>

          <div className="info-cards2">
            <Cards />
            <Cards />
          </div>
        </div>
      </div>


      <div className="section-how">
      
      </div>
    </div>
  );
}

export default Home;
