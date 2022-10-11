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


      <div className="section-3">
      <h1>How Memories Group Cards Work</h1>
      <div className="section-how">
      <div className="step-1">
      <button className="btn-step1">STEP 1</button>
      <h1>Create A MemoryCard</h1>
      <p>Start a digital group card for your recipient and add messages, photos, GIFs or videos.Start a digital group card for your recipient and add messages, photos, GIFs or videos.</p>
      </div>

      <div className="step-1">
      <button className="btn-step1">STEP 2</button>
      <h1>Invite Others</h1>
      <p>Invite others to add their contributions and watch the virtual group card grow.</p>
      </div>

      <div className="step-1">
      <button className="btn-step1">STEP 3</button>
      <h1>Deliver Appreciation</h1>
      <p>Deliver the group greeting card online, print it out, or play it as a slideshow!</p>
      </div>
      
      </div>
      </div>


     
    </div>

    
  );
}

export default Home;
