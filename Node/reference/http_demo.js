const http = require('http');

//Create a server object
http.createServer((req ,res) => {
    //Write Response
    res.write('hello world');
    res.end();
}).listen(5000,() => console.log('server running'));