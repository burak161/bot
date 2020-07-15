const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'temizle') {
   msg.channel.bulkDelete(100);
   msg.channel.sendMessage("100 adet mesaj silindi!");
 }
    if (msg.content.toLowerCase() === 'sa') {
      msg.reply('Aleyküm selam hoşgeldin');
    }
    if (msg.content.toLowerCase() === prefix + 'ping') {
        msg.reply('pinginiz **' + client.ping + '** ms');
      }

        if (msg.content.toLowerCase() === prefix + 'dizi öneri' ) {
  msg.reply('"HAFTANIN DİZİSİ FRİNGE"https://dizirun.com/uploads/series/fringe.jpg ')
}
if (msg.content.toLowerCase() === prefix + 'insta' ) {
  msg.reply('BİZİ İNSTAGRAMDA HALEN TAKİP ETMİYORMUSUN? CANLI MAÇ YAYINLARI İÇİN TAKİPTE KAL; https://www.instagram.com/canli_mac_burada_guncel/?hl=tr ')
}

if (msg.content.toLowerCase() === prefix + 'iddia' ) {
  msg.reply('https://i.pinimg.com/originals/fc/d6/d8/fcd6d884dafd3141ee5153c96c2f5b6e.jpg')
}

if (msg.content.toLowerCase() === prefix + 'fb' ) {
  msg.reply('https://iaftm.tmgrup.com.tr/fd3300/632/314/0/0/810/402?u=https://iftm.tmgrup.com.tr/2020/06/28/gorusme-gerceklesti-super-ligin-yildizi-fenerbahceye-1593358059258.jpeg')
}

if (msg.content.toLowerCase() === prefix + 'gs' ) {
  msg.reply('https://i.pinimg.com/originals/33/f5/b0/33f5b04d42aa5e0a02fb7bb2a8f7a3b7.jpg')
}
if (msg.content.toLowerCase() === prefix + 'bjk' ) {
  msg.reply('https://i.pinimg.com/originals/cb/aa/a8/cbaaa84177ebf818bfd0ac869681c998.png')
}

if (msg.content.toLowerCase() === prefix + 'galatasaray maç' ) {
  msg.reply('https://cdn.discordapp.com/attachments/696065897466429450/731873763142139954/mac_paylasm.jpg')
}
if (msg.content.toLowerCase() === prefix + 'fenerbahçe maç' ) {
  msg.reply('https://cdn.discordapp.com/attachments/696065897466429450/731873853957210172/mac_paylasm.jpg')
}
  if (msg.content.toLowerCase() === 'günaydın') {
   	msg.reply('sana da günaydın');
  }

  if (msg.content.toLowerCase() === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :)');
  }

  if (msg.content.toLowerCase() === 'herkese iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }
  if (msg.content.toLowerCase() === 'gs kadro') {
    msg.reply('https://media.discordapp.net/attachments/696065897466429450/731880878304788520/galahooligans-20200712-0001.jpg?width=499&height=499');
  }

















});

client.login('NzIyMDI4MzQ5ODI3ODQyMTQ4.Xwra4g.eIxk4pR2JZQfUd9lz2B4pMpQAiU');
