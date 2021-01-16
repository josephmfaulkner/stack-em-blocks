import { testControllerStore } from "../../__testUtil/testStores";
import game from "../../store/reducers/game";
import { moveDown, moveLeft, moveRight, rotateRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight, inputRotateRight } from "../../store/actions/input";

import * as Block from "../../store/utils/blockConstants";

it('input Cannot Move Block Left', () => {
    
    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 4; i++){ testExpectedResult = game(testExpectedResult, moveLeft()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 20; i++){ testSagaStore.dispatch(inputLeft()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})

it('input Cannot Move Block Right', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 4; i++){ testExpectedResult = game(testExpectedResult, moveRight()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 20; i++){ testSagaStore.dispatch(inputRight()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})

it('input Cannot Move Block Down', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_I));
    testExpectedResult = game(testExpectedResult, rotateRight());
    for(let i = 0; i < 19; i++){ testExpectedResult = game(testExpectedResult, moveDown()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_I));
    testSagaStore.dispatch(inputRotateRight());
    for(let i = 0; i < 50; i++){ testSagaStore.dispatch(inputDown()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);

})


