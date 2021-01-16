import game from "../../store/reducers/game";
import { gameControlsMain } from "../../store/sagas/controls";
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight, inputRotateLeft, inputRotateRight, inputPauseResume } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";
import { expectSaga } from "redux-saga-test-plan";
import { togglePauseGame } from "../../store/actions/gameStatus";

it('input On Paused (Block Does Not Move)', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    gameState = game(gameState, togglePauseGame());

    let expectedGameState = gameState;

    return expectSaga(gameControlsMain)
            .withReducer(game, gameState)
            .dispatch(inputDown())
            .dispatch(inputDown())
            .dispatch(inputDown())
            .dispatch(inputLeft())
            .dispatch(inputRight())
            .dispatch(inputRotateLeft())
            .dispatch(inputRotateRight())
            .dispatch(inputPauseResume())
            .dispatch(inputPauseResume())
            .hasFinalState(expectedGameState)
            .run();
});
