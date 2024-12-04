const http = require('node:http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    const url = req.url;
    if (url === '/') {
        res.end(JSON.stringify({
            data: 'Home Page'
        }));
    }
    if (url === '/about') {
        res.end(JSON.stringify({
            data: 'About Page'
        }));
    }
    if (url === '/contact') {
        res.end(JSON.stringify({
            data: 'Contact Page'
        }));
    }


});

server.listen(8000);