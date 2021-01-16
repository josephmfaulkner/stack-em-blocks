import { connect } from 'react-redux';
import { call, select, put, takeEvery, takeLatest } from 'redux-saga/effects'


import { START_GAME, RESTART_GAME, PAUSE_RESUME_GAME, gameOver, updateGameScore } from "../actions/gameStatus";
import { clearFilledRows, shiftClearedRows, addPlayerBlockToGrid } from "../actions/gameGrid";
import { moveDown, replacePlayerBlock } from "../actions/block"
import { getRandomBlock } from "../utils/blockConstants";
import { canMoveDown } from "../utils/moveValidations";

const delay = (ms) => new Promise(res => setTimeout(res, ms))
const getGamePaused = (state) => { return state.game.stats.paused };
const getGameOver = (state) => { return state.game.stats.gameOver };

export function* mainGameLoop(action) {
    
    yield put(replacePlayerBlock(getRandomBlock()));
    while(true)
    {
        yield delay(500);

        let gameOver = yield select(getGameOver);
        if(gameOver)
        {
            yield put(gameOver());
            break;
        }

        let paused = yield select(getGamePaused);
        if(paused) {break;}

        let gameState = yield select();
        let canPlayerMoveDown = canMoveDown(gameState.game);
        if(canPlayerMoveDown)
        {
            yield put(moveDown());
        }
        else
        {
            yield put(addPlayerBlockToGrid());
            yield put(replacePlayerBlock(null));
            yield put(clearFilledRows());
            yield delay(175);
            yield put(shiftClearedRows());
            yield put(replacePlayerBlock(getRandomBlock()));
        }

        yield put(updateGameScore());

    }
    
}

export function* startGame() {
    yield takeLatest(START_GAME, mainGameLoop);
    yield takeLatest(PAUSE_RESUME_GAME, mainGameLoop);
    yield takeLatest(RESTART_GAME, mainGameLoop);
}
