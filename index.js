"use strict";

require("dotenv").config();
const { Client, Intents, Message } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;
const BOTCHANNEL = process.env.BOTCHANNEL;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});
const MESSAGE_RESPONSE = process.env.MESSAGE_RESPONSE;
const MESSAGE_RESPONSE2 = process.env.MESSAGE_RESPONSE2;
function gotMessage(message) {
  /* This function handler all new messages
      include the messages created by the bot
      be carefull of who & what replay
  */
    switch(message){
      case 1:{
        message.content == "hola";
        let randomIndex = Math.floor(Math.random() * MESSAGE_RESPONSE.length);
        message.channel.send(MESSAGE_RESPONSE[randomIndex]);
        break;}
      case 2:{
        message.content == "verga";
        let randomIndex2 = Math.floor(Math.random() * MESSAGE_RESPONSE2.length);
        message.channel.send(MESSAGE_RESPONSE2[randomIndex2])
        break;}
      default:{
        message.content.BOTCHANNEL;
        message.channel.send("Hable bien");
        break;}
    }
  }
client.on("messageCreate", gotMessage);
// Login to Discord with your client's token
client.login(TOKEN);
