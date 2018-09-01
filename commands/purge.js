const moment = require("moment")
const config = require("../config.json");
exports.run = (client, message, args) => {
    let purge_num = parseInt(args[0]);
    message.delete();
    var sender = message.author;
    if(sender.id !== config.ownerID) {
        message.channel.send({embed: {
            color: 0xff0500,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL,
                },
                title: "**Yetkili**",
                description: "Sizin yetkiniz bunu kullanmaya yetmiyor beyfendi.",
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "Turkoglu"
                }
            }})
        return;
    }
    if(isNaN(args[0])) {
        message.channel.send({embed: {
        color: 0xff8040,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL,
            },
            title: "**Yetkili**",
            description: "Lütfen bir sayı giriniz. ..purge <değer>",
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: "Turkoglu"
            }
        }});
    return;
    }
    if(purge_num<=1) {
        message.channel.send({embed: {
        color: 0xff8040,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL,
            },
            title: "**Yetkili**",
            description: "Lütfen bir sayı giriniz. ..purge <değer>",
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: "TurkOglu"
            }
        }});
    return;
    }
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username}! BOT: ${purge_num} Mesaj ${sender} silindi`);
    message.channel.bulkDelete(purge_num+1);
    message.channel.send({embed: {
        color: 0x00ff00,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL,
            },
            title: "**Yetkili**",
            description: `Başarıyla ${purge_num} mesaj ${sender} tarafından silindi ` ,
            timestamp: new Date(),
            footer: {
            icon_url: client.user.avatarURL,
            text: "turkoglu"
            }
        }})
    }
