const { Telegraf } = require("telegraf");

const env = require("dotenv");
env.config();

const { BOT_TOKEN } = process.env;

const bot = new Telegraf(BOT_TOKEN);
bot.launch();

console.log("Bot carregado");

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

module.exports = bot;
