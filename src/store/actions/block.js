const MOVE_BLOCK = 'MOVE_BLOCK';
const ROTATE_BLOCK = 'ROTATE_BLOCK';
const REPLACE_PLAYER_BLOCK = 'REPLACE_PLAYER_BLOCK';

const DIRECTION_DOWN  = 'DIRECTION_DOWN';
const DIRECTION_LEFT  = 'DIRECTION_LEFT';
const DIRECTION_RIGHT = 'DIRECTION_RIGHT';

function moveDown()
{
    return {
        type: MOVE_BLOCK,
        payload: DIRECTION_DOWN
    }
}

function moveLeft()
{
    return {
        type: MOVE_BLOCK, 
        payload: DIRECTION_LEFT
    }
}

function moveRight()
{
    return {
        type: MOVE_BLOCK, 
        payload: DIRECTION_RIGHT
    }
}

function rotateLeft()
{
    return {
        type: ROTATE_BLOCK, 
        payload: DIRECTION_LEFT
    }
}

function rotateRight()
{
    return {
        type: ROTATE_BLOCK, 
        payload: DIRECTION_RIGHT
    }
}

function replacePlayerBlock(blockData) {
    return {
        type: REPLACE_PLAYER_BLOCK,
        payload: blockData
    }
}

export { 

moveDown,
moveLeft,
moveRight,
rotateLeft,
rotateRight,
replacePlayerBlock,

MOVE_BLOCK,
ROTATE_BLOCK,
REPLACE_PLAYER_BLOCK,

DIRECTION_DOWN,
DIRECTION_LEFT,
DIRECTION_RIGHT

}