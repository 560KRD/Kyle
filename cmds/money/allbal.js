module.exports.run = async (bot, msg, args) => {
	const Discord = require('discord.js');
	const db = require('quick.db');
	var economy = new db.table('economy');

	var allusers = (await msg.guild.members.fetch()).keyArray('id');
	var usersplaying = [];
	var usersplayingmoney = [];
	var send = [];

	for (let x = 0; x <= allusers.length; ++x) {
		if (economy.has(`${allusers[x]}.bal`)) {
			usersplaying.push(allusers[x]);
		}
	}
	for (let x = 0; x < usersplaying.length; ++x) {
		usersplayingmoney.push(economy.get(`${usersplaying[x]}.bal`));
	}

	usersplayingmoney.sort((a, b) => a - b);
	usersplayingmoney.reverse();

	for (var i = 0; i < usersplayingmoney.length; ++i) {
		for (var n = 0; n < usersplaying.length; ++n) {
			if (usersplayingmoney[i] === economy.get(`${usersplaying[n]}.bal`)) {
				send.push(`${(await msg.guild.members.fetch(usersplaying[n])).displayName} -- ${usersplayingmoney[i]}💰`); // prettier-ignore
				usersplaying.splice(n, 1);
			}
		}
	}

	let topbaly = new Discord.MessageEmbed()
		.setTitle(`**BALANCE**`)
		.setColor('#0099ff')
		.setDescription(send);
	msg.author.send(topbaly).catch(() => {
		return msg.reply("I can't DM you. Did you block me?");
	});
	msg.channel.send("Check your Dm's");
};

module.exports.help = {
	name: 'allbal',
	description: 'Check everyones ballance',
};
