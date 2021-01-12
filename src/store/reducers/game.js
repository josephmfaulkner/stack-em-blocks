import { newBlank2dArray, copy2dArray } from "../utils/misc";

import { MOVE_BLOCK, ROTATE_BLOCK, REPLACE_PLAYER_BLOCK } from "../actions/block";
import { CLEAR_FILLED_ROWS, SHIFT_CLEARED_ROWS, ADD_PLAYER_BLOCK_TO_GRID } from "../actions/gameGrid";
import { INCREMENT_GAME_SCORE, RESTART_GAME, PAUSE_RESUME_GAME, GAME_OVER, EXIT_GAME } from "../actions/gameStatus";


import GameBlockHelper from "./helpers/GameBlockHelper";
import GameGridHelper from "./helpers/GameGridHelper";
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
            const newPlayerBlock = action.payload;
            return GameBlockHelper.replacePlayerBlock(state, newPlayerBlock);
        case MOVE_BLOCK:
            const moveDirection = action.payload;
            return GameBlockHelper.moveBlock(state, moveDirection);
        case ROTATE_BLOCK:
            const rotateDirection = action.payload;
            return GameBlockHelper.rotateBlock(state, rotateDirection);
        case ADD_PLAYER_BLOCK_TO_GRID: 
            return GameGridHelper.addBlockToGrid(state);      
        case CLEAR_FILLED_ROWS:
            return GameGridHelper.clearFilledRows(state);
        case SHIFT_CLEARED_ROWS:
            return GameGridHelper.shiftClearedRowsDown(state);
        case INCREMENT_GAME_SCORE:
            const incrementAmount = action.payload; 
            return GameStatusHelper.incrementGameScore(state, incrementAmount);
        case PAUSE_RESUME_GAME:
            return GameStatusHelper.togglePaused(state);
        case GAME_OVER:
            return GameStatusHelper.gameOver(state);
        case RESTART_GAME:
            return defaultState;
        case EXIT_GAME:
            return defaultState;
        default:
            return state;
    }
}

export default game;