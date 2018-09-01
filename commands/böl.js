const moment = require("moment")
exports.run = (client, message) => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.username}! BOT: Hesap makinesi(bölme) kullanıldı`)
        let [num1, num2] = [parseInt(args[0]), parseInt(args[1])]
        message.channel.sendMessage({embed: {
            color: 1787003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL,
                text: "Hesapmakinesi|Bölme"
            },
            description: ':page_facing_up:|Sonuç: '+`**${num1 / num2}**`,
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text:"Liger|Ali Furkqn Tarafından Kodlanmıştır.|"
            }}})
}