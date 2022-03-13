require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.OTM5NDE0MzI3MTU1MzU5Nzg1.Yf4fxQ.kR5POKpNukigpKoSPbTbU4GXdT8;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', msg => {
  if (msg.content === '/ping') {
    msg.reply('pong');
  }
});

client.login(token);
