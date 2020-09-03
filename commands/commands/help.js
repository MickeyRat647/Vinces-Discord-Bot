module.exports = {
    name: 'help',
    description: "this is a ping command",
    //where all the code goes to be executed
    execute(message, args){
        helpAuthor = message.author;
        helpAuthor.send('LIST OF COMMANDS FOR MESSAGE BOT');
        helpAuthor.send('/twitch = mickey rats twitch');
        helpAuthor.send('/dm mention someone snd type a message after it to privatly message someone');
        helpAuthor.send('/ping responds with pong');
        helpAuthor.send('/jahfrog posts our king jahfrog in chat');
        helpAuthor.send('/help posts a list of commands');
        helpAuthor.send('LIST OF COMMANDS FOR MUSIC BOT');
        helpAuthor.send('!play add a youtube link and the bot will join your channel and play until the queue has ended');
        helpAuthor.send('!skip skips the current track');
        helpAuthor.send('!stop stops the musci and disconnects the bot');
        message.channel.send('help has been sent');




    }
}