//HTTP : it is protocol

const http = require('http');

//http.createServer([options][, requestListener])
const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000)