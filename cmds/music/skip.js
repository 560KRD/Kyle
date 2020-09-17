module.exports.run = async (bot, msg, args) => {
    const { canModifyQueue } = require("../../util/Kylebotutil.js");

    const queue = msg.client.queue.get(msg.guild.id);
    if (!queue)
      return msg.reply("There is nothing playing that I could skip for you.").catch(console.error);
    if (!canModifyQueue(msg.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${msg.author} ⏭ skipped the song`).catch(console.error);
}

module.exports.help = {
    name: "skip"
}