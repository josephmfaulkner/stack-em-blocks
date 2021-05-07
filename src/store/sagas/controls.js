import { select, put, takeLatest } from 'redux-saga/effects'

import { INPUT_MOVE, INPUT_ROTATE, INPUT_PAUSE_RESUME } from "../actions/input";
import { moveDown, moveLeft, moveRight, rotateLeft, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, rotateRight } from "../actions/block"
import { canMoveDown,canMoveLeft, canMoveRight, canRotateLeft, canRotateRight  } from "../utils/moveValidations";
import { togglePauseGame } from "../actions/gameStatus";
import { playSoundEffect } from "../actions/sound";

import {
    MOVE_BLOCK_SOUND, 
    ROTATE_BLOCK_SOUND,
    GAME_OVER_SOUND 
} from "../../sound/soundNames";


export function* onInputMove(action) {
    let gameState = yield select(); gameState = gameState.game; 
    let paused = gameState.stats.paused; if(paused) {return;}
    let direction = action.payload;

    switch (direction) {
        case DIRECTION_DOWN:
            if(canMoveDown(gameState))
            {
                yield put(moveDown());
            }      
            break;
        case DIRECTION_LEFT:
            if(canMoveLeft(gameState))
            {
                yield put(moveLeft());
                yield put(playSoundEffect(MOVE_BLOCK_SOUND));  
            }
            break;
        case DIRECTION_RIGHT: 
            if(canMoveRight(gameState))
            {
                yield put(moveRight());
                yield put(playSoundEffect(MOVE_BLOCK_SOUND));    
            }
            break;        
        default:
            break;
    }
}

export function* onInputRotate(action) {
    let gameState = yield select();
    gameState = gameState.game; 
    let paused = gameState.stats.paused; if(paused) {return;}
    let direction = action.payload;

    //console.log("ROTATE", action);
    //console.log("PAUSED", paused);

    switch (direction) {
        case DIRECTION_LEFT:
            const canMoveRotateLeft = canRotateLeft(gameState);
            if(canMoveRotateLeft)
            {
                //console.log("ROTATE LEFT", canMoveRotateLeft);
                yield put(rotateLeft());
                yield put(playSoundEffect(ROTATE_BLOCK_SOUND));  
            }
            break;
        case DIRECTION_RIGHT:
            const canMoveRotateRight = canRotateRight(gameState);
            if(canMoveRotateRight)
            {
                //console.log("ROTATE RIGHT", canMoveRotateRight);
                yield put(rotateRight());
                yield put(playSoundEffect(ROTATE_BLOCK_SOUND));  

            }
            break;    
        default:
            break;
    }
}

export function* onInputPauseResume(action) {
    yield put(togglePauseGame());
    yield put(playSoundEffect(GAME_OVER_SOUND));  
}

export function* gameControlsMain() {
    yield takeLatest(INPUT_MOVE, onInputMove);
    yield takeLatest(INPUT_ROTATE, onInputRotate);
    yield takeLatest(INPUT_PAUSE_RESUME, onInputPauseResume);
}
