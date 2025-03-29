interface TelegramSupport extends BotPlugin {
  createBot: (config: BotConfig) => Bot;
}

export default TelegramSupport;
