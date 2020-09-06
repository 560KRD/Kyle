const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World! this is \nKyle the bot'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));



const Discord = require("discord.js");
const {Client, Attachment} = require("discord.js");
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fetch = require("node-fetch");
var opusscript = require("opusscript");
require('dotenv').config();

const talkedRecently = new Set();


const moment = require("moment");
const Console = console;
let options = {
    total: "channel id",
    users: "channel id",
    bots: "channel id"
};

const token = process.env.TOKEN;
const prefix = '.';
const version = "1.5.0";
const helplink = "https://sites.google.com/view/kyle-bot/home";
const auther = "alide123321#9518";
const queue = new Map();
const Fs = require('fs');
const { userInfo } = require('os');
const { ALL } = require('dns');

var moneyhelp = [
  "**" + prefix + "newbal________use this command first**",
  "**" + prefix + "daily_________adds 10 coins everyday**",
  "**" + prefix + "pay___________pay someone**",
  "**" + prefix + "bal___________to check your balance**",
  "**" + prefix + "topbal________Check who the richest person in server is**"
]
var gamblhelp = [
  "**" + prefix + "flip__________A fifty fifty chance of winning**",
  "**" + prefix + "dice__________Roll a dice if you get it right you get 3X your bet but if you lose then you lose your bet**",
  "**" + prefix + "bj____________Play Black Jack**",
  "**" + prefix + "rps___________Play Rock Paper scissors**"
]
var modshelp = [
  "**" + prefix + "help__________will bring up this page**",
  "**" + prefix + "website_______Do you to check put our website?**",
  "**" + prefix + "ping__________will tell you if the bot is online**",
  "**" + prefix + "clear <#>_____clears the messages above it by #**", 
  "**" + prefix + "info__________more information about the bot**",
  "**" + prefix + "report________to report anything related to this server DM me**",
  "**" + prefix + "announce <#><title>_after that the bot will ask for the description**",
  "**" + prefix + "whois<@>______Find information about a user**",
];
var funhelp = [
  "**" + prefix + "memes_________for the best memes**",
  "**" + prefix + "spam__________will spam whatever you tell it to 5X**",
  "**" + prefix + "shhdm<@><msg>_Send a anonymous message to someone**",
  "**" + prefix + "oof___________to show the oof**", 
  "**" + prefix + "emilie________STFU emilie**",
  "**" + prefix + "Simp__________Simp bucks**",
  "**" + prefix + "haram_________Haram**",
  "**" + prefix + "blue__________Scary blue**",
  "**" + prefix + "our___________Our stuff**",
  "**" + prefix + "smh___________disappointed**",
  "**" + prefix + "kith__________gimme kith**",
  "**" + prefix + "wtf___________wtf?**",
  "**" + prefix + "bruh__________that face**",
  "**" + prefix + "pardon________PARDON.**",
  "**" + prefix + "halal_________absolutely halal**",
  "**" + prefix + "gn<@>_________Say GN to anyone better if u @ them**",
  "**" + prefix + "gm<@>_________Say GM to anyone better if u @ them**",
  "**" + prefix + "frog__________Frog someone**"
];
var VChelp = [
  "**" + prefix + "okok__________PopSmoke's OK OK**",
  "**" + prefix + "woo___________Woo back**",
  "**" + prefix + "hamood________Arab**", 
  "**" + prefix + "itis__________IT IS WHAT IT ISSS**",
  "**" + prefix + "stop__________just stop**",
  "**" + prefix + "cough_________Weed cough**",
  "**" + prefix + "kanye_________shut the fuck up!**",
  "**" + prefix + "rock__________Shut up bitch!**",
  "**" + prefix + "mad___________HOES MAD!!!**",
  "**" + prefix + "gay___________HES GAY!!!**",
  "**" + prefix + "sad___________it's actually changes by x**",
  "**" + prefix + "smoothie______im about to try my smoothie**",
  "**" + prefix + "itsme_________its me im**",
  "**" + prefix + "unwise________ming dynasty pussy**",
  "**" + prefix + "shampoo_______HAHA shampoo**",
  "**" + prefix + "notme_________Who the fuck wanna listen to that**",
  "**" + prefix + "graduate______you think u can graduate**",
  "**" + prefix + "egg___________Egg man**"
];




bot.once("ready", () => {
  console.log("Ready!");
  console.log("prefix:" + prefix);
  console.log("version:" + version);
  bot.user.setActivity(" DM me "+prefix+"Help");
});

bot.on('guildMemberAdd', member => {
  if(member.guild.id === '599061990828277770'){
    member.guild.channels.cache.get('716939268504813578').send("Welcome to "+member.guild.name+", <@" + member.user.id + ">! To get started, visit <#709238410732240906> and react then go on to <#716212510398873651>. Enjoy your stay! <:goodnight:716209532233318472> <:cheemspray:716217215275237427>"); 
    serverstats(member);
  }
});


bot.on("guildMemberRemove", (member) => {
  if(member.guild.id === '599061990828277770'){
    serverstats(member);
  }
});



bot.on('messageReactionAdd', async (reaction, user) => {
  if(!user || user.bot || !reaction.message.channel.guild) 
    return;

    if(reaction.message.channel.id === "709238410732240906")
        await reaction.message.guild.members.cache.get(user.id).roles.add("716092067243098174")

    
    if(reaction.message.channel.id === "740809935247507566"){
      if(reaction.emoji.name === 'movie_night')
        await reaction.message.guild.members.cache.get(user.id).roles.add("740828341069676594")

      if(reaction.emoji.name === 'game_night')
        await reaction.message.guild.members.cache.get(user.id).roles.add("740828344794349658")

      if(reaction.emoji.name === 'pc')
        await reaction.message.guild.members.cache.get(user.id).roles.add("740828981179318343")
        
      if(reaction.emoji.name === 'ps')
        await reaction.message.guild.members.cache.get(user.id).roles.add("740828983071080470")

      if(reaction.emoji.name === 'xbox')
        await reaction.message.guild.members.cache.get(user.id).roles.add("740828984660590672")
    }
    
})

bot.on('messageReactionRemove', async (reaction, user) => {
  if(!user || user.bot || !reaction.message.channel.guild) 
    return;

    if(reaction.message.channel.id === "709238410732240906")
        await reaction.message.guild.members.cache.get(user.id).roles.remove("716092067243098174")

    
    if(reaction.message.channel.id === "740809935247507566"){
      if(reaction.emoji.name === 'movie_night')
        await reaction.message.guild.members.cache.get(user.id).roles.remove("740828341069676594")

      if(reaction.emoji.name === 'game_night')
        await reaction.message.guild.members.cache.get(user.id).roles.remove("740828344794349658")

      if(reaction.emoji.name === 'pc')
        await reaction.message.guild.members.cache.get(user.id).roles.remove("740828981179318343")
        
      if(reaction.emoji.name === 'ps')
        await reaction.message.guild.members.cache.get(user.id).roles.remove("740828983071080470")

      if(reaction.emoji.name === 'xbox')
        await reaction.message.guild.members.cache.get(user.id).roles.remove("740828984660590672")
    }
    
})



var temporary = [] // private vc
var temporaryw = [] // private vc waitting room

bot.on('voiceStateUpdate', async (oldState, newState,) => {

  if (newState.channelID === '746447827055673434') {
      newState.guild.channels.create(newState.member.user.username + " [private room] ", {

        type: 'voice',
        parent: '707452089453903943',
        
      }).then(vc => {

        vc.overwritePermissions([
          {
            id: newState.id,
            allow: ['MOVE_MEMBERS']
          },
          {
            id: newState.id,
            allow: ['CONNECT']
          },
          {
            id: '599061990828277770',
            deny: ['CONNECT']
          }
        ]);

        newState.setChannel(vc);
        temporary.push(vc);
      });

      newState.guild.channels.create(newState.member.user.username + " [waiting room] ", {

        type: 'voice',
        parent: '707452089453903943'

      }).then(vc => {
        vc.overwritePermissions([
          {
            id: newState.id,
            allow: ['MOVE_MEMBERS']
          },
          {
            id: '599061990828277770',
            deny: ['SPEAK']
          },
          {
            id: '599061990828277770',
            allow: ['CONNECT']
          },
          {
            id: newState.id,
            allow: ['CONNECT']
          }
          
        ]);
        temporaryw.push(vc);
      });

      
}



if(temporary.length > 0) {

  for(let i = 0; i < temporary.length; i++) {

    let ch = temporary[i]
    let chw = temporaryw[i]
      
    if(ch.members.size <= 0){

      await ch.delete();
      await chw.delete();

      temporary.splice(i, 1);
      temporaryw.splice(i, 1);
      return;}
    }
  }
});


bot.on("message", async msg => {

  if (msg.author.bot) return;

  if (msg.guild === null) 
    if (msg.content.charAt(0) !== prefix)
      msg.author.send("LOL stupid thats not a command try .help")
    
  

  if (msg.author.bot || !msg.content.startsWith(prefix)) return; // Ignore the message if it's from a bot or doesn't start with the prefix.

  let args = msg.content.substring(prefix.length).split(" ");
  let text = msg.content;


  if (msg.guild === null) {

    let sender = msg.author;

    if (text.charAt(0) !== "."){
      sender.send("LOL stupid thats not a command try .help")
    }


    var dmhelp = [
      "**" + prefix + "help__________will bring up this page**",
      "**" + prefix + "report________to report someone/something in the Wonderland server**"
    ];

    switch (args[0]) {

      case "help":{
        let help = new Discord.MessageEmbed()
          .setColor(0X0099ff)
          .setTitle("All the commands")
          .setURL("https://discord.gg/gBQc5cm")
          .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
          .setDescription(dmhelp)
          .setFooter("I have diffrent commands if use me inside a server")
        
        sender.send(help);
          
      break;}

      case "report":{

        let sender = msg.author;

        if(!args[1]) {
          const embed = new Discord.MessageEmbed()
          .setColor(0xde3333)
          .setTitle('404')
          .setDescription('What do you want to report (only administrators will see your report)')
          sender.send(embed)
        }else {
          let msgArgs = args.slice(1).join(" ");
      
          
          let Wonderland = bot.channels.cache.get('719454080543490058'); // Wonderland channelReports
        
        
          let embed = new Discord.MessageEmbed()
          .setColor(0X71b3f5)
          .setTitle('Report status:')
          .setDescription('Your report has been successfully filed! :upside_down:')
          sender.send(embed);
          
        
          let reportData = new Discord.MessageEmbed()
          .setColor(0X71b3f5)
          .setTitle(msg.author.username + '\'s Report:')
          .setDescription(msgArgs)
          .setFooter("at: "+msg.createdAt)
        
          
              Wonderland.send(reportData);
          
        }
      break;}

      default:{
        sender.send("LOL stupid thats not a command try .help")
      break;}

    }}

    if (msg.guild === null) return;

    let serverID = msg.guild.id;


  let SWonderland = '599061990828277770'; // Wonderland server ID
  if (serverID == SWonderland){
    let Wonderland = bot.channels.cache.get('730388529171136522')
    if (Wonderland === msg.channel.id)
      msg.channel.bulkDelete(2);

  }

  switch (args[0]) {

    //----- start of economy -----//
    case "newbal": {
      var UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));

      if (UserJSON[msg.author.id]) {
        let WarningEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You are already in the system")
        msg.channel.send(WarningEmbed);
        return;}

      UserJSON[msg.author.id] = {
        bal : 100,
        lastclaim : 0,
      }
      Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));

      let SuccessEmbed = new Discord.MessageEmbed()
        .setTitle("**WELCOME**")
        .setColor(0X32CD32)
        .setThumbnail(msg.author.avatarURL())
        .setDescription("You have joined the economy!")
      msg.channel.send(SuccessEmbed);
      break;}

    case "daily": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));

      if (!UserJSON[msg.author.id]) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You are not in the system try .newbal")
          msg.channel.send(ErrorEmbed);
        return;}

      if (Math.floor(new Date().getTime() - UserJSON[msg.author.id].lastclaim) / (1000 * 60 * 60 * 24) < 1) {
        let WarningEmbed = new Discord.MessageEmbed()
          .setTitle("**Daily**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You have claimed today already")
        msg.channel.send(WarningEmbed);
        return;}

      UserJSON[msg.author.id].bal += 50;
      UserJSON[msg.author.id].lastclaim = new Date().getTime();
      Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
      let SuccessEmbed = new Discord.MessageEmbed()
        .setTitle("**SUCCESS**")
        .setColor(0X32CD32)
        .setThumbnail(msg.author.avatarURL())
        .setDescription("You have claimed your daily reward of 50 coins!")
      msg.channel.send(SuccessEmbed);

      break;}

    case "pay": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));
      let Money = args[1];

      if (!Money) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("Please specify an amount to give .pay <#> <@>")
        msg.channel.send(ErrorEmbed);
      return;}

      if (!UserJSON[msg.author.id]) {
      let ErrorEmbed = new Discord.MessageEmbed()
        .setTitle("**ERROR**")
        .setColor(0XFF0000)
        .setThumbnail(msg.author.avatarURL())
        .setDescription("You are not in the system try .newbal")
        msg.channel.send(ErrorEmbed);
      return;}

      if (isNaN(Money)) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("Please specify a number .pay <#> <@>")
        msg.channel.send(ErrorEmbed);
      return;}

      if (UserJSON[msg.author.id].bal < Money) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You do not have enough money")
        msg.channel.send(ErrorEmbed);
      return;}

      if (Money.indexOf(".") != -1 || Money.indexOf("-") != -1 || Money == 0) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("Please specify an integer value greater than 0 .pay <#> <@>")
        msg.channel.send(ErrorEmbed);
      return;}

      let Mentioned = msg.mentions.members.first();
        if (!Mentioned) {
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setThumbnail(msg.author.avatarURL())
            .setDescription("Please mention a user .pay <#> <@>")
          msg.channel.send(ErrorEmbed);
        return;}

      if (!UserJSON[Mentioned.id]) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("That pearson isnt in the system tell them to use the .newbal command.")
        msg.channel.send(ErrorEmbed);
      return;}

      UserJSON[msg.author.id].bal -= parseInt(Money);
      UserJSON[Mentioned.id].bal += parseInt(Money);

      Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));

      let SuccessEmbed = new Discord.MessageEmbed()
        .setTitle("**SUCCESS**")
        .setColor(0X32CD32)
        .setThumbnail(Mentioned.user.avatarURL())
        .setDescription("You have given $" + Money + " discord coins to " + Mentioned.user.username)
      msg.channel.send(SuccessEmbed);
      break;}

    case "bal": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));

      if (!UserJSON[msg.author.id]) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You are not in the system try .newbal")
        msg.channel.send(ErrorEmbed);
      return;}

      let mentioned = msg.mentions.members.first();
        if (mentioned) {
          if (!UserJSON[mentioned.id]) {
            let ErrorEmbed = new Discord.MessageEmbed()
              .setTitle("**ERROR**")
              .setColor(0XFF0000)
              .setThumbnail(msg.author.avatarURL())
              .setDescription("That pearson isnt in the system tell them to use the .newbal command.")
            msg.channel.send(ErrorEmbed);
          return;}

          let SuccessEmbed = new Discord.MessageEmbed()
            .setTitle("**"+mentioned.user.username+"'S BALANCE**")
            .setColor(0X32CD32)
            .setThumbnail(mentioned.user.avatarURL())
            .addField("Balance", UserJSON[mentioned.id].bal)
          msg.channel.send(SuccessEmbed);
        return;
        } else {
          let SuccessEmbed = new Discord.MessageEmbed()
            .setTitle("**YOUR BALANCE**")
            .setColor(0X32CD32)
            .addField("Balance", UserJSON[msg.author.id].bal)
          msg.channel.send(SuccessEmbed);
        }
      break;}

    case "topbal": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));

      var allusers = (await msg.guild.members.fetch()).keyArray("id")
      var usersplaying = []
      var usersplayingmoney = []
      var send = []

      for(let i = 0; i <= allusers.length ;++i){
        if (UserJSON[allusers[i]]) {
          usersplaying.push(allusers[i])
          }
      }
      
      for(let i = 0; i < usersplaying.length ;++i){
        usersplayingmoney.push(UserJSON[usersplaying[i]].bal)
      }

      usersplayingmoney.sort((a,b)=>a-b);
      usersplayingmoney.reverse();

      var removed = usersplayingmoney.splice(0,5);
      usersplayingmoney = removed


      for(var i = 0 ; i < 5 ; ++i){
        for(var n = 0 ; n < usersplaying.length ; ++n){
          if(usersplayingmoney[i] === UserJSON[usersplaying[n]].bal){
            send.push((await msg.guild.members.fetch(usersplaying[n])).displayName+"--"+usersplayingmoney[i])
            usersplaying.splice(n, 1);
          }
        }
      }
      

      let topbaly = new Discord.MessageEmbed()
        .setTitle("**TOP BALANCE**")
        .setColor('#0099ff')
        .setDescription(send)
      msg.channel.send(topbaly);
      break;}

    //----- end of economy -----//





    //----- start of gambling -----//

    case "flip": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));
      let bet = args[1];

      rand = Math.floor(Math.random() * 2 - 1) + 1;

      if (!UserJSON[msg.author.id]) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You are not in the system try .newbal")
        msg.channel.send(ErrorEmbed);
      return;}

      if(!args[1] || isNaN(bet)){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("how much do you want to bet")
        msg.channel.send(ErrorEmbed);
      return;}

      if(bet < 0){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("you have to bet more than or equal to 0")
        msg.channel.send(ErrorEmbed);
      return;}

      if (UserJSON[msg.author.id].bal < bet) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You do not have enough money")
        msg.channel.send(ErrorEmbed);
      return;}

    if(rand === 0){
      UserJSON[msg.author.id].bal -= parseInt(bet);
      Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
      let SuccessEmbed = new Discord.MessageEmbed()
        .setTitle("**LOSS**")
        .setColor(0XFF0000)
        .setThumbnail(msg.author.avatarURL())
        .setDescription("You lost: "+ bet +" :(")
      msg.channel.send(SuccessEmbed);
    }

    if(rand === 1){
      UserJSON[msg.author.id].bal += parseInt(bet);
      Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
      let SuccessEmbed = new Discord.MessageEmbed()
        .setTitle("**WIN**")
        .setColor(0X32CD32)
        .setThumbnail(msg.author.avatarURL())
        .setDescription("You won: "+ bet +" :)")
      msg.channel.send(SuccessEmbed);
    }

      break;}

    case "dice": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));
      var dice = args[1];
      let bet = args[2];

      rand = Math.floor(Math.random() * 6 ) + 1;

      if (!UserJSON[msg.author.id]) {
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setThumbnail(msg.author.avatarURL())
            .setDescription("You are not in the system try .newbal")
          msg.channel.send(ErrorEmbed);
      return;}

      if(!args[1] || isNaN(dice)){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("what number are you betting on \n.dice <1/2/3/4/5/6> <Bet>")
        msg.channel.send(ErrorEmbed);
      return;}

      if(dice > 6 || dice < 1){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("what number are you betting on \n.dice <1/2/3/4/5/6> <Bet>")
        msg.channel.send(ErrorEmbed);
      return;}
  
      if(!args[2] || isNaN(bet)){
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setThumbnail(msg.author.avatarURL())
            .setDescription("how much do you want to bet .dice <1/2/3/4/5/6> <Bet>")
          msg.channel.send(ErrorEmbed);
      return;}
  
      if(bet < 0){
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setThumbnail(msg.author.avatarURL())
            .setDescription("you have to bet more than or equal to 0")
          msg.channel.send(ErrorEmbed);
      return;}
  
      if(UserJSON[msg.author.id].bal < bet) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You do not have enough money")
        msg.channel.send(ErrorEmbed);
      return;}

      if(dice == rand){
        let winmoney = bet * 3;

        UserJSON[msg.author.id].bal += parseInt(winmoney);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**WIN**")
          .setColor(0X32CD32)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You won: "+ winmoney +" :)")
        msg.channel.send(SuccessEmbed);
      return;}

      if(dice !== rand){

        UserJSON[msg.author.id].bal -= parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**LOSS**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You lost: "+ bet +" :(\n The dice was: "+rand)
        msg.channel.send(SuccessEmbed);
      return;}

          
      break;}

    case "bj": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));
      let bet = args[1];

      if (!UserJSON[msg.author.id]) {
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setDescription("You are not in the system try .newbal")
          msg.channel.send(ErrorEmbed);
      return;}
  
      if(!args[1] || isNaN(bet)){
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setDescription("how much do you want to bet")
          msg.channel.send(ErrorEmbed);
      return;}
  
      if(bet < 0){
          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setDescription("you have to bet more than or equal to 0")
          msg.channel.send(ErrorEmbed);
      return;}
  
      if (UserJSON[msg.author.id].bal < bet) {

          let ErrorEmbed = new Discord.MessageEmbed()
            .setTitle("**ERROR**")
            .setColor(0XFF0000)
            .setDescription("You do not have enough money")
          msg.channel.send(ErrorEmbed);
      return;}


      var a = 11;
      var card = [2, 3, 4, 5, 6, 7, 8, 9, 10, a];
      var c1 = card[Math.floor(Math.random()*card.length)];
      var c2 = card[Math.floor(Math.random()*card.length)];
      var c3 = card[Math.floor(Math.random()*card.length)];
      var c4 = card[Math.floor(Math.random()*card.length)];
      var c5 = card[Math.floor(Math.random()*card.length)];
      var cardtotal = c1 + c2;
      var pcards = []
      pcards.push(c1,c2)
      var dc1 = card[Math.floor(Math.random()*card.length)];
      var dc2 = card[Math.floor(Math.random()*card.length)];
      var dc3 = card[Math.floor(Math.random()*card.length)];
      var dc4 = card[Math.floor(Math.random()*card.length)];
      var dc5 = card[Math.floor(Math.random()*card.length)];
      var dc6 = card[Math.floor(Math.random()*card.length)];
      var dc7 = card[Math.floor(Math.random()*card.length)];
      var dc8 = card[Math.floor(Math.random()*card.length)];
      var dc9 = card[Math.floor(Math.random()*card.length)];
      var dc10 = card[Math.floor(Math.random()*card.length)];
      var dcardtotal = dc1 + dc2;
      var dcards = []
      dcards.push(dc1)

      let cards = new Discord.MessageEmbed()
        .setTitle("**Black Jack**")
        .setThumbnail(msg.author.avatarURL())
        .setColor(0X0099ff)
        .setDescription("Your cards are a " + pcards + " with a total of " + cardtotal + ".\nDealers card is a " + dcards + ".\n Do you want to hit (:thumbsup:) or stand (:thumbsdown:)?")
      msg.channel.send(cards).then(sentMessage => {


        if(cardtotal === 21){
          UserJSON[msg.author.id].bal += parseInt(bet);
          Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
          let cards = new Discord.MessageEmbed()
            .setTitle("**Black Jack**")
            .setThumbnail(msg.author.avatarURL())
            .setColor(0X0099ff)
            .setDescription("YOU WON!! You got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
          msg.channel.send(cards);
        return;}

        if(cardtotal > 21){
          UserJSON[msg.author.id].bal -= parseInt(bet);
          Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
          let cards = new Discord.MessageEmbed()
            .setTitle("**Black Jack\n You Busted**")
            .setThumbnail(msg.author.avatarURL())
            .setColor(0X0099ff)
            .setDescription("**YOU LOST :(** You Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
          msg.channel.send(cards);
        return;}
        

        sentMessage.react('👍');
        sentMessage.react('👎');


        const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
        };
  
        sentMessage.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
          .then(collected => {
        const reaction = collected.first();
  
        if (reaction.emoji.name === '👍') {

          pcards.push(c3)
          cardtotal += c3;

          if(cardtotal === 21){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("YOU WON!! You got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
  
          if(cardtotal > 21){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack\n You Busted**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU LOST :(** You Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

//_______________________________________________________________________

          let cards2 = new Discord.MessageEmbed()
            .setTitle("**Black Jack**")
            .setThumbnail(msg.author.avatarURL())
            .setColor(0X0099ff)
            .setDescription("Your cards are a " + pcards + " with a total of " + cardtotal + ".\nDealers card is a " + dcards + ".\n Do you want to hit (:thumbsup:) or stand (:thumbsdown:)?")
          msg.channel.send(cards2).then(sentMessage2 => {


          if(cardtotal === 21){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards21 = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("YOU WON!! You got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards21);
            return;}

          if(cardtotal > 21){
          UserJSON[msg.author.id].bal -= parseInt(bet);
          Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
          let cards = new Discord.MessageEmbed()
            .setTitle("**Black Jack\n You Busted**")
            .setThumbnail(msg.author.avatarURL())
            .setColor(0X0099ff)
            .setDescription("**YOU LOST :(** You Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
          msg.channel.send(cards);
          return;}


          sentMessage2.react('👍');
          sentMessage2.react('👎');


          const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
            };

            sentMessage2.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
              .then(collected => {
            const reaction = collected.first();

          if (reaction.emoji.name === '👍') {

            pcards.push(c4)
            cardtotal += c4;

            if(cardtotal === 21){
              UserJSON[msg.author.id].bal += parseInt(bet);
              Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
              let cards = new Discord.MessageEmbed()
                .setTitle("**Black Jack**")
                .setThumbnail(msg.author.avatarURL())
                .setColor(0X0099ff)
                .setDescription("YOU WON!! You got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
              msg.channel.send(cards);
            return;}

            if(cardtotal > 21){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack\n You Busted**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU LOST :(** You Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
            return;}
//___________________________________________________
          let cards2 = new Discord.MessageEmbed()
            .setTitle("**Black Jack**")
            .setThumbnail(msg.author.avatarURL())
            .setColor(0X0099ff)
            .setDescription("Your cards are a " + pcards + " with a total of " + cardtotal + ".\nDealers card is a " + dcards + ".\n Do you want to hit (:thumbsup:) or stand (:thumbsdown:)?")
          msg.channel.send(cards2).then(sentMessage2 => {


          if(cardtotal === 21){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards21 = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("YOU WON!! You got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards21);
            return;}

          if(cardtotal > 21){
          UserJSON[msg.author.id].bal -= parseInt(bet);
          Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
          let cards = new Discord.MessageEmbed()
            .setTitle("**Black Jack\n You Busted**")
            .setThumbnail(msg.author.avatarURL())
            .setColor(0X0099ff)
            .setDescription("**YOU LOST :(** You Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
          msg.channel.send(cards);
          return;}


          sentMessage2.react('👍');
          sentMessage2.react('👎');


          const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === msg.author.id;
            };

            sentMessage2.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
              .then(collected => {
            const reaction = collected.first();

          if (reaction.emoji.name === '👍') {

            pcards.push(c5)
            cardtotal += c5;

            if(cardtotal <= 21){
              
              bet *= 5
              UserJSON[msg.author.id].bal += parseInt(bet);
              Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
              let cards = new Discord.MessageEmbed()
                .setTitle("**Black Jack**")
                .setThumbnail(msg.author.avatarURL())
                .setColor(0X0099ff)
                .setDescription("YOU WON!! (5 cards 21 or less -> bet 5X)\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
              msg.channel.send(cards);
            return;}

            if(cardtotal > 21){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack\n You Busted**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU LOST :(** You Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
            return;}







        } else if (reaction.emoji.name === '👎') {

          dcards.push(dc2)

          for(var i = 3 ; dcardtotal <= 16 ; ++i){
            if(i === 3){
              dcards.push(dc3);
              dcardtotal += dc3;
            }
            if(i === 4){
              dcards.push(dc4);
              dcardtotal += dc4;
            }
            if(i === 5){
              dcards.push(dc5);
              dcardtotal += dc5;
            }
            if(i === 6){
              dcards.push(dc6);
              dcardtotal += dc6;
            }
            if(i === 7){
              dcards.push(dc7);
              dcardtotal += dc7;
            }
            if(i === 8){
              dcards.push(dc8);
              dcardtotal += dc8;
            }
            if(i === 9){
              dcards.push(dc9);
              dcardtotal += dc9;
            }
            if(i === 10){
              dcards.push(dc10);
              dcardtotal += dc10;
            }
          }

          if(cardtotal === dcardtotal){
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**Its a PUSH** you both have the same score\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\nYou have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

          if(dcardtotal === 21){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU LOST :(** Dealer got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

          if(dcardtotal > 21){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU WON!!** Dealer Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
          
          if(cardtotal > dcardtotal){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU WON!!**\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
          
          if(cardtotal < dcardtotal){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**You LOST :(**\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
        }
        })
        .catch(collected => {
          msg.reply('You didn\'t do anything, so now the game\'s over.');
        return;});
        });







        } else if (reaction.emoji.name === '👎') {

          dcards.push(dc2)

          for(var i = 3 ; dcardtotal <= 16 ; ++i){
            if(i === 3){
              dcards.push(dc3);
              dcardtotal += dc3;
            }
            if(i === 4){
              dcards.push(dc4);
              dcardtotal += dc4;
            }
            if(i === 5){
              dcards.push(dc5);
              dcardtotal += dc5;
            }
            if(i === 6){
              dcards.push(dc6);
              dcardtotal += dc6;
            }
            if(i === 7){
              dcards.push(dc7);
              dcardtotal += dc7;
            }
            if(i === 8){
              dcards.push(dc8);
              dcardtotal += dc8;
            }
            if(i === 9){
              dcards.push(dc9);
              dcardtotal += dc9;
            }
            if(i === 10){
              dcards.push(dc10);
              dcardtotal += dc10;
            }
          }

          if(cardtotal === dcardtotal){
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**Its a PUSH** you both have the same score\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\nYou have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

          if(dcardtotal === 21){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU LOST :(** Dealer got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

          if(dcardtotal > 21){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU WON!!** Dealer Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
          
          if(cardtotal > dcardtotal){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU WON!!**\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
          
          if(cardtotal < dcardtotal){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**You LOST :(**\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
        }
        })
        .catch(collected => {
          msg.reply('You didn\'t do anything, so now the game\'s over.');
        return;});
        });

//________________________________________________________________________          
        



} else if (reaction.emoji.name === '👎') {

          dcards.push(dc2)

          for(var i = 3 ; dcardtotal <= 16 ; ++i){
            if(i === 3){
              dcards.push(dc3);
              dcardtotal += dc3;
            }
            if(i === 4){
              dcards.push(dc4);
              dcardtotal += dc4;
            }
            if(i === 5){
              dcards.push(dc5);
              dcardtotal += dc5;
            }
            if(i === 6){
              dcards.push(dc6);
              dcardtotal += dc6;
            }
            if(i === 7){
              dcards.push(dc7);
              dcardtotal += dc7;
            }
            if(i === 8){
              dcards.push(dc8);
              dcardtotal += dc8;
            }
            if(i === 9){
              dcards.push(dc9);
              dcardtotal += dc9;
            }
            if(i === 10){
              dcards.push(dc10);
              dcardtotal += dc10;
            }
          }


          if(cardtotal === dcardtotal){
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**Its a PUSH** you both have the same score\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\nYou have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

          if(dcardtotal === 21){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU LOST :(** Dealer got a Black Jack\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}

          if(dcardtotal > 21){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU WON!!** Dealer Busted\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
          
          if(cardtotal > dcardtotal){
            UserJSON[msg.author.id].bal += parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**YOU WON!!**\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You WON: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
          
          if(cardtotal < dcardtotal){
            UserJSON[msg.author.id].bal -= parseInt(bet);
            Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
            let cards = new Discord.MessageEmbed()
              .setTitle("**Black Jack**")
              .setThumbnail(msg.author.avatarURL())
              .setColor(0X0099ff)
              .setDescription("**You LOST :(**\n\nYour cards are a " + pcards + ", with a total of " + cardtotal + ".\nDealers cards are a " + dcards + ", with a total of " + dcardtotal + ".\n You LOST: "+bet+" <:chip:751730576918315048> \n You now have: "+UserJSON[msg.author.id].bal+" <:chip:751730576918315048> ")
            msg.channel.send(cards);
          return;}
        }
        })
        .catch(collected => {
          msg.reply('You didn\'t do anything, so now the game\'s over.');
        return;});
      });

      
    break;}

    case "rps": {
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));
      let bet = args[2];
      drand = Math.floor(Math.random() * 3 - 1) + 1;

      if (!UserJSON[msg.author.id]) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You are not in the system try .newbal")
        msg.channel.send(ErrorEmbed);
      return;}

      if(!args[2] || isNaN(bet)){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("how much do you want to bet")
        msg.channel.send(ErrorEmbed);
      return;}

      if(bet < 0){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("you have to bet more than or equal to 0")
        msg.channel.send(ErrorEmbed);
      return;}

      if (UserJSON[msg.author.id].bal < bet) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You do not have enough money")
        msg.channel.send(ErrorEmbed);
      return;}

      if(!args[1]){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("What do you want \n0-Rock\n1-Paper\n2-scissors")
        msg.channel.send(ErrorEmbed);
      return;}

      let player = args[1];
      if(player != 0 && player != 1 && player != 2){
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("What do you want \n0-Rock\n1-Paper\n2-scissors")
        msg.channel.send(ErrorEmbed);
      return;}


      // 0 = rock 
      // 1 = paper 
      // 2 = sis

    if(player == 0){
      console.log("3.5")
      if(drand === 0){ //if u get rock and dealer gets rock
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**ew**")
          .setColor(0XFFA500)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You both got rock")
        msg.channel.send(SuccessEmbed);
      }
      if(drand === 1){ //if u get rock and dealer gets paper
        var dealer = "paper";
        UserJSON[msg.author.id].bal -= parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**LOSS**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You lost: "+ bet +" :(\nBot got: "+ dealer)
        msg.channel.send(SuccessEmbed);
      }
      if(drand === 2){ //if u get rock and dealer gets sis
        var dealer = "scissors";
        UserJSON[msg.author.id].bal += parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**Win**")
          .setColor(0X32CD32)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You Win: "+ bet + "\nBot got: " + dealer)
        msg.channel.send(SuccessEmbed);
      }
    return;}

    if(player == 1){
      if(drand === 1){ //if u get paper and dealer gets paper
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**ew**")
          .setColor(0XFFA500)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You both got paper")
        msg.channel.send(SuccessEmbed);
      }
      if(drand === 2){ //if u get paper and dealer gets sis
        var dealer = "scissors";
        UserJSON[msg.author.id].bal -= parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**LOSS**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You lost: "+ bet +" :(\nBot got: "+ dealer)
        msg.channel.send(SuccessEmbed);
      }
      if(drand === 0){ //if u get paper and dealer gets rock
        var dealer = "rock";
        UserJSON[msg.author.id].bal += parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**Win**")
          .setColor(0X32CD32)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You Win: "+ bet + "\nBot got: "+ dealer)
        msg.channel.send(SuccessEmbed);
      }
    return;}

    if(player == 2){
      if(drand === 2){ //if u get sis and dealer gets sis
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**ew**")
          .setColor(0XFFA500)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You both got scissors")
        msg.channel.send(SuccessEmbed);
      }
      if(drand === 0){ //if u get sis and dealer gets rock
        var dealer = "rock";
        UserJSON[msg.author.id].bal -= parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**LOSS**")
          .setColor(0XFF0000)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You lost: "+ bet +" :(\nBot got: "+ dealer)
        msg.channel.send(SuccessEmbed);
      }
      if(drand === 1){ //if u get sis and dealer gets paper
        var dealer = "paper";
        UserJSON[msg.author.id].bal += parseInt(bet);
        Fs.writeFileSync("./DataBase/users.json", JSON.stringify(UserJSON));
        let SuccessEmbed = new Discord.MessageEmbed()
          .setTitle("**Win**")
          .setColor(0X32CD32)
          .setThumbnail(msg.author.avatarURL())
          .setDescription("You Win: "+ bet + "\nBot got: "+ dealer)
        msg.channel.send(SuccessEmbed);
      }
    return;}

      break;}

    //----- end of gambling -----//

    



    //----- start of mod -----//
    case "help": {
      let helpem = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("All the commands")
        .setURL(helplink)
        .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
        .addFields(
          {name: "Check out the commands on our website", value: helplink}, 
          {name: "**Meme commands**", value: prefix+"memehelp", inline: true},
          {name: "**VC commands**", value: prefix+"vchelp", inline: true},
          {name: "**Mod commands**", value: prefix+"modhelp", inline: true},
          {name: "**balance commands**", value: prefix+"moneyhelp", inline: true},
          {name: "**Gambling commands**", value: prefix+"gambhelp", inline: true},
          )
        .setImage('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
      msg.channel.send(helpem);

      break;}
    
    case "memehelp":{
      let memehelp = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle("**Meme commands**")
      .setURL(helplink)
      .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
      .addFields(
        {name: "Check out the commands on our website", value: helplink}, 
        {name: "**Meme commands**", value: funhelp}
      )
    msg.channel.send(memehelp);
    break;}

    case "modhelp":{
      let modhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**Mod commands**")
        .setURL(helplink)
        .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
        .addFields(
          {name: "Check out the commands on our website", value: helplink}, 
          {name: "**Moderatorcommands**", value: modshelp}
        )
    msg.channel.send(modhelp);
    break;}

    case "vchelp":{
      let modhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**VC commands**")
        .setURL(helplink)
        .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
        .addFields(
          {name: "Check out the commands on our website", value: helplink}, 
          {name: "**VCcommands**", value: VChelp}
    )
    msg.channel.send(modhelp);
    break;}

    case "moneyhelp":{
      let balhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**BalCommands**")
        .setURL(helplink)
        .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
        .addFields(
          {name: "Check out the commands on our website", value: helplink}, 
          {name: "**Money Commands**", value: moneyhelp}
    )
    msg.channel.send(balhelp);
    break;}

    case "gambhelp":{
      let ballhelp = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**GambCommands**")
        .setURL(helplink)
        .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
        .addFields(
          {name: "Check out the commands on our website", value: helplink}, 
          {name: "**Gambling Commands**", value: gamblhelp}
    )
    msg.channel.send(ballhelp);
    break;}



    case "ping": {
      msg.channel.send("Im alive");
      break;}

    case "info": {
      if (args[1] === "version") msg.channel.send("version: " + version);
      if (args[1] === "author") msg.channel.send("author: " + auther);
      if (args[1] !== "version" && args[1] !== "author") {
        msg.channel.send("What do you want more information about?");
        msg.channel.send("*" + prefix + "info version*");
        msg.channel.send("*" + prefix + "info author*");
      }
      break;}

    case "website": {
      msg.channel.send(helplink);
      break;}

    case "clear": {
      if (msg.member.hasPermission('ADMINISTRATOR')) {
        if (!args[1])
          return msg.reply("Error please define how many msgs do you want to delete");
        if (args[1] > 100)
          return msg.channel.send("you can only delete 100 messages at a time");
        msg.channel.bulkDelete(args[1]);
        break;
      }
      if (msg.member.roles.cache.find(r => r.name !== "Cleaner"))
        msg.channel.send("sorry you dont have the correct role to use the command");
      break;}

    case "report": {
      msg.channel.send("Please DM me to report");
      break;}

    case "announce": {
      let chat = bot.channels.cache.get('707451011471507466');

      if (!(msg.member.hasPermission('ADMINISTRATOR'))) {
        msg.channel.send("dumb dumb ur not a admin");
      return;}
  
      if(!(args[1])){
        msg.channel.send("the format for this command is .announce <0/1/2/3> <title>\n0-no one\n1-everyone\n2-gamenight\n3-movienight  1 ");
      return;}
  
      if(!(args[2])){
        msg.channel.send("the format for this command is .announce <0/1/2/3> <title>\n0-no one\n1-everyone\n2-gamenight\n3-movienight   2");
      return;}
  
      if(isNaN(args[1])){
        msg.channel.send("the format for this command is .announce <0/1/2/3> <title>\n0-no one\n1-everyone\n2-gamenight\n3-movienight  3");
      return;}
      
      if(args[1] !== "0" && args[1] !== "1" && args[1] !== "2" && args[1] !== "3"){
        msg.channel.send("the format for this command is .announce <0/1/2/3> <title>\n0-no one\n1-everyone\n2-gamenight\n3-movienight  4");
      return;}
  
  
      let mention = " ";
      if(args[1] === "0")
        mention = "no one";
      if(args[1] === "1")
        mention = "@everyone";
      if(args[1] === "2")
        mention = "<@&740828344794349658>";
      if(args[1] === "3")
        mention = "<@&740828341069676594>";
        
  
      let title = text.slice(12);
  
      msg.channel.send("What do you want the discription to be? you have 60 seconds to type it"); 
      let disc = " ";      
      msg.channel.awaitMessages(m => m.author.id == msg.author.id,
        {max: 1 , time: 60000}).then(collected => {
          disc = collected.first().content;
  
          let announce = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle("**"+title+"**")
            .setURL("https://discord.gg/hpcxUFy")
            .setDescription(disc)
            .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
  
          if(!(mention === "no one"))
            chat.send("||"+mention+"||");
          chat.send(announce);
          chat.send({files: ["./bar.gif"]});
        })
      break;}

    case "whois": {
      let Mentioned = msg.mentions.members.first();
      let UserJSON = JSON.parse(Fs.readFileSync("./DataBase/users.json"));

      if (!(msg.member.hasPermission('ADMINISTRATOR'))) {
        msg.channel.send("dumb dumb ur not a admin");
      return;}
      
      if (!Mentioned) {
        let ErrorEmbed = new Discord.MessageEmbed()
          .setTitle("**ERROR**")
          .setColor(0XFF0000)
          .setDescription("Please mention a user")
        msg.channel.send(ErrorEmbed);
      return;}

      if (!UserJSON[Mentioned.id]) {

        let whois = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**"+Mentioned.user.username+"'s info**")
        .addFields(
          {name: "User ID: ", value: (await msg.guild.members.fetch(Mentioned.id)).id, inline: true},
          {name: "Joined at: ", value: (await msg.guild.members.fetch(Mentioned.id)).joinedAt, inline: true},
          {name: "Nickname: ", value: (await msg.guild.members.fetch(Mentioned.id)).nickname, inline: true},
          {name: "Username: ", value: (await msg.guild.members.fetch(Mentioned.id)).user.username, inline: true},
          {name: "Last message in channel: ", value: "<#"+(await msg.guild.members.fetch(Mentioned.id)).lastMessageChannelID+">", inline: true},
          )
        .setImage(Mentioned.user.avatarURL)
        msg.channel.send(whois);
        return;}

      if (UserJSON[msg.author.id]) {
        let whois = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**"+Mentioned.user.username+"'s info**")
        .addFields(
          {name: "User ID: ", value: (await msg.guild.members.fetch(Mentioned.id)).id, inline: true},
          {name: "Joined at: ", value: (await msg.guild.members.fetch(Mentioned.id)).joinedAt, inline: true},
          {name: "Nickname: ", value: (await msg.guild.members.fetch(Mentioned.id)).nickname, inline: true},
          {name: "Username: ", value: (await msg.guild.members.fetch(Mentioned.id)).user.username, inline: true},
          {name: "Last message in channel: ", value: "<#"+(await msg.guild.members.fetch(Mentioned.id)).lastMessageChannelID+">", inline: true},
          {name: "Money: ", value: "$"+UserJSON[Mentioned.id].bal, inline: true},
          )
        .setImage(Mentioned.user.avatarURL)
        msg.channel.send(whois);
        return;}
      break;}
    //----- end of mod -----//





    //----- start of memes -----//
    case "memes": {
      fetch("https://meme-api.herokuapp.com/gimme")
        .then(res => res.json())
        .then(json => {
          let embed = new Discord.MessageEmbed()
            .setTitle(json.title)
            .setImage(json.url)
            .setFooter("Link: " + json.postLink + " | Subreddit : " + json.subreddit +"\nfor better memes follow @saudinigga123 on isntagram");
          msg.channel.send(embed);
        });
      break;}

    case "spam": {

      if (talkedRecently.has(msg.author.id) && msg.author.id !== '698051518754062387') {
        msg.channel.send("Cooldown 120 sec");
        sleep(1000)
        msg.delete();
      return;}
    
      talkedRecently.add(msg.author.id);
      setTimeout(() => {
        talkedRecently.delete(msg.author.id);
      }, 120000);

      if (text.includes("@") && msg.author.id !== "698051518754062387") {
        msg.channel.send("No.");
        break;
      }
      for (var i = 0; i !== 5; ++i) msg.reply(" said: " + text.slice(5) + " ");
      break;}

    case "shhdm": {
      let mention = msg.mentions.users.first();


      if(text.includes("@here") ||text.includes("@everyone")){
        msg.channel.send("NO!");
      return;}

      if(!args[1]){
        msg.channel.send("Who do you want to Dm anonymous?");
      return;}

      if(!args[1].includes("@")){
        msg.channel.send("Who do you want to Dm anonymous?");
      return;}

      const embed = new Discord.MessageEmbed()
          .setColor(0xb33076)
          .setTitle("Anonymous Message")
          .setDescription(text.slice(6))
          mention.send(embed)

      msg.channel.bulkDelete(1);
      break;}

    case "oof": {
      imageNum = Math.floor(Math.random() * 8) + 1;
      msg.channel.send ({files: ["./images/oof" + imageNum + ".jpg"]})
      break;}

    case "emilie": {
      msg.channel.send("https://cdn.discordapp.com/attachments/599061991281131531/736649467045871616/emiliestfu.gif");
      break;}
    
    case "simp": {
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/737305776468656258/image0.jpg");
      break;}

    case "pardon": {
      msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/749520307575980092/image0.jpg");
      break;}

    case "haram": {
      msg.channel.send("https://cdn.discordapp.com/attachments/599061991281131531/737255123121733652/haram.mp4");
      break;}

    case "blue": {
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/737791880355381308/blue.jpg");
      break;}

    case "our": {
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/737306931290570802/Our.png")
      break;}

    case "smh":{
        msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/738346577369759825/smh.PNG");
      break;}

    case "kith":{
        msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/739689711898984468/image0.jpg");
      break;}

    case "wtf":{
        msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/739689656467062914/image0.jpg");
      break;}

    case "bruh": {
        msg.channel.send("https://cdn.discordapp.com/attachments/700670516570095677/741569349873303572/image0.jpg")
      break;}

    case "halal": {
      msg.channel.send("https://cdn.discordapp.com/attachments/599061991281131531/751296527103950918/image0.png")
      break;}

    case "gn": {
      let mentioned = msg.mentions.members.first();
      if(!mentioned)
        msg.channel.send("https://cdn.discordapp.com/attachments/599061991281131531/751735078203293726/118375543_164947441915565_6934644620562947858_n.mp4")
      if(mentioned){
        mentioned.send("**"+msg.author.username+" Says Good Night**")
        mentioned.send("https://cdn.discordapp.com/attachments/599061991281131531/751735078203293726/118375543_164947441915565_6934644620562947858_n.mp4")
        msg.channel.send("Sent "+mentioned.user.username+" a Good Night msg");
      }

      break;}

    case "gm": {
      let mentioned = msg.mentions.members.first();
      if(!mentioned)
        msg.channel.send("https://cdn.discordapp.com/attachments/716215392921452554/752216254315757669/video0.mov")
      if(mentioned){
        mentioned.send("**"+msg.author.username+" Says Good Morning**")
        mentioned.send("https://cdn.discordapp.com/attachments/716215392921452554/752216254315757669/video0.mov")
        msg.channel.send("Sent "+mentioned.user.username+" a Good Morning msg");
      }
  
        break;}

    case "frog": {
      msg.channel.send("https://tenor.com/view/h%c3%a2m-frog-toad-frog-l%e1%ba%afc-wiggle-gif-14557565")
      break;}
    //----- end of memes -----//





    //----- start of vc -----//
    case "okok": {
      msg.channel.send("https://cdn.discordapp.com/attachments/608295365384339457/737059292930375780/video0.mov");
      var VC = msg.member.voice.channel;
      vc("okok",.5,VC,msg.author.id,msg.channel)
    break;}

    case "woo": {
      msg.channel.send("https://cdn.discordapp.com/attachments/737775095828709508/738086389358264391/woo.gif");
      var VC = msg.member.voice.channel;
      vc("woo",.25,VC,msg.author.id,msg.channel)
    break;}

    case "hamood":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/738867948495568976/Hamood_habibi.mp4");
      var VC = msg.member.voice.channel;
      vc("hamood",.5,VC,msg.author.id,msg.channel)
    break;}

    case "itis":{
      msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/740063663502786670/video0.mov");
      var VC = msg.member.voice.channel;
      vc("itis",.5,VC,msg.author.id,msg.channel)
    break;}

    case "stop":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/740483382173237299/JoeBuddenstopmeme.mp4");
      var VC = msg.member.voice.channel;
      vc("stop",.5,VC,msg.author.id,msg.channel)
    break;}

    case "cough":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/740721964531974244/videoplayback.mp4");
      var VC = msg.member.voice.channel;
      vc("cough",.7,VC,msg.author.id,msg.channel)
    break;}

    case "kanye":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/740725168904601670/videoplayback_1_online-video-cutter.com.mp4");
      var VC = msg.member.voice.channel;
      vc("kanye",.7,VC,msg.author.id,msg.channel)
    break;}

    case "rock":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/748035445140619264/rock.mp4");
      var VC = msg.member.voice.channel;
      vc("rock",.6,VC,msg.author.id,msg.channel)
    break;}

    case "mad":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/743726550213460068/HOES_MAD_FULL_VIDEO.mp4");
      var VC = msg.member.voice.channel;
      vc("mad",.35,VC,msg.author.id,msg.channel)
    break;}
    
    case "gay":{
      msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/746398464220463216/video0.mp4");
      var VC = msg.member.voice.channel;
      vc("gay",.5,VC,msg.author.id,msg.channel)
    break;}

    case "sad":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/746467065577078915/video0.mp4");
      var VC = msg.member.voice.channel;
      vc("sad",.7,VC,msg.author.id,msg.channel)
    break;}

    case "smoothie":{
      msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/748466554097631291/Im_about_to_try_my_smoothie.mp4");
      var VC = msg.member.voice.channel;
      vc("smoothie",.7,VC,msg.author.id,msg.channel)
    break;}

    case "itsme":{
      msg.channel.send("https://cdn.discordapp.com/attachments/599061991281131531/749542094783381624/Its_me_Im_niggas.mp4");
      var VC = msg.member.voice.channel;
      vc("itsme",.7,VC,msg.author.id,msg.channel)
    break;}

    case "unwise":{
      msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/750270119954874397/video0.mp4");
      var VC = msg.member.voice.channel;
      vc("unwise",.5,VC,msg.author.id,msg.channel)
    break;}
    
    case "shampoo":{
      msg.channel.send("https://cdn.discordapp.com/attachments/608207237667749908/750757207284645908/video0.mp4");
      var VC = msg.member.voice.channel;
      vc("shampoo",1.2,VC,msg.author.id,msg.channel)
    break;}

    case "notme":{
      msg.channel.send("https://cdn.discordapp.com/attachments/707451317626470455/751540044476710982/not_me.mp4");
      var VC = msg.member.voice.channel;
      vc("notme",.7,VC,msg.author.id,msg.channel)
    break;}

    case "graduate":{
      msg.channel.send("https://cdn.discordapp.com/attachments/739448495634645002/751762869716254721/videoplayback.mp4");
      var VC = msg.member.voice.channel;
      vc("graduate",.5,VC,msg.author.id,msg.channel)
    break;}

    case "egg":{
      msg.channel.send("https://cdn.discordapp.com/attachments/752042865349230662/752123240226357268/EggMan_Sings_Yi_Jian_Mei_Synced_Up.mp4");
      var VC = msg.member.voice.channel;
      vc("egg",.7,VC,msg.author.id,msg.channel)
    break;}
    //----- end of vc -----//
  }
});

function vc (sound,vol,VC,auther,chan){
  if (talkedRecently.has(auther) && auther !== '698051518754062387') {
    chan.send("Cooldown 60 sec")
    .then(msg => {
      msg.delete({ timeout: 10000 })
    })
 return;}

  talkedRecently.add(auther);
  setTimeout(() => {
    talkedRecently.delete(auther);
  }, 60000);

  
  if (VC){
    VC.join()
      .then(connection => {
    const dispatcher = connection.play('./sounds/'+sound+'.mp3', { volume: vol });
    dispatcher.on("finish", end => {
      sleep(1000);
      VC.leave();});
  })
  .catch(console.error);
}
}

function serverstats(member){
  sleep(2000)
  member.guild.channels.cache.get("715444945602740244").setName(`Total Members: ${member.guild.memberCount}`); 
  member.guild.channels.cache.get("715444951332290591").setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`); 
  member.guild.channels.cache.get("715444948568244305").setName(`Users: ${member.guild.members.cache.filter(m => !m.user.bot).size}`); 
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}






/*
case "react": {
      let react = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle("**React to get your role**")
        .setURL("https://discord.gg/e5Pucbh")
        .setThumbnail('https://cdn.discordapp.com/attachments/739019780576641096/739022260857470981/Discord_Rose.png')
        .addFields(
          {name: "**Events**", value: "Movie night: <:movie_night:740837473965572196>\nGame night: <:game_night:740895921969299516>", inline: true},
          {name: "**Platforms**", value: "PC: <:pc:740896282603683903>\nPS: <:ps:740822774712500285>\nXbox: <:xbox:740823180825985066>", inline: true}
        )
        let chan = bot.channels.cache.get('740809935247507566')
        chan.send(react).then(sentEmbed => {
          sentEmbed.react('740837473965572196')
          sentEmbed.react('740895921969299516')
          sentEmbed.react('740896282603683903')
          sentEmbed.react('740822774712500285')
          sentEmbed.react('740823180825985066')
        })
      break;}
*/


/*bot.on('messageDelete', msg =>
{
    let embed = new Discord.MessageEmbed()
                .setTitle("A message was deleted here.")
                .addField("Message created at:",msg.createdAt)
                .setColor(0Xb05c4d)
            msg.channel.send(embed);
})
*/token
bot.login(token); // turn bot online
