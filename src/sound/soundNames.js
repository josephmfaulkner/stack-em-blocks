const MOVE_BLOCK_SOUND    = 'MOVE_BLOCK_SOUND';
const ROTATE_BLOCK_SOUND  = 'ROTATE_BLOCK_SOUND';
const COLLISION_BLOCK_SOUND     = 'COLLISION_BLOCK_SOUND';
const COLLISION_BLOCK_SOUND_ALT = 'COLLISION_BLOCK_SOUND_ALT';
const CLEAR_BLOCK_SOUND   = 'CLEAR_BLOCK_SOUND';
const SHIFT_BLOCK_SOUND   = 'SHIFT_BLOCK_SOUND';
const GAME_OVER_SOUND     = 'GAME_OVER_SOUND';

const soundMapping = {
    MOVE_BLOCK_SOUND : 'scratch.mp3',
    ROTATE_BLOCK_SOUND : 'woosh.mp3',
    COLLISION_BLOCK_SOUND : 'stack.mp3',
    COLLISION_BLOCK_SOUND_ALT : 'click.mp3',
    CLEAR_BLOCK_SOUND : 'pop.mp3',
    SHIFT_BLOCK_SOUND : 'thunk.mp3',
    GAME_OVER_SOUND : 'gameover.mp3'
}

export {
    MOVE_BLOCK_SOUND,
    ROTATE_BLOCK_SOUND,
    COLLISION_BLOCK_SOUND,
    COLLISION_BLOCK_SOUND_ALT,
    CLEAR_BLOCK_SOUND,
    SHIFT_BLOCK_SOUND,
    GAME_OVER_SOUND,
    soundMapping,
};