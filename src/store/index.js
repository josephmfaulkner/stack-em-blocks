import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import gameStatus from "./reducers/gameStatus";
import gameGrid from "./reducers/gameGrid";

import {composeWithDevTools} from 'redux-devtools-extension';
import { startGame } from './sagas';
import { gameControlsMain } from './sagas/controls';


function* rootSaga() {
    yield all([
        startGame(),
        gameControlsMain()
    ])
}

const sagaMiddleware = createSagaMiddleware();


const mainStore = createStore(
    combineReducers({
        gameStatus,
        gameGrid
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