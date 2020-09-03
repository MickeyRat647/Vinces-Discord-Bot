module.exports = {
    name: 'ping',
    description: "this is a ping command",
    //where all the code goes to be executed
    execute(message, args){
        message.channel.send('pong!');




    }
}