// requestServer.js file
const http = require("http");
const request = require("request");
const port = 7777;
// example http server creation
http.createServer(function(req,res){
    //handle response
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body.data);
}).listen(port);

request({url:"https://github.com/misla25"}, function(err, resp, body) {
    if (!body || !resp || (err === null && response.statusCode !== 200)){
        resp.end("bad URL\n");
        return;
        // error.toString()
        // res.end();
    }
    res.writeHead(resp.statusCode, {'Content-Type': 'text/plain'});
    });
