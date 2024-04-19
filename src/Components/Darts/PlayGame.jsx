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

    function getGameInfo(){
        axios.get("http://localhost:8082/darts/get/" + params.id)
        .then((response) => {setGameDetails(response.data)
        })
        .catch((err) => console.error(err))
    }
    useEffect(getGameInfo, [])
    console.log(gameDetails);


    return (  
        <h1>Play Game</h1>
    );
}

export default PlayGame;