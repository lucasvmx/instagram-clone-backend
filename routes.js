const express = require("express");

const routes = express.Router();

routes.post("/login", async function (req, res) {
  console.log(`${JSON.stringify(req.body)}`);

  return res
    .status(200)
    .json({ login: req.body.name, password: req.body.password });
});

module.exports = routes;
