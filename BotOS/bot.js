/// <reference path="./types.d.ts" />

const telegram = plugin("TelegramSupport");
app.register(telegram.createBot(config));

const cmdParser = require("./services/cmd-parser.js");

const welcome = `Hi! Welcome to BotOS ${config.bot.version}.`;

app.on("ready", (_ctx, next) => {
  console.log(welcome);
  return next();
});

app.on("telegram.ready", (_ctx, next) => {
  console.log("Telegram endpoint ready!");
  return next();
});

// Register services
cmdParser(app, config);

// Register commands
app.on("bot/commands/start", ({message, replyMsg}, next) => {
  replyMsg.edit("Hello!");
  return next();
});
