import game from "../../store/reducers/game";
import { replacePlayerBlock, moveDown, moveLeft, moveRight } from "../../store/actions/block";
import { addPlayerBlockToGrid } from "../../store/actions/gameGrid";
import * as Block from "../../store/utils/blockConstants";
import { getGameStateAsGrid } from "../../store/utils/gameGrid";


const test1ExpectedGrid = [
    [ 0, 0, 0, 0, 7, 7, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 7, 7, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 7, 7, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 7, 7, 0, 0, 0, 0 ],
    [ 0, 0, 7, 7, 7, 7, 7, 7, 0, 0 ],
    [ 0, 0, 7, 7, 7, 7, 7, 7, 0, 0 ],
  ];

it('RENDERS GRID FROM STATE', () => {
    let gameState = game(undefined, {});

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 16; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 2 ; i++) { gameState = game(gameState, moveLeft());  }
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown());  }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 2 ; i++) { gameState = game(gameState, moveRight()); }
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown());  }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));

    const gameStateAsGrid = getGameStateAsGrid(gameState);
    expect(gameStateAsGrid).toEqual(test1ExpectedGrid);
});
