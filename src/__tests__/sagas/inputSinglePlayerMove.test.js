import { testControllerStore } from "../../__testUtil/testStores";
import game from "../../store/reducers/game";
import { moveDown, moveLeft, moveRight, replacePlayerBlock } from "../../store/actions/block";
import { inputDown, inputLeft, inputRight } from "../../store/actions/input";
import * as Block from "../../store/utils/blockConstants";


it('input Move Block Down', () => {

    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 18; i++){ testExpectedResult = game(testExpectedResult, moveDown()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 18; i++){ testSagaStore.dispatch(inputDown()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);
});

it('input Move Block Left', () => {
    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 3; i++){ testExpectedResult = game(testExpectedResult, moveLeft()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 3; i++){ testSagaStore.dispatch(inputLeft()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);
});

it('input Move Block Right', () => {
    let testExpectedResult = game(undefined, {});
    testExpectedResult = game(testExpectedResult, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 3; i++){ testExpectedResult = game(testExpectedResult, moveRight()); }

    let testSagaStore = testControllerStore();
    testSagaStore.dispatch(replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 3; i++){ testSagaStore.dispatch(inputRight()); }

    let result = testSagaStore.getState();
    expect(result.game).toEqual(testExpectedResult);
});