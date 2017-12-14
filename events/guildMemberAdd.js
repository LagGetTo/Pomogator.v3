module.exports = (member, user) => {
  const channel = member.guild.channels.find('name', 'member-log');
  const puti = member.guild.roles.find('name', 'Пути');
  if (!puti) member.guild.createRole({name: 'Пути'});
  if (!channel) member.guild.createChannel('member-log','text');
    channel.send({embed:{
    color: 0x16b103,
    author: {
          name: `${member.user.username}#${member.user.discriminator}`,
          icon_url: `${member.user.avatarURL}`
    },
    timestamp: '2017-12-10T19:42:55+03:00',
    footer: {
      "text": 'Пользователь присоединился к серверу'
    }
  }});
  member.addRole(puti);
};
