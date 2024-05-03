import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CardBody, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function PlayGame() {

    const navigate = useNavigate();
    const params = useParams();
    const [gameType, setGameType] = useState("");
    const [playerOneName, setPlayerOneName] = useState("");
    const [playerTwoName, setPlayerTwoName] = useState("");
    const [gameDetails, setGameDetails] = useState();
    let [startingScore, setStartingScore] = useState();
    let [p1Score, setP1Score] = useState()
    let [p2Score, setP2Score] = useState()
    let [amountScored, setAmountScored] = useState()



    const handleP1Submit = () => {
        let p1newScore = p1Score - parseInt(amountScored);
        if (p1newScore < 0) {
            alert(`Bust - Amount scored will take ${playerOneName}'s score below 0!`);
            return; // Don't update the score if it will go below 0
        }
        if (p1newScore == 0) {
            alert(` ${playerOneName} WINS`);
            // need to then set both players score back to start score
        }
        if (parseInt(amountScored) > 180) {
            alert("Amount scored cannot be higher than 180!");
            return; // Don't update the score if it's higher than 180
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
        if (p2newScore == 0) {
            alert(` ${playerTwoName} WINS`);
            // need to then set both players score back to start score
        }
        if (parseInt(amountScored) > 180) {
            alert("Amount scored cannot be higher than 180!");
            return; // Don't update the score if it's higher than 180
        }
        setP2Score(p2newScore);
        setAmountScored('');
    };

    function getGameDetails() {
        axios.get("http://localhost:8082/darts/get/" + params.id)
            .then((response) => {
                setGameDetails(response.data)
                setStartingScore(response.data.gameType);
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
            <br />
            <br />
            <Card style={{margin: 'auto', width: '60%'}}>
                <Card.Body>
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
                <Button variant="outline-primary" onClick={handleP1Submit}>Submit Player 1 Score</Button>
                <Button variant="outline-success" onClick={handleP2Submit}>Submit Player 2 Score</Button>

            </div>
            </Card.Body>
            </Card>
        </div>

    );
}

export default PlayGame;