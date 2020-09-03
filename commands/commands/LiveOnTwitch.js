module.exports = {
    name: 'live on twitch',
    description: "this posts a message when im live on twitch",
    //where all the code goes to be executed
    execute(message, args){
        message.channel.send('@everyone Mickeys live on twitch, watch him or ill sic terminator on u');
        message.channel.send('https://www.twitch.tv/mickeyratboi');



    }
}