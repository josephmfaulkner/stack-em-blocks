import { takeLatest } from 'redux-saga/effects'
import getSoundManager from "../../sound/soundManager";
import { LOAD_SOUNDS, PLAY_SOUND_EFFECT } from "../actions/sound";

export function* loadSoundsHandler(action) {
    const actionPayload = action.payload; 
    yield getSoundManager().loadSounds(actionPayload);
}

export function* playSoundEffectHandler(action) {
    const actionPayload = action.payload;
    yield getSoundManager().playSoundEffect(actionPayload);
}

export function* gameSoundMain() {
    yield takeLatest(LOAD_SOUNDS, loadSoundsHandler);
    yield takeLatest(PLAY_SOUND_EFFECT, playSoundEffectHandler);
}
