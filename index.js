const TelegramBot = require("node-telegram-bot-api");

const token = "TELEGRAM-BOT-TOKEN";
const bot = new TelegramBot(token, { polling: true });

let chatId;

bot.on("message", (msg) => {
  chatId = msg.chat.id;
});

bot.on("new_chat_members", async (ctx) => {
  if (!ctx.new_chat_members) return;

  if (ctx.new_chat_members.some((user) => !user.is_bot)) {
    await bot.sendMessage(chatId, "MANDA");
    await bot.sendMessage(chatId, "FOTO");
    await bot.sendMessage(chatId, "DO");
    await bot.sendMessage(chatId, "PÉ");
  }
});
