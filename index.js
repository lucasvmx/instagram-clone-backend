const express = require("express");
const env = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

env.config();

let listenPort;

const { APP_PORT, PORT } = process.env;

if (APP_PORT === undefined) {
  console.error("APP PORT is undefined");
  listenPort = Number.parseInt(PORT);
}

const app = express();

console.log(`listening on port ${listenPort}`);

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(routes);
app.listen(listenPort);
