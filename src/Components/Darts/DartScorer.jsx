import { useEffect, useState } from 'react';
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import DisplayDartsGames from './DisplayDartsGames';


function DartScorer() {
  const navigate = useNavigate();
  const [gameType, setGameType] = useState("");
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");
  const [games, setGames] = useState([]);

  function getGames() {
    axios.get("http://localhost:8082/darts/get").then((response) => {
      setGames(response.data);
    });
  }
  useEffect(getGames, []);


  return (

    <div>
      <br />
      <h1>Darts</h1>
      <br />
      <br />


      <fieldset style={{ display: "inline-block" }}>
        <form style={{ backgroundColor: "pink", borderRadius: "50px", padding: "50px" }}
          onSubmit={(e) => {
            e.preventDefault(); axios.post("http://localhost:8082/darts/create", {
              gameType,
              playerOneName,
              playerTwoName
            })
              .then((response) => {
                setGameType("");
                setPlayerOneName("");
                setPlayerTwoName("");
                console.log("Game type: " + gameType + ". " + "Player1: " + playerOneName + ". " + "Player2: " + playerTwoName);
                getGames();
              })
              .catch((err) => console.error(err));
          }}>

          <label htmlFor='gt'>Game Type: </label>
          <select
            value={gameType} onChange={(e) => setGameType(e.target.value)}
            id='gt' type='text' className='form-control' >
            <option value='Select Game Type' selectDefault>Select game type</option>
            <option value='301'>301</option>
            <option value='501'>501</option>
          </select>

          <br />

          <label htmlFor='p1name'>Player 1 name: </label>
          <input
            value={playerOneName}
            onChange={(e) => setPlayerOneName(e.target.value)}
            id='p1name' type='text' className='form-control'></input>

          <br />

          <label htmlFor='p2name'>Player 2 name: </label>
          <input
            value={playerTwoName}
            onChange={(e) => setPlayerTwoName(e.target.value)}
            id='p2name' type='text' className='form-control'></input>

          <br />

          <button
            type="submit"
            className="btn btn-success btn-md">
            Start Game</button>

        </form>
      </fieldset>

      <DisplayDartsGames games={games} getGames={getGames} />

    </div>
  );
}

export default DartScorer;