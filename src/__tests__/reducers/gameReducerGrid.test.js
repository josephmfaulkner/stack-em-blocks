//import { clearFilledRows } from "../store/modelUtils/gameGrid";
//import { clearFilledRows, shiftClearedRowsDown } from "../store/modelUtils/gameGrid";

import game from "../../store/reducers/game";
import { addPlayerBlockToGrid, clearFilledRows ,shiftClearedRows } from "../../store/actions/gameGrid";


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


it('shiftClearedRowsDown', () => {
    const testInputGrid = [
        [1,1,0],
        [1,1,0],
        [0,0,0],
        [0,0,0]
    ];
    const testOutputGrid = [
        [0,0,0],
        [0,0,0],
        [1,1,0],
        [1,1,0]
    ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, shiftClearedRows());
    expect(gameState.grid).toEqual(testOutputGrid);

});

it('shiftClearedRowsDown2', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,0,0],
        [1,0,5,0],
        [0,0,0,0]
    ];
    const testOutputGrid = [
        [0,0,0,0],
        [0,0,0,0],
        [1,2,1,0],
        [1,0,5,0]
    ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, shiftClearedRows());
    expect(gameState.grid).toEqual(testOutputGrid);

});


it('shiftClearedRowsDown3 (nothing to clear)', () => {
    const testInputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,4]
    ];
    const testOutputGrid = [
        [1,2,1,0],
        [0,0,2,0],
        [0,0,2,0],
        [4,4,4,4]
    ];

    let gameState = game(undefined, {});
    gameState.grid = testInputGrid;

    gameState = game(gameState, shiftClearedRows());
    expect(gameState.grid).toEqual(testOutputGrid);

});
