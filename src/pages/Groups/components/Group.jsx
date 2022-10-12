import React from "react";
import GroupTeam from "./GroupTeam";

function Group({ team }) {
  return (
    <table>
      <caption>Teams</caption>
      <GroupTeam title={team.title} points={team.points}/>
      <GroupTeam title={team.title} points={team.points}/>
      <GroupTeam title={team.title} points={team.points}/>
      <GroupTeam title={team.title} points={team.points}/>
    </table>
  );
}

export default Group;