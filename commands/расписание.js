exports.run = (client, message, params) => {
  const channel = message.guild.channels.find('name', 'question');
    if (!channel) client.guild.createChannel('question','text');
    function nowDate (kek){
      var date = new Date();
      var curr_month = date.getMonth()+1;
      var curr_date = date.getDate()+kek;
      var curr_day = date.getDay()+kek;
      for (i = 0; i<3; i++){
        if (curr_day === 0) return URL = '**Сегодня воскресенье. Пар нету! \\\о/**';
        if(curr_date < 0) curr_date++;
        curr_day++;
        return URL = `http://mcesii.ru/images/Raspisanie/${curr_date}.${curr_month}.pdf`;
      }
  }
    channel.send(`**Сегодня** - `+nowDate(0));
    channel.send(`**Завтра** - `+nowDate(1));
    channel.send(`**Послезавтра** - `+nowDate(2));
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['пары'],
  permLevel: 0
};

exports.help = {
  name: 'расписание',
  description: 'Отправка **ссылок** на расписание. Сегодня/завтра/послезавтра.',
  usage: 'расписание'
};
