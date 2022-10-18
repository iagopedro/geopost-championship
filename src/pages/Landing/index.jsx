import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

function Landing() {
  return (
    <div className="main-container landing-container">
      <div className="content">
        <h1 className="landing-title">World Cup Championship</h1>
        
        <Link to="/groups">
          <button className="landing-button">Start</button>
        </Link>
      </div>
    </div>
  )
}

export default Landing;