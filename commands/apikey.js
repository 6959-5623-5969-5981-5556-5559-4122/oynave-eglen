const helper = require("./helper_code.json");
exports.run = (client, message, args) => {
    let apikey = ((message.author.id*20)/12)/3*9;
        message.channel.sendMessage({embed: {
        color: 1787003,
        author:{
            name: 'Liger BOT|Verify',
            icon_url: message.author.avatarURL,
        },
        description:`Api Keyiniz Dm'ye gonderildi. Lutfen onaylayiniz.`
        }})
        message.author.send({embed: {
            color: 1787003,
            author:{
                name: 'Liger BOT|Verify',
                icon_url: message.author.avatarURL,
            },
            fields: [
                {name: `Api Key`,value: `${apikey}`,},
                {name: `Kullanimi`,value: `Servera giris yapmaniz icin size ozel olan o kodu dogrulatmaniz gerekmektedir.\n Dogrulatma islemide sadece '${helper.prefix}verify <api_key>' yazmaktan ibarettir. `}],
        }})
}