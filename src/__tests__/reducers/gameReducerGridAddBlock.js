//import { clearFilledRows } from "../store/modelUtils/gameGrid";
//import { clearFilledRows, shiftClearedRowsDown } from "../store/modelUtils/gameGrid";

import game from "../../store/reducers/game";
import * as Block from "../../store/utils/blockConstants";
import { addPlayerBlockToGrid, clearFilledRows ,shiftClearedRows } from "../../store/actions/gameGrid";
import { replacePlayerBlock, moveDown, moveLeft, moveRight } from "../../store/actions/block";


it('addBlockToGrid', () => {
    const testOutputGrid = [
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
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
        [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
      ];

    let gameState = game(undefined, {});

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i <  4; i++) { gameState = game(gameState, moveLeft()); }
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i <  2; i++) { gameState = game(gameState, moveLeft()); }
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i <  2; i++) { gameState = game(gameState, moveRight()); }
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    gameState = game(gameState, replacePlayerBlock(Block.SHAPE_B));
    for(let i = 0; i <  4; i++) { gameState = game(gameState, moveRight()); }
    for(let i = 0; i < 18; i++) { gameState = game(gameState, moveDown()); }
    gameState = game(gameState, addPlayerBlockToGrid());

    expect(gameState.grid).toEqual(testOutputGrid);
});


it('clearFilledRows (all)', () => {
    const testInputGrid = [
        [1,1,1],
        [1,1,1],
        [1,1,1],
        [1,1,1]
    ];
    const testOutputGrid = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, clearFilledRows());
    gameState = game(gameState, shiftClearedRows());

    expect(gameState.grid).toEqual(testOutputGrid);

});

it('clearFilledRows', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,0,0],
        [1,0,5,0],
        [1,2,3,4]
    ];
    const testOutputGrid = [
        [1,2,1,0],
        [0,0,0,0],
        [1,0,5,0],
        [0,0,0,0]
    ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, clearFilledRows());
    expect(gameState.grid).toEqual(testOutputGrid);

});

it('clearFilledRows3 (nothing to clear)', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,0]
    ];
    const testOutputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,0]
    ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, clearFilledRows());
    expect(gameState.grid).toEqual(testOutputGrid);

});


it('clear and shift', () => {

    const testInputGrid = [
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 5, 5, 5, 0, 0, 0, 0, 0 ],
        [ 0, 0, 5, 5, 5, 0, 0, 0, 0, 0 ],
        [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
        [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
        [ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
      ];


    const testOutputGrid = [
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
        [ 0, 0, 5, 5, 5, 0, 0, 0, 0, 0 ],
        [ 0, 0, 5, 5, 5, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 1, 1, 1, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
        [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ]
      ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, clearFilledRows());
    gameState = game(gameState, shiftClearedRows());

    expect(gameState.grid).toEqual(testOutputGrid);
});

