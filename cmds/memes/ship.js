module.exports.run = async (bot, msg, args) => {
	let perc = Math.floor(Math.random() * 101);
	const Discord = require('discord.js');
	let mentions = msg.mentions.members.array() || new Array();
	let mentioned1 = mentions[0];
	let mentioned2 = mentions[1];

	if (!mentioned1 || !mentioned2)
		return msg.channel.send(`u that sad u cant find someone to ship. SMH (.ship <@> <@>)`);

	if (mentioned1.id === '698051518754062387' || mentioned2.id === '698051518754062387') perc = '-0';

	if (
		(mentioned1.id === '698051518754062387' && mentioned2.id === '713878109509779516') ||
		(mentioned1.id === '713878109509779516' && mentioned2.id === '698051518754062387')
	)
		perc = ':hot_face: 1000 :hot_face:';

	if (
		(mentioned1.id === '698051518754062387' && mentioned2.id === '228230808584978442') ||
		(mentioned1.id === '228230808584978442' && mentioned2.id === '698051518754062387')
	)
		perc = 'HARAM Fuck No bitch HARAM';

	if (
		(mentioned1.id === '542196378940473354' && mentioned2.id === '576362222964572180') ||
		(mentioned1.id === '576362222964572180' && mentioned2.id === '542196378940473354')
	)
		perc = 'HALAL YES DADDY PLEASE HALAL';

	if (
		(mentioned1.id === '723144931153281104' && mentioned2.id === '375037560931745794') ||
		(mentioned1.id === '375037560931745794' && mentioned2.id === '723144931153281104')
	)
		perc = 'HALAL YES DADDY PLEASE HALAL';

	let ShipEmbed = new Discord.MessageEmbed()
		.setTitle(`Shiping ${mentioned1.user.username} & ${mentioned2.user.username}`)
		.setColor(0x32cd32)
		.setThumbnail(mentioned1.user.avatarURL())
		.setImage(mentioned2.user.avatarURL())
		.setDescription(`**${perc}% secy time :tired_face:**`);
	msg.channel.send(ShipEmbed);
};

module.exports.help = {
	name: 'ship',
	description: 'Ship two people together',
};
