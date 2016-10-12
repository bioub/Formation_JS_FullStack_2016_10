const http = require('http');

let server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/html');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('<b>Hello</b>');
            break;
        case '/toto':
            res.statusCode = 200;
            res.end('<b>Hello Toto</b>');
            break;
        default:
            res.statusCode = 404;
            res.end('<b>Erreur 404</b>');
    }

});

server.listen(3000, () => {
   console.log('Server started http://localhost:3000/');
});