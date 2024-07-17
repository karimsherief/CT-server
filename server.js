const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
const cors = require("cors");

server.use(cors());

server.use(middlewares);
server.use(router);

server.listen(port);
