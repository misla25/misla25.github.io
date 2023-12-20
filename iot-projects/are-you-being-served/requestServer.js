// add to the beginning of your program
var args = process.argv.slice(2);
// requestServer.js file
const http = require("http");
const request = require("request");
const port = 7777;
// example http server creation
http
  .createServer(function (req, res) {
    //handle response
    var url = args[0] ? args[0] : "http://127.0.0.1:5503/portfolio.html";
    request({ url: url }, function requestServer(error, response, body) {
      if (!body || !response || (err === null && response.statusCode !== 200)) {
        response.writeHead(400, { "Content-Type": "text/html" });
        response.write("bad URL\n");
      } else if (response.statusCode === 200 && error !== true) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(body);
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        return response.write(body);
      }
      response.end();
      return;
    });
  })
  .listen(port, () => {
    console.log("server is running");
  });
