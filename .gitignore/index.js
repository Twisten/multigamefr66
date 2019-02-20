const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?";

client.login('NTQ3ODQ2MDM3NTE2MTg5NzEz.D08tIw.PgPYppD8PWCu3TfOfQhkzztPbO4');

/* A rejoint */
client.on('guildMemberAdd', member =>{
    member.guild.channels.get('546776987331461122').send(':tada: **Bienvenue **' + member.user + ':smile: Nous sommes maintenant ' + member.guild.memberCount);
    console.log('+1')
});

/* A quitté */
client.on('guildMemberRemove', member =>{
    member.guild.channels.get('547196770266906624').send(':cry: **Aurevoir **' + member.user );
    console.log('-1')
});

