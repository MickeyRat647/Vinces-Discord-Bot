//set = GOOGLE_APPLICATION_CREDINTIALS/pathToFileURL
const Discord = require('discord.js');
const client = new Discord.Client();
const MyId = "606239365320147004"
const LeosId = '287794972479193098'
const prefix = '/'; // the prefix for the commands
const AlastairId = '405502769387274243'
const fs = require('fs');
const { pathToFileURL } = require('url');
const queue = new Map();
const announcments = '747627532756451479'
//const speech = require('@google-cloud/speech')
//const fileneame = C:/users/
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//only uses .js files
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Bot is online!'); // when the bot is online in console there is a message
});

client.on('message', message =>{
    if(message.author.id === AlastairId){
        message.channel.send('*says in a deep voice*');
    }
    if(!message.content.startsWith(prefix) || message.author.bot) return; //if the message dosent start with the prefix it returns
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    
 
    if(command === 'ping'){ //the command
        client.commands.get('ping').execute(message, args); //calls the file and runs it

    } else if(command === 'twitch'){
        client.commands.get('twitch').execute(message,args);

    }else if(command === 'jahfrog'){
        client.commands.get('jahfrog').execute(message,args);

    }else if(command === 'imlive'){
        if (!message.author.id === MyId){
            message.delete();
            message.channel.send(' you cant make mickey live hes not here right now');
            return;};
            client.channels.cache.get('747627532756451479').send('@everyone im live come and watch https://www.twitch.tv/mickeyratboi');

        

    }else if(command === 'dm'){ 
        mention = message.mentions.users.first();
        if(mention == null){return;} //if there is no mention than do nothing
        message.delete();
        Mentionmessage = message.content.slice(25);
        mention.send(Mentionmessage); //sends the message from who sent it
        message.channel.send('the dm has been sent');

    }else if(command === 'help'){
        client.commands.get('help').execute(message,args);

    }
    else if(command === 'purge'){
        if (message.author.id === MyId){
            purgeAmount = message.content.slice(7);
            if(!purgeAmount){
                message.channel.send('you need to specify a amount of messages to be deleted');
                return;
   
            };
            if (isNaN(purgeAmount)){message.channel.send('you need to supply a valid number')
            return;
            };
            if (purgeAmount > 100){message.channel.send('you cannot purge more than 100 messages');
            return;};
            if (purgeAmount < 1){message.channel.send('you have to delete at least one message')
            return};
            };
            if (isNaN(purgeAmount)){message.channel.send('you need to supply a valid number')
            return;
            }else if(!message.author.id === MyId){
            message.channel.send('you cannot use this command only people with manage messages can use this command');
        }
        message.channel.bulkDelete(purgeAmount);
    }
   
    else{
        message.channel.send('you have to enter a valid command');
        message.channel.send('use /help to get a list of commands');
    }
    
    

});


 // the login token
client.login(process.env.TOKEN);
 
 
