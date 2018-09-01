const helper = require("./helper_code.json");
exports.run = (client, message) => {
    if(helper.sender.id == helper.adminID) {
        message.delete()
    .then(message => {if(sender.id == helper.adminID) process.exit();})
    }
    else {
        message.channel.send({embed: {
            color: 0xff0500,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL,
                },
                title: "**Yetkili**",
                description: helper.sender+" Bey Sizin yetkiniz bunu kullanmaya yetmiyor beyfendi.",
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Liger||Yetkili Bot"
                }
            }})
    }
}