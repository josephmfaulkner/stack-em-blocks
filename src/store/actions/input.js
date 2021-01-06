const INPUT_LEFT  = 'INPUT_LEFT';
const INPUT_RIGHT = 'INPUT_RIGHT';
const INPUT_DOWN  = 'INPUT_DOWN';
const INPUT_ROTATE_LEFT = 'INPUT_ROTATE_LEFT';
const INPUT_ROTATE_RIGHT = 'INPUT_ROTATE_RIGHT';
const INPUT_PAUSE_RESUME = 'INPUT_PAUSE_RESUME';

function inputLeft()
{
    return {
        type: INPUT_LEFT,
        payload: null
    }
}

function inputRight()
{
    return {
        type: INPUT_RIGHT,
        payload: null
    }
}

function inputDown()
{
    return {
        type: INPUT_DOWN,
        payload: null
    }
}

function inputRotateLeft()
{
    return {
        type: INPUT_ROTATE_LEFT,
        payload: null
    }
}

function inputRotateRight()
{
    return {
        type: INPUT_ROTATE_RIGHT,
        payload: null
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
    INPUT_LEFT, inputLeft,
    INPUT_RIGHT, inputRight,
    INPUT_DOWN, inputDown,
    INPUT_ROTATE_LEFT, inputRotateLeft,
    INPUT_ROTATE_RIGHT, inputRotateRight,
    INPUT_PAUSE_RESUME, inputPauseResume
}


