exports.run = (client, message, args) => {
  let msgCount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: msgCount
  }).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['p','очистка'],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Очистка сообщений Для роли Bot mod или выше.',
  usage: 'purge [кол-во сообщений]'
}
