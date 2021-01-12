import game from "../../store/reducers/game";
import * as Block from "../../store/utils/blockConstants";
import { replacePlayerBlock, rotateLeft, rotateRight, moveDown, moveLeft, moveRight } from "../../store/actions/block";


it('create new block', () => {
    
    let gameState = game(undefined, {});
    expect(gameState.playerBlock.blockData).toEqual(null);
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    expect(gameState.playerBlock.blockData).toEqual(Block.SHAPE_B);
    expect(gameState.playerBlock.xPos).toEqual(4);
    expect(gameState.playerBlock.yPos).toEqual(0);
    
});

it('rotate L block Left', () => {

    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_L));
    
    gameState = game(gameState, rotateLeft());
    expect(gameState.playerBlock.blockData).not.toBe(Block.SHAPE_L);
    expect(gameState.playerBlock.blockData).toEqual(
        [
            [0,0,4],
            [4,4,4]
        ]
        );

});

it('rotate L block Right', () => {

    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_L));
    
    gameState = game(gameState, rotateRight());
    expect(gameState.playerBlock.blockData).not.toBe(Block.SHAPE_L);
    expect(gameState.playerBlock.blockData).toEqual(
        [
            [4,4,4],
            [4,0,0]
        ]
        );

});

it('rotate block Left 4 times', () => {

    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_S2));
    
    gameState = game(gameState, rotateLeft());
    gameState = game(gameState, rotateLeft());
    gameState = game(gameState, rotateLeft());
    gameState = game(gameState, rotateLeft());
    expect(gameState.playerBlock.blockData).not.toBe(Block.SHAPE_S2);
    expect(gameState.playerBlock.blockData).toEqual(Block.SHAPE_S2);

});


it('rotate block Right 4 times', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_L2));
    
    gameState = game(gameState, rotateRight());
    gameState = game(gameState, rotateRight());
    gameState = game(gameState, rotateRight());
    gameState = game(gameState, rotateRight());
    expect(gameState.playerBlock.blockData).not.toBe(Block.SHAPE_L2);
    expect(gameState.playerBlock.blockData).toEqual(Block.SHAPE_L2);
});


it('move block down', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    
    expect(gameState.playerBlock.yPos).toEqual(5);
});

it('move block right and left', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveLeft());
    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveLeft());
    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveLeft());
    gameState = game(gameState, moveLeft());
    
    expect(gameState.playerBlock.xPos).toEqual(4);
});

it('move block down, right and left, replaceBlock', () => {
    let gameState = game(undefined, {});
    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveRight());
    gameState = game(gameState, moveLeft());


    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    gameState = game(gameState, moveDown());
    
    expect(gameState.playerBlock.xPos).toEqual(7);
    expect(gameState.playerBlock.yPos).toEqual(5);

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    expect(gameState.playerBlock.xPos).toEqual(4);
    expect(gameState.playerBlock.yPos).toEqual(0);

})
