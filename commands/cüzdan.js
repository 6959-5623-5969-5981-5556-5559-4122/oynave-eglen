const Discord = require("discord.js");
let coins = require("../database/coinsData.json");
exports.run = (client, messsage, args) => {

    if (!coins[messsage.author.id]) {
        coins[messsage.author.id] = {
            coins: 0
        };
    }
    let uCoins = coins[messsage.author.id].coins;
    messsage.channel.send({embed: {
        color: 1787003,
        author: {
            name: messsage.author.username+'|Cüzdanı',
            icon_url: messsage.author.avatarURL,
        },
        fields: [
            {
                name: `**Coins:**`,
                value: uCoins
            },
        ]
    }})
}