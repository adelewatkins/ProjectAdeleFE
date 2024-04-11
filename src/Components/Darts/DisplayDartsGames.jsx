import DartScorerPropTypes from "./DartScorerPropTypes";

function DisplayDartsGames(props) {

    const gameArray = [];
    for (const game of props.games) {
        gameArray.push(
            <DartScorerPropTypes
                key={game.id + " " + game.gameType}
                id={game.id}
                gameType={game.gameType}
                playerOneName={game.playerOneName}
                playerTwoName={game.playerTwoName}
                getGames={props.getGames}
            />
        );
    }

    return (
        <div>
            <br />
            <h2> List of games in progress</h2>
            <br />
            <div className="container-fluid">
                <div className="row">{gameArray}</div>
            </div>
        </div>


    );
}

export default DisplayDartsGames;