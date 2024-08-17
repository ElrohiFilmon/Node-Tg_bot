const { Telegraf } = require('telegraf');

const bot = new Telegraf('YOUR_BOT_TOKEN');

bot.start((ctx) => ctx.reply('Hi there! 👋  How can I help you today?'));

bot.hears(['hi', 'hey', 'hello'], (ctx) => ctx.reply('Hey there! 😊'));

bot.hears(['bye', 'goodbye'], (ctx) => ctx.reply('See ya! 👋'));

bot.on('text', (ctx) => {
  const message = ctx.message.text;
  
  // Simple responses for different greetings 
  if (message.toLowerCase().includes('how are you')) {
    ctx.reply('I am an AI, so I don\'t have feelings, but thanks for asking! 😊');
  } else if (message.toLowerCase().includes('what\'s up')) {
    ctx.reply('Just hanging out, waiting to chat with you! 😄');
  } else {
    ctx.reply('I am still learning to understand you better.  Please try again!');
  }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
