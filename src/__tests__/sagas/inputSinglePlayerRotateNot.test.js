import { testControllerStore } from "../../__testUtil/testStores";
import game from "../../store/reducers/game";
import { moveRight, replacePlayerBlock } from "../../store/actions/block";
import { inputRight, inputRotateLeft, inputRotateRight } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";

it('input Cannot Rotate Block Left', () => {
    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++){ testExpectedResult = game(testExpectedResult, moveRight()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++){ testSagaStore.dispatch(inputRight()); }

    testSagaStore.dispatch(inputRotateLeft());

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);
})

it('input Cannot Rotate Block Right', () => {
    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++){ testExpectedResult = game(testExpectedResult, moveRight()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++){ testSagaStore.dispatch(inputRight()); }

    testSagaStore.dispatch(inputRotateRight());

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);
})

