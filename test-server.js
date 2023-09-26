const http = require("http");
const port = process.argv[2];

http.createServer(function(req,res){
  // handle response
  res.writeHead(200,{'Content-Type': 'text/plain'});
res.write('for the first time ');
res.end('in FOREVER')
}).listen(port);


//172.24.15.209