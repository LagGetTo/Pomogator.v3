module.exports = member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) member.guild.createChannel('member-log','text');
    channel.send({embed:{
      color: 0xd99829,
      author: {
            name: `${member.user.username}#${member.user.discriminator}`,
            icon_url: `${member.user.avatarURL}`
      },
      timestamp: '2017-12-10T19:42:55+03:00',
      footer: {
        "text": 'Пользователь покинул сервер'
      }
  }});
};
