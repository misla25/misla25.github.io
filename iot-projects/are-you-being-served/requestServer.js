// requestServer.js file
const http = require("http");
const request = require("request");
const port = 7777;
// example http server creation
http.createServer(function(req,res){
    //handle response
    //request("https://github.com/misla25",request());
}).listen(port);
// function(req,res){
//     request("https://github.com/misla25");
// }
request({url:"https://github.com/misla25"}, function(err, resp, body) {
    if (!err && resp.statusCode === 200) {
      console.log(body.data);
    }
});
