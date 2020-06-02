const http = require("http");
const requestHandler = require("./routes").requestHandler;

const server = http.createServer(requestHandler);

server.listen(3000);
