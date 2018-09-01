const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const moment = require("moment");
const config = require("./config.json");
const weather = require('weather.js');
let points = JSON.parse(fs.readFileSync("./database/levelData.json", "utf8"));
let coins = require("./database/coinsData.json")
var prefix = config.prefix;
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`)
};
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  //level --------------------------------------------------------
  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let levelData = points[message.author.id];
  levelData.points++;
  let curLevel = Math.floor(0.1 * Math.sqrt(levelData.points));
  if (curLevel > levelData.level) {
    levelData.level = curLevel;
    message.channel.send({embed: {
      color: 1787003,
      author:{
        name: client.user.username+`|Level${levelData.level}`,
        icon_url: client.user.avatarURL,
      },
      description: "Hadi yine iyiysin he level atladın.",
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text:"@449283187559104525 Tarafından Kodlanmıştır.|"
      }
    }})
  }
  fs.writeFile("./database/levelData.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
//-------------------------coins----------------------------------
if(!coins[message.author.id]) {
  coins[message.author.id] = {
    coins: 0
  };
}
let coinAmt = Math.floor(Math.random() * 15) + 1;
let baseAmt = Math.floor(Math.random() * 15) + 1;
console.log(`${coinAmt} ;${baseAmt}`);

if(coinAmt === baseAmt) {
  coins[message.author.id] = {
    coins: coins[message.author.id].coins + coinAmt
  };
  fs.writeFile("./database/coinsData.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#0000FF")
    .addField("💸", `${coinAmt} coins eklendi!`);
    message.channel.send(coinEmbed).then(message => {message.delete(5000)})
}
//-----------------------------------------------------------------
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
client.login(config.token);
