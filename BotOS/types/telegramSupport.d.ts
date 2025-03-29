export interface TelegramSupport extends BotPlugin {
  createBot: (config: BotConfig) => Bot;
}