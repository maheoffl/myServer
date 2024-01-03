const http = require("http"); //this line imports http module/package and stores in http
const myServer = http.createServer((req, res) => {
    console.log("new request ");
    res.end("hello from server");

});
//creating a server using createserver built-in this accepts a handler fn that takes request from client and response to client 

myServer.listen(8000, () => console.log("server started")); //this can start server at 8000 port in local
