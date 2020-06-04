const kill = require("kill-port");
const http = require("http");
const request = require("request");
require("dotenv").config();

const clientId = process.env.REACT_APP_CLIENT_ID;
const secretKey = process.env.REACT_APP_SECRET_KEY;

console.log("started server on port 5000");
kill(5000, "tcp");
http
  .createServer((req, res) => {
    var code = req.url.split("=")[1];
    if (code) {
      kill(3000, "tcp")
        .then(console.log("restarted port 3000"))
        .catch(console.log);
      request.post(
        "https://github.com/login/oauth/access_token",
        {
          form: {
            client_id: clientId,
            client_secret: secretKey,
            code: code,
          },
        },
        (err, r, body) => {
          res.writeHead(301, {
            Location: "http://localhost:3000?" + body,
          });
          res.end();
        }
      );
    } else {
      res.writeHead(404);
      res.end();
    }
  })
  .listen(5000);
