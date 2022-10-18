import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles.css"

function Groups() {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [groupE, setGroupE] = useState([]);
  const [groupF, setGroupF] = useState([]);
  const [groupG, setGroupG] = useState([]);
  const [groupH, setGroupH] = useState([]);

  const [matches, setMatches] = useState([]);

  const [isFirstRoundFinished, setIsFirstRoundFinished] = useState(false)
  const [isSecondRoundFinished, setIsSecondRoundFinished] = useState(false)
  const [isThirdRoundFinished, setIsThirdRoundFinished] = useState(false)

  useEffect(() => {
    function handleFetch() {
      axios.get("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
        headers: {
          "git-user": "iagopedro"
        }
      })
      .then(response => {
        setGroupA(response.data.Result.slice(0,4))
        setGroupB(response.data.Result.slice(4,8))
        setGroupC(response.data.Result.slice(8,12))
        setGroupD(response.data.Result.slice(12,16))
        setGroupE(response.data.Result.slice(16,20))
        setGroupF(response.data.Result.slice(20,24))
        setGroupG(response.data.Result.slice(24,28))
        setGroupH(response.data.Result.slice(28))
      })
    }

    handleFetch()

  }, [])

  function createMatch(team1, team2) {
    let match = {
      team1_name: team1.Name,
      team2_name: team2.Name,
      team1_points: Math.floor(Math.random() * 5),
      team2_points: Math.floor(Math.random() * 5),
    }

    return match;
  }

  function createFirstRound() {

    setMatches([])

    const groupAmatch1 = createMatch(groupA[0], groupA[1])
    const groupAmatch2 = createMatch(groupA[2], groupA[3])
    setMatches(matches => matches.concat([groupAmatch1, groupAmatch2]))
    
    const groupBmatch1 = createMatch(groupB[0], groupB[1])
    const groupBmatch2 = createMatch(groupB[2], groupB[3])
    setMatches(matches => matches.concat([groupBmatch1, groupBmatch2]))
    
    const groupCmatch1 = createMatch(groupC[0], groupC[1])
    const groupCmatch2 = createMatch(groupC[2], groupC[3])
    setMatches(matches => matches.concat([groupCmatch1, groupCmatch2]))
    
    const groupDmatch1 = createMatch(groupD[0], groupD[1])
    const groupDmatch2 = createMatch(groupD[2], groupD[3])
    setMatches(matches => matches.concat([groupDmatch1, groupDmatch2]))
    
    const groupEmatch1 = createMatch(groupE[0], groupE[1])
    const groupEmatch2 = createMatch(groupE[2], groupE[3])
    setMatches(matches => matches.concat([groupEmatch1, groupEmatch2]))
    
    const groupFmatch1 = createMatch(groupF[0], groupF[1])
    const groupFmatch2 = createMatch(groupF[2], groupF[3])
    setMatches(matches => matches.concat([groupFmatch1, groupFmatch2]))
    
    const groupGmatch1 = createMatch(groupG[0], groupG[1])
    const groupGmatch2 = createMatch(groupG[2], groupG[3])
    setMatches(matches => matches.concat([groupGmatch1, groupGmatch2]))
    
    const groupHmatch1 = createMatch(groupH[0], groupH[1])
    const groupHmatch2 = createMatch(groupH[2], groupH[3])
    setMatches(matches => matches.concat([groupHmatch1, groupHmatch2]))

    setIsFirstRoundFinished(true)
  }

  function createSecondRound() {

    setMatches([])

    const groupAmatch1 = createMatch(groupA[0], groupA[2])
    const groupAmatch2 = createMatch(groupA[1], groupA[3])
    setMatches(matches => matches.concat([groupAmatch1, groupAmatch2]))
    
    const groupBmatch1 = createMatch(groupB[0], groupB[2])
    const groupBmatch2 = createMatch(groupB[1], groupB[3])
    setMatches(matches => matches.concat([groupBmatch1, groupBmatch2]))
    
    const groupCmatch1 = createMatch(groupC[0], groupC[2])
    const groupCmatch2 = createMatch(groupC[1], groupC[3])
    setMatches(matches => matches.concat([groupCmatch1, groupCmatch2]))
    
    const groupDmatch1 = createMatch(groupD[0], groupD[2])
    const groupDmatch2 = createMatch(groupD[1], groupD[3])
    setMatches(matches => matches.concat([groupDmatch1, groupDmatch2]))
    
    const groupEmatch1 = createMatch(groupE[0], groupE[2])
    const groupEmatch2 = createMatch(groupE[1], groupE[3])
    setMatches(matches => matches.concat([groupEmatch1, groupEmatch2]))
    
    const groupFmatch1 = createMatch(groupF[0], groupF[2])
    const groupFmatch2 = createMatch(groupF[1], groupF[3])
    setMatches(matches => matches.concat([groupFmatch1, groupFmatch2]))
    
    const groupGmatch1 = createMatch(groupG[0], groupG[2])
    const groupGmatch2 = createMatch(groupG[1], groupG[3])
    setMatches(matches => matches.concat([groupGmatch1, groupGmatch2]))
    
    const groupHmatch1 = createMatch(groupH[0], groupH[2])
    const groupHmatch2 = createMatch(groupH[1], groupH[3])
    setMatches(matches => matches.concat([groupHmatch1, groupHmatch2]))

    setIsSecondRoundFinished(true)
  }

  function createThirdRound() {

    setMatches([])

    const groupAmatch1 = createMatch(groupA[0], groupA[3])
    const groupAmatch2 = createMatch(groupA[1], groupA[2])
    setMatches(matches => matches.concat([groupAmatch1, groupAmatch2]))
    
    const groupBmatch1 = createMatch(groupB[0], groupB[3])
    const groupBmatch2 = createMatch(groupB[1], groupB[2])
    setMatches(matches => matches.concat([groupBmatch1, groupBmatch2]))
    
    const groupCmatch1 = createMatch(groupC[0], groupC[3])
    const groupCmatch2 = createMatch(groupC[1], groupC[2])
    setMatches(matches => matches.concat([groupCmatch1, groupCmatch2]))
    
    const groupDmatch1 = createMatch(groupD[0], groupD[3])
    const groupDmatch2 = createMatch(groupD[1], groupD[2])
    setMatches(matches => matches.concat([groupDmatch1, groupDmatch2]))
    
    const groupEmatch1 = createMatch(groupE[0], groupE[3])
    const groupEmatch2 = createMatch(groupE[1], groupE[2])
    setMatches(matches => matches.concat([groupEmatch1, groupEmatch2]))
    
    const groupFmatch1 = createMatch(groupF[0], groupF[3])
    const groupFmatch2 = createMatch(groupF[1], groupF[2])
    setMatches(matches => matches.concat([groupFmatch1, groupFmatch2]))
    
    const groupGmatch1 = createMatch(groupG[0], groupG[3])
    const groupGmatch2 = createMatch(groupG[1], groupG[2])
    setMatches(matches => matches.concat([groupGmatch1, groupGmatch2]))
    
    const groupHmatch1 = createMatch(groupH[0], groupH[3])
    const groupHmatch2 = createMatch(groupH[1], groupH[2])
    setMatches(matches => matches.concat([groupHmatch1, groupHmatch2]))

    setIsThirdRoundFinished(true)
  }


  return (
    <div className="main-container">

      <header className="groups-header">
        <h1>Groups</h1>
      </header>

      <div className="groups-container">

        <aside className="match-buttons-box">

          <button 
            className="matches-button"
            onClick={() => createFirstRound()}
            disabled={isFirstRoundFinished}
          >
            Start First Round
          </button>

          <button 
            className="matches-button"
            onClick={() => createSecondRound()}
            disabled={isSecondRoundFinished}
          >
            Start Second Round
          </button>

          <button 
            className="matches-button"
            onClick={() => createThirdRound()}
            disabled={isThirdRoundFinished}
          >
            Start Third Round
          </button>

        </aside>

        <main className="groups-list-box">

          <div className="groups-list">

            <div className="group-item">

              <strong className="group-title">Group A</strong>
              {
                groupA.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>
            
            <div className="group-item">

              <strong className="group-title">Group B</strong>
              {
                groupB.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

            <div className="group-item">

              <strong className="group-title">Group C</strong>              {
                groupC.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

            <div className="group-item">

              <strong className="group-title">Group D</strong>
              {
                groupD.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

          </div>



          <div className="groups-list">

            <div className="group-item">

              <strong className="group-title">Group E</strong>
              {
                groupE.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

            <div className="group-item">

              <strong className="group-title">Group F</strong>
              {
                groupF.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

            <div className="group-item">

              <strong className="group-title">Group G</strong>
              {
                groupG.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

            <div className="group-item">

              <strong className="group-title">Group H</strong>
              {
                groupH.map(team => {
                  return (
                    <li key={team.Token}>
                      {team.Name}
                    </li>
                  )
                })
              }
            </div>

          </div>

        </main>

        <section className="match-results-box">

          <h3>Results</h3>

          {
            matches.map(match => {
              return (
                <div 
                  key={`${match.team1_name}X${match.team2_name}`}
                  className="match-results"
                >
                  <span>{match.team1_name}&nbsp;</span>
                  <span>{match.team1_points}&nbsp;</span>
                  X&nbsp;
                  <span>{match.team2_points}&nbsp;</span>
                  <span>{match.team2_name}</span>
                </div>
              )
            })
          }
        </section>

      </div>
    </div>
  )
}

export default Groups;