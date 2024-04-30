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
        const p1newScore = p1Score - parseInt(amountScored);
        if (p1newScore < 0) {
            alert(`Bust - Amount scored will take ${playerOneName}'s score below 0!`);
            return; // Don't update the score if it will go below 0
        }
        setP1Score(p1newScore);
        setAmountScored('');
    };

    const handleP2Submit = () => {
        const p2newScore = p2Score - parseInt(amountScored);
        if (p2newScore < 0) {
            alert(`Bust - Amount scored will take ${playerTwoName}'s score below 0!`);
            return; // Don't update the score if it will go below 0
        }
        setP2Score(p2newScore);
        setAmountScored('');
    };

    function getGameDetails() {
        axios.get("http://localhost:8082/darts/get/" + params.id)
            .then((response) => {
                setGameDetails(response.data)
                setP1Score(response.data.gameType);
                setP2Score(response.data.gameType);
                setPlayerOneName(response.data.playerOneName)
                setPlayerTwoName(response.data.playerTwoName)
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