const http = require('http');

let server = http.createServer((req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<b>Hello</b>');
});

server.listen(3000, () => {
   console.log('Server started http://localhost:3000/');
});