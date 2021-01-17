
//import BufferLoader from "./BufferLoader";
import SoundLoader from "./SoundLoader";

import { soundMapping } from "./soundNames";

const DEFAULT_BACKGROUND_SOUND = "";

class SoundManager 
{
    constructor()
    {
        console.log("SoundManager : constructor");
        this.audioContext = null;

        this.soundMap = null; 

        this.sound = null;
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }

        this.loadSounds();
    }

    loadSounds(newSoundsMap = null)
    {
        if(newSoundsMap == null)
        {
            newSoundsMap = soundMapping;
        }

        function finishedLoading(newSoundMap) {
            this.soundMap = newSoundMap;
        }  

        const soundLoader = new SoundLoader(
            this.audioContext, 
            newSoundsMap, 
            finishedLoading.bind(this)
        ); 
        soundLoader.load(); 

        /*

        const bufferLoader = new BufferLoader(
            this.audioContext,
            [
              '/sounds/click.mp3'
            ],
            finishedLoading.bind(this)
            );
        
          bufferLoader.load();

        */

    }

    //MUSIC
    playBackgroundMusic()
    {
        console.log("SoundManager : playBackgroundMusic");
    }

    pauseBackgroundMusic()
    {
        console.log("SoundManager : pauseBackgroundMusic");
    }

    stopBackgroundMusic()
    {
        console.log("SoundManager : stopBackgroundMusic");
    }

    setBackgroundMusicTrack(trackName)
    {
        console.log("SoundManager : setBackgroundMusicTrack", trackName);
    }

    setBackGroundMusicVolume(volumeLevel)
    {
        console.log("SoundManager : setBackgroundMusicVolume", volumeLevel);
    }

    //SOUND EFFECTS   
    playSoundEffect(soundEffectName)
    {
        if( this.soundMap == null || this.soundMap == undefined )
        {
            return; 
        }

        const source = this.audioContext.createBufferSource();
        const soundBuffer = this.soundMap[soundEffectName];
        source.buffer = soundBuffer;
        source.connect(this.audioContext.destination);
        source.start(0);

    }

    stopSoundEffects()
    {
        console.log("SoundManager : stopSoundEffects");
    }

    setSoundEffectVolume()
    {
        console.log("SoundManager : setSoundEffectVolume");
    }

}

let soundManagerInstance = null; 
const getSoundManager = function()
{
    if(soundManagerInstance == null || soundManagerInstance == undefined)
    {
        soundManagerInstance = new SoundManager();
    }
    return soundManagerInstance;
}

export default getSoundManager; 