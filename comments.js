// Create web server
// Import module
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

// Create web server
http.createServer(function (req, res) {
  // Get URL
  var pathname = url.parse(req.url).pathname;

  // Read file
  fs.readFile(pathname.substr(1), function (err, data) {
    if (err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, { 'Content-Type': 'text/html' });
    } else {
      // Page found
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      res.writeHead(200, { 'Content-Type': 'text/html' });

      // Write content
      res.write(data.toString());
    }

    // Send response
    res.end();
  });
}).listen(8080);

// Console will print the message
console.log('Server running at http://
