import game from "../../store/reducers/game";
import { gameControlsMain } from "../../store/sagas/controls";
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight, inputRotateLeft, inputRotateRight, inputPauseResume } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";
import { canMoveDown, canMoveLeft, canMoveRight, canRotateLeft, canRotateRight } from "../../store/utils/moveValidations";

import { expectSaga } from "redux-saga-test-plan";
import { togglePauseGame } from "../../store/actions/gameStatus";

it('input Move Block Down', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    let expectedGameState = game(gameState, moveDown());
        expectedGameState = game(expectedGameState, moveDown());
        expectedGameState = game(expectedGameState, moveDown());

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputDown())
            .dispatch(inputDown())
            .dispatch(inputDown())
            .hasFinalState(expectedGameState)
            .run();
});


it('input Move Block Left', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    let expectedGameState = game(gameState, moveLeft());
        expectedGameState = game(expectedGameState, moveLeft());
        expectedGameState = game(expectedGameState, moveLeft());

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputLeft())
            .dispatch(inputLeft())
            .dispatch(inputLeft())
            .hasFinalState(expectedGameState)
            .run();
});

it('input Move Block Right', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    let expectedGameState = game(gameState, moveRight());
        expectedGameState = game(expectedGameState, moveRight());
        expectedGameState = game(expectedGameState, moveRight());

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputRight())
            .dispatch(inputRight())
            .dispatch(inputRight())
            .hasFinalState(expectedGameState)
            .run();
});