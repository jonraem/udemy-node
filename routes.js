const fs = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body></html>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, () => {
        // Use asynchronous function with callback, not to block execution
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>My first page</title></head><body><h1>Hello</h1></body></html>"
  );
  res.end();
};

module.exports = { requestHandler };
