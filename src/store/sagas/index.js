import { connect } from 'react-redux';
import { call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'

import getGame from "../model/Game";

import { START_GAME, RESTART_GAME, PAUSE_RESUME_GAME, gameOver, updateGameScore } from "../actions/gameStatus";
import { clearFilledRows, shiftClearedRows } from "../actions/gameGrid";
import { moveDown, addBlockToGrid } from "../actions/block"

const delay = (ms) => new Promise(res => setTimeout(res, ms))
const getGamePaused = (state) => { return state.gameStatus.paused};

export function* mainGameLoop(action) {
    
    while(true)
    {
        yield delay(500);

        if(getGame().isGameOver())
        {
            yield put(gameOver());
            break;
        }

        let paused = yield select(getGamePaused);
        if(paused) {break;}

        if(getGame().getGameBlock().canMoveDown())
        {
            yield put(moveDown());
        }
        else
        {
            yield put(addBlockToGrid());
            yield put(clearFilledRows());
            yield delay(175);
            yield put(shiftClearedRows());
        }

        yield put(updateGameScore());

    }
    
}

export function* startGame() {
    yield takeLatest(START_GAME, mainGameLoop);
    yield takeLatest(PAUSE_RESUME_GAME, mainGameLoop);
    yield takeLatest(RESTART_GAME, mainGameLoop);
}
