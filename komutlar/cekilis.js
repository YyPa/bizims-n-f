const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embedçekiliş = new Discord.RichEmbed()
        .setTitle("Çekiliş Kazananı")
        .setDescription(`Çekilişi Kazanan: ${message.guild.members.random().displayName}`)
    console.log("!çekiliş komutu " + message.author.username + " tarafından kullanıldı.")
    console.log ('!çekiliş komudunu kullanan işinin ismini verim aga' + message.author.username )
    message.delete();
    message.channel.sendEmbed(embedçekiliş);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çekilişyap', 'çekiliş-yap', 'lottery'],
    permLevel: 0
};

exports.help = {
    name: 'çekiliş',
    description: 'Çekiliş yapar.',
    usage: 'çekiliş'
};