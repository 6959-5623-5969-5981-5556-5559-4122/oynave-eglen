exports.run = (client, message) => {
message.channel.send({embed: {
    color: 1787003,
    author:{
        name: client.user.username+'|Help(Yardım)',
        icon_url: client.user.avatarURL,
    },
    fields: [
        {
            name: "..help <komut>",
            value: "İstediğiniz komutun helpini gösterir"
        },
        {
            name: "..ping",
            value: "**BAKIMDA**"
        },
        {
            name: "Hesap Makinesi Komutları",
            value: ":arrow_right: ..topla <num1> <num2>\n:arrow_right: ..çıkar <num1> <num2>\n:arrow_right: ..çarp <num1> <num2>\n:arrow_right: ..böl <num1> <num2>\n **Devamı Gelecek...**",
        },
        {
            name:"Fhormm Komutu",
            value:'**BAKIMDA**'
        },
        {
            name:"Müzik Komutları",
            value:"**BAKIMDA**",
        },
        {
            name: "Translate Komutları",
            value: "**BAKIMDA**"
        },
        {
            name:"Moderasyon Komutları",
            value:"**..purge temizlenecek mesaj**"
        },
        {
            name:"Eğlence",
            value:"**BAKIMDA**"
        }
    ]
}})}
