var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');
var config = require("./config.js")

var speech_to_text = new SpeechToTextV1 ({
  username: config.username,
  password: config.password
});

var file = 'audio.wav';
console.log("Iniciando transcrição do arquivo " + file);
var params = {
  audio: fs.createReadStream(file),
  content_type: 'audio/wav',
  model: config.model,
};

speech_to_text.recognize(params, function(error, transcript) {
  if (error)
    console.log('Error:', error);
  else
    console.log(JSON.stringify(transcript, null, 2));
});
