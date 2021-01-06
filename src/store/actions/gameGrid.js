const CLEAR_FILLED_ROWS = 'CLEAR_FILLED_ROWS';
const SHIFT_CLEARED_ROWS = 'SHIFT_CLEARED_ROWS';

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
    CLEAR_FILLED_ROWS, clearFilledRows,
    SHIFT_CLEARED_ROWS, shiftClearedRows 
}