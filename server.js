//gives access to express api
const express = require('express');
const pug = require('pug');
//instantiates
const app = express();
//request mappings
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