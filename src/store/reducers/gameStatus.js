
import { PAUSE_RESUME_GAME, GAME_OVER, RESTART_GAME, UPDATE_GAME_SCORE, EXIT_GAME } from "../actions/gameStatus";
import getGame, { restartGame } from "../model/Game";
const defaultGameStatus = {
    paused: false,
    gameOver: false,
    level: 1,
    score: 0
}

const gameStatus = function(state = defaultGameStatus  , action)
{ 
    switch(action.type)
    {
        
        case EXIT_GAME:
            restartGame();
            return defaultGameStatus;
        case RESTART_GAME:
            restartGame();
            return defaultGameStatus; 
        case PAUSE_RESUME_GAME:
            let updatePaused = !(state.paused);
            return {
                ...state,
                paused: updatePaused
            };
        case GAME_OVER: 
            return {
                ...state,
                gameOver: true
            };     
        case UPDATE_GAME_SCORE:
            const newScore = getGame().getGameScore();
            return {
                ...state,
                score: newScore
            };

        default:
            return state;
    }
}

export default gameStatus;