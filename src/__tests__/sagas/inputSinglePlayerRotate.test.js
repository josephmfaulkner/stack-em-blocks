import { testControllerStore } from "../../__testUtil/testStores";
import game from "../../store/reducers/game";
import { rotateLeft, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputRotateLeft, inputRotateRight } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";

it('input Rotate Block Right Once', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_L));
    for(let i = 0; i < 1; i++){ testExpectedResult = game(testExpectedResult, rotateRight()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_L));
    for(let i = 0; i < 1; i++){ testSagaStore.dispatch(inputRotateRight()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})

it('input Rotate Block Right 3 Times', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_T));
    for(let i = 0; i < 3; i++){ testExpectedResult = game(testExpectedResult, rotateRight()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_T));
    for(let i = 0; i < 3; i++){ testSagaStore.dispatch(inputRotateRight()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})

it('input Rotate Block Left Once', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_L));
    for(let i = 0; i < 1; i++){ testExpectedResult = game(testExpectedResult, rotateLeft()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_L));
    for(let i = 0; i < 1; i++){ testSagaStore.dispatch(inputRotateLeft()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})

it('input Rotate Block Left 3 Times', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_S2));
    for(let i = 0; i < 3; i++){ testExpectedResult = game(testExpectedResult, rotateLeft()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_S2));
    for(let i = 0; i < 3; i++){ testSagaStore.dispatch(inputRotateLeft()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})




