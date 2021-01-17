
const LOAD_SOUNDS = 'LOAD_SOUNDS';
const SET_MASTER_VOLUME = 'SET_MASTER_VOLUME';

const loadSounds = function( soundData )
{
    return {
        type: LOAD_SOUNDS, 
        payload: soundData
    };
}

const setMasterVolume = function( volumeLevel )
{
    return {
        type: SET_MASTER_VOLUME,
        payload: volumeLevel
    };
}

const PLAY_BACKGROUND_MUSIC = 'PLAY_BACKGROUND_MUSIC';
const PAUSE_BACKGROUND_MUSIC = 'PAUSE_BACKGROUND_MUSIC';
const STOP_BACKGROUND_MUSIC = 'STOP_BACKGROUND_MUSIC';
const SET_BACKGROUND_MUSIC_TRACK = 'SET_BACKGROUND_MUSIC_TRACK';
const SET_BACKGROUND_MUSIC_VOLUME = 'SET_BACKGROUND_MUSIC_VOLUME';

const playBackgroundMusic = function()
{
    return {
        type: PLAY_BACKGROUND_MUSIC,
        payload: null
    }
}

const pauseBackgroundMusic = function()
{
    return {
        type: PAUSE_BACKGROUND_MUSIC,
        payload: null
    }
}

const stopBackgroundMusic = function()
{
    return {
        type: STOP_BACKGROUND_MUSIC,
        payload: null
    }
}

const setBackgroundMusicTrack = function( trackName )
{
    return {
        type: SET_BACKGROUND_MUSIC_TRACK,
        payload: trackName
    }
}

const setBackGroundMusicVolume = function( volumeLevel )
{
    return {
        type: SET_BACKGROUND_MUSIC_VOLUME,
        payload: volumeLevel
    }
}

const PLAY_SOUND_EFFECT  = 'PLAY_SOUND_EFFECT';
const STOP_SOUND_EFFECTS = 'STOP_SOUND_EFFECTS';
const SET_SOUND_EFFECT_VOLUME = 'SET_SOUND_EFFECT_VOLUME';

const playSoundEffect = function( soundName )
{
    return {
        type : PLAY_SOUND_EFFECT,
        payload : soundName
    };
}

const stopSoundEffects = function()
{
    return {
        type : STOP_SOUND_EFFECTS, 
        payload : null
    };
}

const setSoundEffectVolume = function( volumeLevel )
{
    return {
        type: SET_SOUND_EFFECT_VOLUME,
        payload : volumeLevel
    };
}

export {

    LOAD_SOUNDS,
    SET_MASTER_VOLUME,
    
    PLAY_BACKGROUND_MUSIC,
    PAUSE_BACKGROUND_MUSIC,
    STOP_BACKGROUND_MUSIC,
    SET_BACKGROUND_MUSIC_TRACK,
    SET_BACKGROUND_MUSIC_VOLUME,

    PLAY_SOUND_EFFECT,
    STOP_SOUND_EFFECTS,
    SET_SOUND_EFFECT_VOLUME,

    loadSounds, 
    setMasterVolume,

    playBackgroundMusic,
    pauseBackgroundMusic, 
    stopBackgroundMusic,
    setBackgroundMusicTrack,
    setBackGroundMusicVolume,

    playSoundEffect,
    stopSoundEffects,
    setSoundEffectVolume

}