module.exports.run = async (bot, msg, args) => {
	const Discord = require('discord.js');
	const Fs = require('fs');
	const prefix = process.env.PREFIX;

	let balhelp = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('**Money Commands**')
		.setURL('https://sites.google.com/view/kyle-bot/home')
		.setThumbnail(
			'https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png'
		)
		.addFields(
			{
				name: 'Check out the commands on our website',
				value: '`_____________________________________`',
			},
			{ name: '**Money Commands**', value: '`______________`' }
		);

	Fs.readdir('./cmds/money/', (err, files) => {
		if (err) console.error(err);

		let jsfiles = files.filter((f) => f.split('.').pop() === 'js');

		jsfiles.forEach((f, i) => {
			f = f.slice(0, f.length - 3);
			balhelp.addFields({ name: `**${prefix}${f}**`, value: i + 1, inline: true });
		});

		msg.channel.send(balhelp);
	});
};

module.exports.help = {
	name: 'moneyhelp',
};
