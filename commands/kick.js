const Discord = require("discord.js");
exports.run = (client, messsage, args) => {
	if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("Senin yetkin yetmiyor bru.");
	if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("benim ona yetkim yok efendim.");
	let user = message.mentions.users.first();
	let reason = messsage.content.split(" ").slice(2).join(" ");
	let modlog = client.channels.find("name", "developer");
	
	if(!modlog) return message.reply("Kontrol kanalı yoktur.Lütfen bir tane oluşturun.");
	if(message.mentions.users.size < 1) return message.reply("biraz insan olsun leğn");
	if(!reason) return message.reply("Bir gerekçesi olması lazım");
	if(!message.guild.member(user)
	.kickable) return message.reply("Kendinden yüksek birini atmaya nasıl cürret edersin.");
	
	message.guild.member(user).kick();
	
	const kickembed = new Discord.RichEmbed()
	.setAuthor(`Ben ${user.username} kişisini kickledim haydi eyw.`, user.displayAvatarURL)
	.addField("Kick Bilgisi:", `**Kicklenen kullanıcı: ** ${user.tag}\n**Moderatör: **${message.author.tag}\n**Nedeni:** ${reason}`);
	modlog.send({
		embed: kickembed
	})
 }
