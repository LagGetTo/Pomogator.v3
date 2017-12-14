exports.run = (client, message, args) => {
  let command;
  if (client.commands.has(args[0])) {
    command = args[0];
  } else if (client.aliases.has(args[0])) {
    command = client.aliases.get(args[0]);
  }
  if (!command) {
    return message.channel.send(`Команда **${args[0]}** не найдена.`);
  } else {
    message.channel.send(`Перезагружаю команду **${command}**`)
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit(`Команда **${command}** успешно перезагружена 👌`);
          })
          .catch(e => {
            m.edit(`Ошибка при перезагрузке команды **${command}**\n\`\`\`${e.stack}\`\`\``);
          });
      });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['r'],
  permLevel: 3
};

exports.help = {
  name: 'reload',
  description: 'Перезагружает команды.',
  usage: 'reload [имя команды]'
};
