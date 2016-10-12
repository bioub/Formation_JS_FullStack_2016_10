const express = require('express');

let server = express();

server.use('/admin', function authenticate(req, res, next) {
    // si pas le bon token
    next({
        statusCode: 403,
        message: 'Mauvais token'
    });
});

server.use('/', (req, res, next) => {
    console.log(req.method);
    console.log(req.url);
    next();
});

server.get('/', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<b>Hello Callback 1</b>');
    next();
});

server.get('/', (req, res) => {
    res.end('<b>Hello Callback 2</b>');
});

server.get('/toto', (req, res) => {
    res.send('<b>Hello Toto</b>');
});

server.use((req, res, next) => {
    res.statusCode = 404;
    res.send('Erreur 404');
});

server.use((err, req, res, next) => {
    res.statusCode = err.statusCode || 500;
    res.send(err.message);
});

server.listen(3000, () => {
    console.log('Server started http://localhost:3000/');
});