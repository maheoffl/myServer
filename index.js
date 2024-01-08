const http = require("http");
const fs = require("fs");
const port = 8000;
const myserver = http.createServer((req, res) => {
    const file1 = `${Date.now()} ${req.url} new req recived \n`;
     fs.appendFile("logfile.txt", file1, (err, data) => {
          switch (req.url) {
               case "/":
                    res.end("welcome to home page");
                    break;
               case "/about":
                    res.end("welcome to about page");
                    break;
               case "/contact":
                    res.end("this is contact page");
                    break;
               default:
                    res.end("404 not found");
         }
     })
});

myserver.listen(port, () => console.log(`server started at port:${port}`));