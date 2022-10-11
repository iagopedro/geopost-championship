import React from "react";
import { Link } from "react-router-dom";

import "./styles.css"

function Landing() {
  return (
    <div className="main-container">
      <h1>Championship</h1>
      <Link to="/groups">Start</Link>
    </div>
  )
}

export default Landing;