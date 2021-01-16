import game from "../store/reducers/game";
import { gameControlsMain } from "../store/sagas/controls";
import { all } from 'redux-saga/effects';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

const testControllerStore = function()
{
    function* rootSaga() {
        yield all([
            gameControlsMain()
        ])
    }
    const sagaMiddleware = createSagaMiddleware();
    
    const mainStore = createStore(
        combineReducers({
            game
        })
        ,
        applyMiddleware(
            sagaMiddleware
        )
    );
    sagaMiddleware.run(rootSaga);

    return mainStore; 
}

export { testControllerStore }; 