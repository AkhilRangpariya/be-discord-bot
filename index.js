const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
console.log("data not found");
    //   if (message.author.bot) return;
//   message.reply({
//     content: "Hi From Bot!",
//   });
});

client.login(
  ""
);
