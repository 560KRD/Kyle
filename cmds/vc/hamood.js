module.exports.run = async (bot, msg, args) => {
    const vc = require('../../functions/vc.js').vc;
    
    var VC = msg.member.voice.channel;
    vc("hamood",.5,VC,msg.author.id,msg.channel)
    msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/738867948495568976/Hamood_habibi.mp4");
    
}

module.exports.help = {
    name: "hamood"
}