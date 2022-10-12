import React from "react";

function MatchResults({ resultTeamA, resultTeamB }) {
  return (
    <div>
      <span>{resultTeamA.title}</span>
      <span>{resultTeamA.goals}</span>
      X
      <span>{resultTeamB.goals}</span>
      <span>{resultTeamB.title}</span>
    </div>
  );
}

export default MatchResults;