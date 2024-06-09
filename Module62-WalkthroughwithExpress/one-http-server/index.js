const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Welcome To Men and Women Dummy Data");
        res.statusCode = 200;
        res.setHeader("Content-Type", 'text/plain');
        res.end("Welcome To Men and Women Dummy Data");
    } else if (req.url === '/men') {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, dat) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Server Error');
                return;
            }
            const data = JSON.parse(dat);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data.men));
        });
    } else if (req.url === '/women') {
        fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, dat) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end("Server Error!");
                return;
            }
            const data = JSON.parse(dat);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data.women));
        });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Not Found");
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
