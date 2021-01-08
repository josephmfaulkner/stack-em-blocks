import { newBlank2dArray, copy2dArray } from "../modelUtils/misc";

import { MOVE_BLOCK, ROTATE_BLOCK, ADD_BLOCK_TO_GRID, REPLACE_PLAYER_BLOCK } from "../actions/block";
import { CLEAR_FILLED_ROWS, SHIFT_CLEARED_ROWS } from "../actions/gameGrid";
import { INCREMENT_GAME_SCORE, RESTART_GAME, PAUSE_RESUME_GAME, GAME_OVER, EXIT_GAME } from "../actions/gameStatus";

import GameStatusHelper from "./helpers/GameStatusHelper";

const defaultState = {
    grid: newBlank2dArray(10,20),
    playerBlock: {
        xPos: 0, 
        yPos: 0,
        blockData: null
    },
    stats: {
        paused: false,
        gameOver: false,
        level: 1,
        score: 0
    } 
}

const game = function(state = defaultState, action)
{  

    switch(action.type)
    {
        case REPLACE_PLAYER_BLOCK:
            return state;
        case MOVE_BLOCK:
            return state;
        case ROTATE_BLOCK:
            return state;
        case ADD_BLOCK_TO_GRID: 
            return state;      
        case CLEAR_FILLED_ROWS:
            return state;
        case SHIFT_CLEARED_ROWS:
            return state;
        case INCREMENT_GAME_SCORE:
            const incrementAmount = action.payload; 
            return GameStatusHelper.incrementGameScore(state, incrementAmount);

        case RESTART_GAME:
            return defaultState;

        case PAUSE_RESUME_GAME:
            return GameStatusHelper.togglePaused(state);

        case GAME_OVER:
            return GameStatusHelper.gameOver(state);
        
        case EXIT_GAME:
            return defaultState;

        default:
            return state;
    }
}

export default game;