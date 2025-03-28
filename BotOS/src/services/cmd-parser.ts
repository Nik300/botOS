exports = (app: App, config: BotConfig) => {
    const prefix = config.options?.prefix || "/";

    app.on("message", async ({message, replyMsg}, next) => {
        if (!message.text.startsWith(prefix)) return next();

        // extract command text
        var commandTxt = message.text.slice(prefix.length);
        console.log("Triggered command: " + commandTxt);

        // trigger command handler
        await app.trigger(`bot/commands/${commandTxt}`, {
            message: message,
            replyMsg,
            command: commandTxt
        })

        return next();
    });
}
