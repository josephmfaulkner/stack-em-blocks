import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import game from "./reducers/game";

import {composeWithDevTools} from 'redux-devtools-extension';
import { mainGameSaga } from './sagas';
import { gameControlsMain } from './sagas/controls';
import { gameSoundMain } from './sagas/sound';


function* rootSaga() {
    yield all([
        mainGameSaga(),
        gameControlsMain(),
        gameSoundMain()
    ])
}

const sagaMiddleware = createSagaMiddleware();


const mainStore = createStore(
    combineReducers({
        game
    })
    ,
    composeWithDevTools(
        applyMiddleware(
            sagaMiddleware
        )
    )
);

sagaMiddleware.run(rootSaga);

export default mainStore;