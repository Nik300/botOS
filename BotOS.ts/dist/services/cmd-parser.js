"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports = (app, config) => {
    var _a;
    const prefix = ((_a = config.options) === null || _a === void 0 ? void 0 : _a.prefix) || "/";
    app.on("message", (_a, next_1) => __awaiter(void 0, [_a, next_1], void 0, function* ({ message, replyMsg }, next) {
        if (!message.text.startsWith(prefix))
            return next();
        // extract command text
        var commandTxt = message.text.slice(prefix.length);
        console.log("Triggered command: " + commandTxt);
        // trigger command handler
        yield app.trigger(`bot/commands/${commandTxt}`, {
            message: message,
            replyMsg,
            command: commandTxt
        });
        return next();
    }));
};
