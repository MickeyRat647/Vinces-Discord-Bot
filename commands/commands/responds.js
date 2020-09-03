module.exports = {
    name: 'responds',
    description: "this reponds to any ping in a certain channel",
    //where all the code goes to be executed
    execute(message, args){
        message.channel.send('pong!');




    }
}