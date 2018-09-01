const UserD = require("../database/userdata.json")
exports.run = (client, messsage, args) => {
    var UserCoin = UserD[messsage.author.id].coins;
    var UserLevel = UserD[messsage.author.id].level;
    var UserPoints = UserD[messsage.author.id].points;
    messsage.channel.send({embed: {
        color: 1787003,
        author:{
            name: messsage.author.username+'|Profili',
            icon_url: messsage.author.avatarURL,
        },
        fields: [
            {
                name: `**Level**`,
                value: `${UserLevel}/999 \nPuan: ${UserPoints}`
            },
            {
                name: "**Cüzdan**",
                value: `${UserCoin}`
            }
        ]
    }})
}