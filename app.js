
var http = require('http');
var fs = require("fs");

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') {

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (req.url == "/message" && method == "post") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });

    }
    else if (req.url == "/admin") {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();

    }
    else
        res.end('Invalid Request!');

});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')