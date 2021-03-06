import { select, put, takeLatest, call } from 'redux-saga/effects'


import { START_GAME, RESTART_GAME, PAUSE_RESUME_GAME, gameOver, incrementGameScore, setNextBlockIndex } from "../actions/gameStatus";
import { incrementBlockCount } from "../actions/gameStats"
import { clearFilledRows, shiftClearedRows, addPlayerBlockToGrid } from "../actions/gameGrid";
import { moveDown, replacePlayerBlock } from "../actions/block"
import { getRandomBlock, getBlockByIndex } from "../utils/blockConstants";
import { canMoveDown, isGameOver } from "../utils/moveValidations";
import * as GameGridUtil from "../utils/gameGrid";

import { 
    COLLISION_BLOCK_SOUND_ALT,
    CLEAR_BLOCK_SOUND, 
    SHIFT_BLOCK_SOUND, 
    GAME_OVER_SOUND
} from "../../sound/soundNames";
import { playSoundEffect } from "../actions/sound";

const delay = (ms) => new Promise(res => setTimeout(res, ms))
const getNextBlockIndex = (state) => { return state.game.stats.nextBlockIndex };
const getGamePaused = (state) => { return state.game.stats.paused };
const getGameOver = (state) => { return isGameOver(state.game); };
const getCanMoveDown = (state) => { return canMoveDown(state.game); };
const getRowsToClear = (state) => { return { ...GameGridUtil.clearFilledRows(state.game.grid) }.scoredPoints ; };

export function* mainGameLoop(action) {
    
    
    while(true)
    {
        if(yield select(getGameOver))
        {
            yield put(gameOver());
            yield put(playSoundEffect(GAME_OVER_SOUND));
            break;
        }

        if(yield select(getGamePaused))
        {
            //yield delay(500);
            break;
        }

        if(yield select(getCanMoveDown))
        {
            yield delay(500);
        }
        
        if(yield select(getCanMoveDown))
        {
            yield put(moveDown());
        }
        else
        {
            yield put(playSoundEffect(COLLISION_BLOCK_SOUND_ALT));
            yield put(addPlayerBlockToGrid());
            yield put(replacePlayerBlock(null));

            let rowsToClear = yield select(getRowsToClear);
            if(rowsToClear > 0)
            {
                yield put(clearFilledRows());
                yield put(playSoundEffect(CLEAR_BLOCK_SOUND));
                yield delay(250);
                yield put(shiftClearedRows());
                yield put(playSoundEffect(SHIFT_BLOCK_SOUND));
                yield put(incrementGameScore( rowsToClear ));
            }

            let nextBlockIndex = yield select(getNextBlockIndex);
            let nextBlockData = yield call(getBlockByIndex , nextBlockIndex);

            yield put(replacePlayerBlock(nextBlockData));
            yield put(incrementBlockCount(nextBlockIndex));

            let nextBlock = yield call(getRandomBlock);
            yield put(setNextBlockIndex(nextBlock.blockIndex));
        }

    }
    
}

export function* startNewGame() {
    let nextBlock = yield call(getRandomBlock);

    yield put(replacePlayerBlock(nextBlock.blockData));
    yield put(incrementBlockCount(nextBlock.blockIndex));
    
    nextBlock = yield call(getRandomBlock);
    yield put(setNextBlockIndex(nextBlock.blockIndex));


    yield call(mainGameLoop);
}

export function* mainGameSaga() {
    yield takeLatest(START_GAME, startNewGame);
    yield takeLatest(RESTART_GAME, startNewGame);
    yield takeLatest(PAUSE_RESUME_GAME, mainGameLoop);
    
}
