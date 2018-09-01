const helper = require("./helper_code.json");
exports.run = (client, message, args) => {
    let api_key = parseInt(args[0]);
    let apikey = ((message.author.id*20)/12)/3*9;
            if(api_key === apikey) {
                message.channel.send({embed: {
                    color: 0x00ff00,
                    author: {name: client.user.username+'|Verify',icon_url: client.user.avatarURL},
                    description: `Hesabiniz dogrulandi.`
                }})
                message.guild.member(message.author).setRoles(['390554731593990145'])
                .then(console.log)
                .catch(console.error);
            }
            else {
                message.channel.send({embed: {
                    color: 0xff0000,
                    author: {
                        name: client.user.name+'|Verify',
                        icon_url: client.user.avatarURL
                    },
                    description: `Yanlis api key. Lutfen tekrar deneyiniz`
                }})
            }
}