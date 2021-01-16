import game from "../../store/reducers/game";
import { gameControlsMain } from "../../store/sagas/controls";
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight, inputRotateLeft, inputRotateRight, inputPauseResume } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";
import { canMoveDown, canMoveLeft, canMoveRight, canRotateLeft, canRotateRight } from "../../store/utils/moveValidations";

import { expectSaga } from "redux-saga-test-plan";
import { togglePauseGame } from "../../store/actions/gameStatus";

it('input Cannot Move Block Left', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 4; i++) { gameState = game(gameState, moveLeft()); }

    let expectedGameState = gameState;

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputLeft())
            .dispatch(inputLeft())
            .dispatch(inputLeft())
            .hasFinalState(expectedGameState)
            .run();
})

it('input Cannot Move Block Right', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveRight()); }

    let expectedGameState = gameState;

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputRight())
            .dispatch(inputRight())
            .dispatch(inputRight())
            .hasFinalState(expectedGameState)
            .run();
})

it('input Cannot Move Block Down', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    gameState = game(gameState, rotateRight());
    for(let i = 0; i < 19; i++) { gameState = game(gameState, moveDown()); }

    let expectedGameState = gameState;

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputDown())
            .dispatch(inputDown())
            .dispatch(inputDown())
            .hasFinalState(expectedGameState)
            .run();
})


