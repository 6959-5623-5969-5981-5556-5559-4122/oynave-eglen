const config = require("../config.json");
const moment = require('moment');
exports.run = (client) => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot şuanda ${client.guilds.size} servera hizemt vermekte,\n Toplamda ${client.users.size} kullanıcıya ulaşmakta.`);
    console.log("Herşey hazır efendim, kullanıcıların komutlarını beklemeteyim.")
    client.user.setGame(`Say ${config.prefix}help`, 'https://www.twitch.tv/turkoglu165/')
  }
