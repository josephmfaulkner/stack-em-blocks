const MOVE_DOWN = 'MOVE_DOWN';
const MOVE_LEFT  = 'MOVE_LEFT';
const MOVE_RIGHT = 'MOVE_RIGHT';
const ROTATE_LEFT = 'ROTATE_LEFT';
const ROTATE_RIGHT = 'ROTATE_RIGHT';

const ADD_BLOCK_TO_GRID = 'ADD_BLOCK_TO_GRID';

function moveDown()
{
    return {
        type: MOVE_DOWN,
        payload: null
    }
}

function moveLeft()
{
    return {
        type: MOVE_LEFT, 
        payload: null
    }
}

function moveRight()
{
    return {
        type: MOVE_RIGHT, 
        payload: null
    }
}

function rotateLeft()
{
    return {
        type: ROTATE_LEFT, 
        payload: null
    }
}

function rotateRight()
{
    return {
        type: ROTATE_RIGHT, 
        payload: null
    }
}

function addBlockToGrid() {
    return {
        type: ADD_BLOCK_TO_GRID,
        payload: null
    }
}

export { 
    MOVE_DOWN, moveDown, 
    MOVE_LEFT, moveLeft, 
    MOVE_RIGHT, moveRight, 
    ROTATE_LEFT, rotateLeft, 
    ROTATE_RIGHT, rotateRight,
    ADD_BLOCK_TO_GRID, addBlockToGrid
}