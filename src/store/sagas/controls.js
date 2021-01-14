import { connect } from 'react-redux';
import { call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'

import getGame from "../../../deprecated/model/Game";

import { INPUT_MOVE, INPUT_ROTATE, INPUT_PAUSE_RESUME } from "../actions/input";
import { moveDown, moveLeft, moveRight, rotateLeft, DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT, rotateRight } from "../actions/block"
import { togglePauseGame } from "../actions/gameStatus";

const getGamePaused = (state) => { return state.gameStatus.paused};

export function* onInputMove(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    let direction = action.payload;

    switch (direction) {
        case DIRECTION_DOWN:
            yield put(moveDown());            
            break;
        case DIRECTION_LEFT:
            yield put(moveLeft());
            break;
        case DIRECTION_RIGHT: 
            yield put(moveRight());
            break;        
        default:
            break;
    }
    /*
    if(getGame().getGameBlock().canMoveDown())
    {
        yield put(moveDown());
    }
    */
}

export function* onInputRotate(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    let direction = action.payload;

    switch (direction) {
        case DIRECTION_LEFT:
            yield put(rotateLeft());
            break;
        case DIRECTION_RIGHT:
            yield put(rotateRight());
            break;    
        default:
            break;
    }

    /*
    if(getGame().getGameBlock().canRotateRight())
    {
        yield put(rotateRight());
    }
    */
}

export function* onInputPauseResume(action) {
    yield put(togglePauseGame());
}

export function* gameControlsMain() {
    yield takeLatest(INPUT_MOVE, onInputMove);
    yield takeLatest(INPUT_ROTATE, onInputRotate);
    yield takeLatest(INPUT_PAUSE_RESUME, onInputPauseResume);
}
