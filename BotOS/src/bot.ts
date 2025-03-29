import type { TelegramSupport } from "@/types/telegramSupport";
import type { CommandCtx } from "@/types/commands";

const telegram: TelegramSupport = plugin("TelegramSupport");
app.register(telegram.createBot(config));

const cmdParser = require("./services/cmd-parser.js");

const welcome = `Hi! Welcome to ${config.bot.name} ${config.bot.version}.`;

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
app.on("bot/commands/ver", ({ message, replyMsg }: CommandCtx, next) => {
  replyMsg.edit(`🤖 On this bot is installed ${config.bot.name} version ${config.bot.version}`);
  return next();
});
