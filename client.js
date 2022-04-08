const { Client, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once("ready", () => {
    console.log("I am ready, now's my time to shine!");
});

client.on("messageCreate", msg => {
    console.log("Got message");
    if (msg.content == "Bonjour Pierre!") {
        msg.channel.send("Bonjour toi!")
            .then(message => {console.log(`Sent message : ${message.content}`)})
            .catch(console.error);
    } 
});

client.login(token);
