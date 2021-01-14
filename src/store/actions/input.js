import { DIRECTION_DOWN, DIRECTION_LEFT, DIRECTION_RIGHT } from "./block";

const INPUT_MOVE  = 'INPUT_MOVE';
const INPUT_ROTATE = 'INPUT_ROTATE';
const INPUT_PAUSE_RESUME = 'INPUT_PAUSE_RESUME';

function inputLeft()
{
    return {
        type: INPUT_MOVE,
        payload: DIRECTION_LEFT
    }
}

function inputRight()
{
    return {
        type: INPUT_MOVE,
        payload: DIRECTION_RIGHT
    }
}

function inputDown()
{
    return {
        type: INPUT_MOVE,
        payload: DIRECTION_DOWN
    }
}

function inputRotateLeft()
{
    return {
        type: INPUT_ROTATE,
        payload: DIRECTION_LEFT
    }
}

function inputRotateRight()
{
    return {
        type: INPUT_ROTATE,
        payload: DIRECTION_RIGHT
    }
}

function inputPauseResume()
{
    return {
        type: INPUT_PAUSE_RESUME,
        payload: null
    }
}

export {
    
    INPUT_MOVE,
    INPUT_ROTATE,
    INPUT_PAUSE_RESUME, 
    inputLeft,
    inputRight,
    inputDown,
    inputRotateLeft,
    inputRotateRight,
    inputPauseResume

}


