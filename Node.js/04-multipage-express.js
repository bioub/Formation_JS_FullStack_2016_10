const express = require('express');

let server = express();

server.get('/', (req, res) => {
    res.send('<b>Hello</b>');
});

server.get('/toto', (req, res) => {
    res.send('<b>Hello Toto</b>');
});

server.listen(3000, () => {
    console.log('Server started http://localhost:3000/');
});