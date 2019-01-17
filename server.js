const express = require('express');
const pug = require('pug');
const fs = require('fs');
const util = require('util');
const articleFetcher = require ('./article');
const textToSpeech = require('@google-cloud/text-to-speech');
const client = new textToSpeech.TextToSpeechClient();
// The text to synthesize
const text = 'Hello, world!';
// Construct the request
const request = {
  input: {text: text},
  // Select the language and SSML Voice Gender (optional)
  voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
  // Select the type of audio encoding
  audioConfig: {audioEncoding: 'MP3'},
};

// Performs the Text-to-Speech request
const [response] = await client.synthesizeSpeech(request);
// Write the binary audio content to a local file
const writeFile = util.promisify(fs.writeFile);
await writeFile('output.mp3', response.audioContent, 'binary');
console.log('Audio content written to file: output.mp3');

const app = express();
app.set('view engine', 'pug');
app.get('/', (req, res) => {
    //res.send('Hey there');
    res.render('index');
});
//request mappings
app.get('/home', (req, res) => {
    res.send('You did it!');
});
//connects to port and prints evidence in command line
app.listen(3000, () => console.log('Gator app listening on port 3000!'));