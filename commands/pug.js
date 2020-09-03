const { Client } = require("discord.js");

module.exports = {
name: 'pug',
    description: "posts a pug in only pug",
    //where all the code goes to be executed
    execute(message, args){
        client.channels.cache.get('739653329117773892').send('https://media.discordapp.net/attachments/723115969555333283/739625089087045682/734693256134131718.gif');
        message.channel.send('pug has been posted in pug-only!');




    }
}