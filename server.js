const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.get('/home', (req, res) => {
    res.send('You did it!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));