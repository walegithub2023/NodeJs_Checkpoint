//include/import/require http module
const http = require("http");

//create server that listens on port 3000
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000/");
});
