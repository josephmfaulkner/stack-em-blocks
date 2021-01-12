const ADD_PLAYER_BLOCK_TO_GRID = 'ADD_PLAYER_BLOCK_TO_GRID';
const CLEAR_FILLED_ROWS = 'CLEAR_FILLED_ROWS';
const SHIFT_CLEARED_ROWS = 'SHIFT_CLEARED_ROWS';

function addPlayerBlockToGrid() {
    return {
        type: ADD_PLAYER_BLOCK_TO_GRID,
        payload: null
    }
}

function clearFilledRows() {
    return {
        type: CLEAR_FILLED_ROWS,
        payload: null
    }
}

function shiftClearedRows() {
    return {
        type: SHIFT_CLEARED_ROWS,
        payload: null
    }
}

export {
    ADD_PLAYER_BLOCK_TO_GRID, addPlayerBlockToGrid,
    CLEAR_FILLED_ROWS, clearFilledRows,
    SHIFT_CLEARED_ROWS, shiftClearedRows 
}