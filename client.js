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
    } else if (msg.content.charAt(0) == prefix) {
        [_, command, ...args] = msg.content.split(/\s+/)
        switch(command) {
            case "test":
		msg.channel.send("Piou piou");
		break;
            case "time":
		msg.channel.send(getDate());
		break;
	    default:
		console.log("Command not recognised");
        }
    } else {
	console.log(`Invalid command call, please use ${prefix}`);
    }
});

function getDate() {
    return Date();
}

client.login(token);
