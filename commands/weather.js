const Discord = require("discord.js");
const weather = require('weather-js');
exports.run = (client, message, args) => {
    weather.find({search: args.join(" "), degreeType: 'C' }, function(err, result) {
        if(err) message.channel.send(err);
        var current = result[0].current;
        var location = result[0].location;
        const embed = new Discord.RichEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor(1787003)
            .addField('Yerel Saat', `UTC${location.timezone}`, true)
            .addField('Sıcaklık Birimi',location.degreetype, true)
            .addField('Sıcaklık',`${current.temperature} C`, true)
            .addField('Hissedilen Sıcaklık', `${current.feelslike} C`, true)
            .addField('Rüzgar',current.winddisplay, true)
            .addField('Nem', `${current.humidity}%`, true);
            message.channel.send({embed});

    });
}