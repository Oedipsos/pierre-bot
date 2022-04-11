const { Client, Intents } = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

client.once("ready", () => {
    console.log("I am ready, now's my time to shine!");
});

client.on("messageCreate", msg => {
    console.log("Got message");
    if (msg.content.charAt(0) == prefix) {
        [_, command, ...args] = msg.content.split(/\s+/)
        switch(command) {
            case "test":
		        msg.channel.send("Piou piou");
		        break;
            case "time":
		        msg.channel.send(getDate());
		        break;
            case "react":
                msg.react('😄');
                break;
            case "reaction_listener":
                msg.channel
                   .send("What do you want?")
                   .then(message => message.react('🅰'));
                break;
	        default:
		       console.log("Command not recognised");
               msg.channel.send("I don't know this command");
        }
    }
});

function getDate() {
    return Date();
}

client.login(token);
