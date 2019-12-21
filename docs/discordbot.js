var discord = require("discord.js");
var client = new discord.Client();
//console.log(client);

client.on('ready', () =>
{
    console.log('logged in as ' + client.user.tag);
});

client.on('message', message =>
{
    //console.log(message.content);
    if(message.content.toLowerCase().indexOf('nigger') >= 0)
    {
        const user = message.member;
        console.log(user);
        if(user)
        {
            user.kick().then(() => message.channel.send(`Kicked ${user.displayName}`))
            .catch(console.error);
        }
        else
        {
            console.log("uh oh stinky");
        }
    }
    if (message.content === 'uh oh') {
        message.channel.send('stinky');
    }
    if((message.content.toLowerCase().indexOf('coffee') >= 0 || message.content.toLowerCase().indexOf('cheetos') >= 0 || message.content.toLowerCase().indexOf('chicken') >= 0) && message.member.id != "657752774079021076")
    {
        message.channel.send('AWH COFFEE, CHEETOS, CHICKEN', {
            files: ["https://i.ytimg.com/vi/DPBGmYEE5ek/maxresdefault.jpg"]
        });
    }
});

client.login('NjU3NzUyNzc0MDc5MDIxMDc2.Xf1zNw.KUbMgZb91d4pemuusXRC56NbLKM');
