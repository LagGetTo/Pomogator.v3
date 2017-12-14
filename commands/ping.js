exports.run = (client, message) => {
  message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`Pong! (это заняло: ${msg.createdTimestamp - message.createdTimestamp} мс)`);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['пинг','зштп'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Проверка пинга и вообще работает ли бот.',
  usage: 'ping'
};
