import React from "react";

import Group from "./components/Group";
import MatchResults from "./components/MatchResults";

import "./styles.css"

function Groups() {
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
                <Group 
                  team={
                    {
                      title: "Brazil",
                      points: 0,
                    }
                  }
                />
            </div>
            
            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
            </div>

            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
            </div>

            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
            </div>

          </div>



          <div className="groups-list">

            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
            </div>

            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
            </div>

            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
            </div>

            <div className="group-item">
              <span className="group-title">Group A</span>
              <Group 
                team={
                  {
                    title: "Brazil",
                    points: 0,
                  }
                }
              />
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