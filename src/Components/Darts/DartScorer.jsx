import { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DartScorer() {
  const [gameType, setGameType] = useState("");
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");


  return (<div>
    <h1>Darts</h1>


    <fieldset style={{ display: "inline-block" }}>
      <form
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

        <label>Player 1 name:
          <input type="text" />
        </label>

        <br />

        <label>Player 2 name:
          <input type="text" />
        </label>
        <br />
        <button>Start Game</button>

      </form>
    </fieldset>

  </div>);
}

export default DartScorer;