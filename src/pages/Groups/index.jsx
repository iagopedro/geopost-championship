import React, { useEffect, useState } from "react";
import axios from "axios";

import Group from "./components/Group";
import MatchResults from "./components/MatchResults";

import "./styles.css"

function Groups() {
  const [teams, setTeams] = useState([]);

  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);
  const [groupC, setGroupC] = useState([]);
  const [groupD, setGroupD] = useState([]);
  const [groupE, setGroupE] = useState([]);
  const [groupF, setGroupF] = useState([]);
  const [groupG, setGroupG] = useState([]);
  const [groupH, setGroupH] = useState([]);



  useEffect(() => {
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
  }, [])

  console.log(groupA)

  return (
    <div className="main-container">

      <header className="groups-header">
        <span>Groups</span>
      </header>

      <div className="groups-container">

        <aside className="match-buttons-box">

          <button className="first-matches-button">
            Start First Round
          </button>
          <button className="second-matches-button">
            Start Second Round
          </button>
          <button className="third-matches-button">
            Start Third Round
          </button>

        </aside>

        <main className="groups-list-box">

          <div className="groups-list">

            <div className="group-item">
              <span className="group-title">Group A</span>
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
              <span className="group-title">Group A</span>
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
              <span className="group-title">Group A</span>
              {
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
              <span className="group-title">Group A</span>
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
              <span className="group-title">Group A</span>
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
              <span className="group-title">Group A</span>
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
              <span className="group-title">Group A</span>
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
              <span className="group-title">Group A</span>
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
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
          <MatchResults 
            resultTeamA={
              {
                title: "Brazil",
                goals: 1,
              }
            }
            resultTeamB={
              {
                title: "Argentina",
                goals: 0,
              }
            }
          />
        </section>

      </div>
    </div>
  )
}

export default Groups;