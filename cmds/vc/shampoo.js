module.exports.run = async (bot, msg, args) => {
    const vc = require('../../functions/vc.js').vc;
    
    var VC = msg.member.voice.channel;
    vc("shampoo",1.2,VC,msg.author.id,msg.channel)
    msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/750757207284645908/video0.mp4");
}

module.exports.help = {
    name: "shampoo"
}