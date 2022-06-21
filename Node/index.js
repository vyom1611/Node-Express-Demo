const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err,data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data)
        });
    }
    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err,data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data)
        });
    }

});


const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {console.log(`Server running on ${PORT}`)});