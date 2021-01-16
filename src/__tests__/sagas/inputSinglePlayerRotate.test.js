import game from "../../store/reducers/game";
import { gameControlsMain } from "../../store/sagas/controls";
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight, inputRotateLeft, inputRotateRight, inputPauseResume } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";
import { canMoveDown, canMoveLeft, canMoveRight, canRotateLeft, canRotateRight } from "../../store/utils/moveValidations";

import { expectSaga } from "redux-saga-test-plan";
import { togglePauseGame } from "../../store/actions/gameStatus";


it('input Rotate Block Right Once', () => {
    /*
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveDown()); }

    let expectedGameState = gameState; //game(gameState, rotateRight());

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputRotateRight())
            .hasFinalState(expectedGameState)
            .run();
    */
})

it('input Rotate Block Left Once', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveDown()); }

    let expectedGameState = game(undefined, {});
    expectedGameState = game(expectedGameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { expectedGameState = game(expectedGameState, moveDown()); }
    //expectedGameState = game(expectedGameState, rotateLeft());
    
    //{}; //gameState; //game(gameState, rotateLeft());

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputRotateLeft())
            .hasFinalState(expectedGameState)
            .run();
})



