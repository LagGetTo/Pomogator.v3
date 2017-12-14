const settings = require('../config.json');
exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(`= Список команд =\n\n[Используй ${settings.prefix}help [имя команды] чтобы получить информацию о команде ]\n\n${client.commands.map(c => `${settings.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`, {code:'asciidoc'});
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send(`= ${command.help.name} = \n${command.help.description}\nИспользование :: ${command.help.usage}\nМожно так же вызывать :: ${command.conf.aliases}`, {code:'asciidoc'});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['хелп', 'помощь','команды','рудз'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Показывает все доступные команды доступные для твоей роли.',
  usage: 'help [имя команды]'
};
