import { connect } from 'react-redux';
import { call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'

import getGame from "../model/Game";

import { INPUT_LEFT, INPUT_RIGHT, INPUT_DOWN, INPUT_ROTATE_LEFT, INPUT_ROTATE_RIGHT, INPUT_PAUSE_RESUME } from "../actions/input";
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight } from "../actions/block"
import { togglePauseGame } from "../actions/gameStatus";

const getGamePaused = (state) => { return state.gameStatus.paused};

export function* onInputDown(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    if(getGame().getGameBlock().canMoveDown())
    {
        yield put(moveDown());
    }
}

export function* onInputLeft(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    if(getGame().getGameBlock().canMoveLeft())
    {
        yield put(moveLeft());
    }
}


export function* onInputRight(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    if(getGame().getGameBlock().canMoveRight())
    {
        yield put(moveRight());
    }
}

export function* onInputRotateLeft(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    if(getGame().getGameBlock().canRotateLeft())
    {
        yield put(rotateLeft());
    }
}

export function* onInputRotateRight(action) {
    let paused = yield select(getGamePaused); if(paused) {return;}
    if(getGame().getGameBlock().canRotateRight())
    {
        yield put(rotateRight());
    }
}

export function* onInputPauseResume(action) {
    yield put(togglePauseGame());
}

export function* gameControlsMain() {
    yield takeLatest(INPUT_DOWN, onInputDown);
    yield takeLatest(INPUT_LEFT, onInputLeft);
    yield takeLatest(INPUT_RIGHT, onInputRight);
    yield takeLatest(INPUT_ROTATE_LEFT, onInputRotateLeft);
    yield takeLatest(INPUT_ROTATE_RIGHT, onInputRotateRight);
    yield takeLatest(INPUT_PAUSE_RESUME, onInputPauseResume);
}
