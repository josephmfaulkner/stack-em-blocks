import { testControllerStore } from "../../__testUtil/testStores";
import game from "../../store/reducers/game";
import { replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputPauseResume } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";
import { togglePauseGame } from "../../store/actions/gameStatus";

it('input On Paused (Block Does Not Move)', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_B));
    testExpectedResult = game(testExpectedResult, togglePauseGame());

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_B));
    testSagaStore.dispatch(inputPauseResume());
    for(let i = 0; i < 18; i++){ testSagaStore.dispatch(inputDown()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

});
