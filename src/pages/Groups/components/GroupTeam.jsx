import React from "react";

function GroupTeam({ title, points }) {
  return (
    <tr>
      <td>{title}</td>
      <td>{points}</td>
    </tr>
  );
}

export default GroupTeam;