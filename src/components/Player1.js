import { villains } from "../data/villains"; // change this to an api?
import Heroes from "./Heroes";

function Player1() {
  // villain deck discard
  // fate deck discard
  // player token
  // how to handle heroes/allies/items played on location
  // how do i attach items to a hero/ally
  // have state for each location.. add heroes/allies/items to that location?
  // components
  // make constructing location a component
  // constructing heroes a component
  // constructing allies/items a component
  // constructing actions a component
  // game options a component
  // power
  // character objective/guide
  // view hand
  // villain discard
  // fate discard
  // view opponent's realm


  return (
    <div className="player-container">
      <div className="realm-container">
        <div className="location-container">
          <Heroes name={villains[0].fateDeck[0].name} /> {/* prop is hardcoded here */}
          <div className="actions-container">
            <h2>{villains[0].location1.name}</h2>
            <div className="action">{villains[0].location1.action1}</div>
            <div className="action">{villains[0].location1.action2}</div>
            <div className="action">{villains[0].location1.action3}</div>
            <div className="action">{villains[0].location1.action4}</div>
          </div>
          <div className="allies-container">
            <div className="hero-strength-container">
              <h6 className="hero-strength">4</h6>
            </div>
            <h6>{villains[0].villainDeck[0].name}</h6>
          </div>
        </div>
      </div>
      <div className="options-container">
        <div className="power">
          <h6>Power Count</h6>
        </div>
        <div className="character">
          {/* use image from import/api instead of url here */}
          <img src="https://i.pinimg.com/736x/aa/6a/74/aa6a7468bf46c761456e40795847b2c8--king-of-hearts-disney-.jpg" width="100" height="100" />
          <h6>{villains[0].name}</h6>
        </div>
        <div>
          <h6>Hand</h6>
        </div>
        <div>
          <h6>Villain Discards</h6>
        </div>
        <div>
          <h6>Fate Discards</h6>
        </div>
        <div>
          <h6>Opponent's Realm</h6>
        </div>
        <button>End Turn</button>
      </div>
    </div>
  )
}

export default Player1;