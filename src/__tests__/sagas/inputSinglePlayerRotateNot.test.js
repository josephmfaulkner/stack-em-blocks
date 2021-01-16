import game from "../../store/reducers/game";
import { gameControlsMain } from "../../store/sagas/controls";
import { moveDown, moveLeft, moveRight, rotateLeft, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight, inputRotateLeft, inputRotateRight, inputPauseResume } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";
import { canMoveDown, canMoveLeft, canMoveRight, canRotateLeft, canRotateRight } from "../../store/utils/moveValidations";

import { expectSaga } from "redux-saga-test-plan";
import { togglePauseGame } from "../../store/actions/gameStatus";

it('input Cannot Rotate Block Left', () => {
    
})

it('input Cannot Rotate Block Right', () => {
    
})

