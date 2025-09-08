const jsonServer = require("json-server");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const server = jsonServer.create();
const middleware = jsonServer.defaults();
const route = jsonServer.router("data.json");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 1250;

server.use(cors());
server.use(middleware);
server.use(route);

server.listen(PORT, () =>
  console.log(`Server is running on http://${HOST}:${PORT}`)
);
