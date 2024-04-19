import PropTypes from 'prop-types'
import DartScorer from './DartScorer'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';



DartScorerPropTypes.propTypes = {
    gameType: PropTypes.string.isRequired,
    playerOneName: PropTypes.string.isRequired,
    playerTwoName: PropTypes.string.isRequired,
}

function DartScorerPropTypes(props) {
    const navigate = useNavigate();


    return (
        <div>
            
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>{props.playerOneName} vs {props.playerTwoName}</Card.Title>
                    <Card.Text>
                        <p>Starting at {props.gameType}</p>
                        <p></p>
                    </Card.Text>
                    <Button onClick={() => navigate("/darts/playgame/" + props.id)}variant="primary">Go To Game</Button> 
                </Card.Body>
            </Card>

        </div>
    );
}

export default DartScorerPropTypes;