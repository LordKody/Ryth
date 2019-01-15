const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  } else if (message.content.startsWith("andre")) {
    message.channel.send("sux!");
  }
});
 
client.login("NTM0ODQ1NDcxNTg4MzUyMDAw.Dx_2Kw.ACSlOD8PxTDX9WylXbJDShHnF7M");
