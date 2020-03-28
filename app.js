const Discord = require('discord.js');
const client = new Discord.Client();

client.on('
ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.commands') {
    msg.reply('The following are all of the commands available:  "bruh" or "Bruh" - show meme /n Any others?');
  }

  else if (msg.content === 'bruh' || msg.content === 'Bruh') {
      // Create the attachment using Attachment
      const attachment = new Discord.Attachment('https://i.kym-cdn.com/photos/images/original/001/478/966/857.jpg');
      // Send the attachment in the message channel
      msg.channel.send(attachment);
  }
});



client.login('NjgxMzY5MDE4NTYwNjc1ODQx.XlNfjg.CIi57N9FHNALFohG_ZC8Ma_xKrA');