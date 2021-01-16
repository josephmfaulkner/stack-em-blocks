import game from "../../store/reducers/game";
import { replacePlayerBlock, moveDown, moveLeft, moveRight, rotateLeft } from "../../store/actions/block";
import * as Block from "../../store/utils/blockConstants";
import { canMoveDown, canMoveLeft, canMoveRight, canRotateLeft, canRotateRight } from "../../store/utils/moveValidations";

it('boundaries cannot move down', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    expect(canMoveDown(gameState)).toEqual(false);
});

it('boundaries can move down', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    gameState = game(gameState, rotateLeft());
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    expect(canMoveDown(gameState)).toEqual(true);
});

it('boundaries can move left, cannot move right', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveRight()); }
    expect(gameState.playerBlock.xPos).toEqual(9);
    expect(canMoveRight(gameState)).toEqual(false);
    expect(canMoveLeft(gameState)).toEqual(true);
})

it('boundaries can move right, cannot move left', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 4; i++) { gameState = game(gameState, moveLeft()); }
    expect(gameState.playerBlock.xPos).toEqual(0);
    expect(canMoveRight(gameState)).toEqual(true);
    expect(canMoveLeft(gameState)).toEqual(false);
})


it('boundaries can rotate left', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveDown()); }
    expect(canRotateLeft(gameState)).toEqual(true);
})

it('boundaries can rotate right', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveDown()); }
    expect(canRotateRight(gameState)).toEqual(true);
})


it('boundaries cannot rotate left', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    gameState = game(gameState, rotateLeft());
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    expect(canRotateLeft(gameState)).toEqual(false);
})

const testInputGrid = [
    [ 0, 7, 0, 7, 0, 7, 0, 0, 7, 0 ],
    [ 0, 7, 0, 7, 0, 7, 0, 0, 7, 0 ],
    [ 0, 7, 0, 7, 0, 7, 0, 0, 7, 0 ],
    [ 0, 7, 0, 7, 0, 7, 0, 0, 7, 0 ],
    [ 0, 7, 0, 7, 0, 7, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 0, 0, 0, 0, 0, 7, 0 ],
    [ 0, 7, 0, 7, 7, 7, 7, 0, 7, 0 ],
    [ 0, 7, 0, 7, 7, 7, 7, 0, 7, 0 ],
    [ 0, 7, 0, 7, 7, 7, 7, 0, 7, 0 ],
    [ 0, 7, 0, 7, 7, 7, 7, 0, 7, 0 ],
    [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
    [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
  ];

it('collision cannot move down', () => {
    let gameState = game(undefined, {});
    gameState.grid = testInputGrid; 
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 12; i++) { gameState = game(gameState, moveDown()); }
    expect(canMoveDown(gameState)).toEqual(false);
});

it('collision can move down', () => {
    let gameState = game(undefined, {});
    gameState.grid = testInputGrid; 
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    expect(canMoveDown(gameState)).toEqual(true);
});

it('collision cannot move left, cannot move right', () => {
    let gameState = game(undefined, {});
    gameState.grid = testInputGrid; 
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    expect(canMoveRight(gameState)).toEqual(false);
    expect(canMoveLeft(gameState)).toEqual(false);
})

it('collision can move left, cannot move right', () => {
    let gameState = game(undefined, {});
    gameState.grid = testInputGrid; 
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveDown()); }
    for(let i = 0; i < 3; i++) { gameState = game(gameState, moveRight()); }
    expect(gameState.playerBlock.xPos).toEqual(7);
    expect(canMoveRight(gameState)).toEqual(false);
    expect(canMoveLeft(gameState)).toEqual(true);
})

it('collision can move right, cannot move left', () => {
    let gameState = game(undefined, {});
    gameState.grid = testInputGrid; 
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    for(let i = 0; i < 5; i++) { gameState = game(gameState, moveDown()); }
    for(let i = 0; i < 2; i++) { gameState = game(gameState, moveLeft()); }
    expect(gameState.playerBlock.xPos).toEqual(2);
    expect(canMoveRight(gameState)).toEqual(true);
    expect(canMoveLeft(gameState)).toEqual(false);
})


it('collision cannot rotate left', () => {
    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_I));
    gameState = game(gameState, rotateLeft());
    for(let i = 0; i < 13; i++) { gameState = game(gameState, moveDown()); }
    expect(canRotateLeft(gameState)).toEqual(false);
})