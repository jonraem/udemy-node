const fs = require("fs");

const users = ["User 1", "User 2", "User 3"];

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>My website</title></head>");
    res.write(
      "<body><h1>Hello my man!</h1><p>Welcome to this website.</p><form action='/create-user' method='POST'><input type='text' name='user'><button type='submit'>Add user</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/users") {
    res.write("<html>");
    res.write("<head><title>My users</title></head>");
    res.write("<body><ul>");
    users.forEach((user) => {
      res.write(`<li>${user}</li>`);
    });
    res.write("</ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (req.url === "/create-user" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log("Added new user: ", user);
      users.push(user);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
};

module.exports = { handler: requestHandler };
