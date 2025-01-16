const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let pathname = q.pathname;

    if (q.pathname === "/") {
      pathname = "/index";
    } else if (q.pathname !== "/about" && q.pathname !== "/contact-me") {
      pathname = "/404";
    }

    let filename = "." + pathname + ".html";

    fs.readFile(filename, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/htmL" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
