import React, { useEffect, useState } from "react";

function MatchResults(props) {
  const [goalsTeamA, setGoalsTeamA] = useState(0)
  const [goalsTeamB, setGoalsTeamB] = useState(0)

  const [nameTeamA, setNameTeamA] = useState('')
  const [nameTeamB, setNameTeamB] = useState('')
  
  // Create the matches
  async function createMatch() {
    const amount1 = Math.floor(Math.random() * 5)
    const amount2 = Math.floor(Math.random() * 5)

    const teams = await props.teams

    console.log(teams[1])

    // setGoalsTeamA(amount1)
    // setGoalsTeamB(amount2)

    // setNameTeamA(name1)
    // setNameTeamB(name2)
  }
  
  useEffect(() => {

    createMatch()

  }, [])
  
  



  return (
    <div>
      <span>{nameTeamA}</span>
      <span>{goalsTeamA}</span>
      <span>{nameTeamB}</span>
      <span>{goalsTeamB}</span>
    </div>
  )

}

export default MatchResults;