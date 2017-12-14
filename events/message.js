const {prefix} = require('../config.json');
module.exports = message => {
  const client = message.client;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  const perms = client.elevation(message);
  if (!cmd) return;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, args, perms);
  }

};
