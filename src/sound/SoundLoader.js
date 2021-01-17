import { soundMapping } from "./soundNames";
const SOUND_DIR = "/sounds/";


export default class SoundLoader {

    constructor(audioContext, soundMapping, callback)
    {
        this.context = audioContext;
        this.soundMapping = soundMapping;
        this.onloadCallback = callback;
        this.soundCount = Object.keys(soundMapping).length;
        this.loadCount = 0; 
        this.soundMap  = {}; 
    }

    load()
    {
        let index = 0; 
        for(const soundName in soundMapping)
        {
            const fileName = soundMapping[soundName];
            this.loadBuffer(soundName, fileName, ++index);
        }
    }

    loadBuffer(soundName, fileName, index)
    {
        var request = new XMLHttpRequest();
        const url = SOUND_DIR + fileName;
        request.open("GET", url, true);
        request.responseType = "arraybuffer";
      
        var loader = this;
      
        request.onload = function() {
            // Asynchronously decode the audio file data in request.response
            loader.context.decodeAudioData(
                request.response,
                function(buffer) {
                if (!buffer) {
                    console.error('error decoding file data: ' + url);
                    return;
                }
                loader.soundMap[soundName] = buffer;

                if (++loader.loadCount == loader.soundCount)
                {
                    loader.onloadCallback(loader.soundMap);
                }
            },
            function(error) {
                console.error('decodeAudioData error', error);
            }
            );
        }

        request.onerror = function() {
            console.error('BufferLoader: XHR error');
        }
        
        request.send();

    }

}

/*
function BufferLoader(context, urlList, callback) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.bufferList = new Array();
    this.loadCount = 0;
  }
  
BufferLoader.prototype.loadBuffer = function(url, index) {
    // Load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
  
    var loader = this;
  
    request.onload = function() {
      // Asynchronously decode the audio file data in request.response
      loader.context.decodeAudioData(
        request.response,
        function(buffer) {
          if (!buffer) {
            alert('error decoding file data: ' + url);
            return;
        }
        loader.bufferList[index] = buffer;
        if (++loader.loadCount == loader.urlList.length)
        loader.onload(loader.bufferList);
    },
    function(error) {
        console.error('decodeAudioData error', error);
    }
    );
}

request.onerror = function() {
    alert('BufferLoader: XHR error');
}

request.send();
}

BufferLoader.prototype.load = function() {
for (var i = 0; i < this.urlList.length; ++i)
this.loadBuffer(this.urlList[i], i);
}

export default BufferLoader;

*/