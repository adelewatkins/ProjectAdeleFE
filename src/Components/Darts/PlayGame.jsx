import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



function PlayGame() {

    const navigate = useNavigate();
    const params = useParams();
    const [gameType, setGameType] = useState("");
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");
    const [gameDetails, setGameDetails] = useState();
    let [p1Score, setP1Score] = useState()
    let [p2Score, setP2Score] = useState()
    let [amountScored, setAmountScored] = useState()

    const handleP1Submit = () => {
        setP1Score(p1Score - parseInt(amountScored));
        setAmountScored('');
        axios.put("http://localhost:8082/darts/update/" + params.id, {
        p1Score
      })
    };

    const handleP2Submit = () => {
        setP2Score(p2Score - parseInt(amountScored));
        setAmountScored('');

      axios.put("http://localhost:8082/darts/update/" + params.id, {
        p2Score
      })
    };

    function getGameDetails() {
        axios.get("http://localhost:8082/darts/get/" + params.id)
            .then((response) => {
                setGameDetails(response.data)
                setP1Score(response.data.gameType);
                setP2Score(response.data.gameType);
            })
            .catch((err) => console.error(err))
    }

    useEffect(getGameDetails, [])
    console.log(gameDetails)




    return (
        <div>
            <h1>Play Game</h1>
            <br/>
            <br/>
            <div class="col">
                {gameDetails ? (
                    <div>
                        <h2> {gameDetails.playerOneName + " " + p1Score}
                            {"    "}
                            {gameDetails.playerTwoName + " " + p2Score}
                        </h2>
                    </div>
                ) : null}

            </div>
            <div>
                <form>
                    <label>
                        <input
                        placeholder="Enter amount scored"
                            type="text"
                            value={amountScored}
                            onChange={(e) => setAmountScored(e.target.value)}
                        />
                    </label>
                </form>
                <button onClick={handleP1Submit}>Submit Player 1 Score</button>
                <button onClick={handleP2Submit}>Submit Player 2 Score</button>
                
            </div>
        </div>

    );
}

export default PlayGame;