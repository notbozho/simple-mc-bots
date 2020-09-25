const mineflayer = require('mineflayer');
const move = require('mineflayer-move');
const mineflayerViewer = require('prismarine-viewer').mineflayer
const inventoryViewer = require('mineflayer-web-inventory');
const readline = require('readline');


const bot = mineflayer.createBot({
  host: 'mc.divictusgaming.com',
  port: 25565,
  username: 'bozho344',
  version: 1.8
})

move(bot);


bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: false })
})

bot.on('scoreboardCreated', (scoreboard) => {
  console.log(scoreboard)
})

bot.on("tab_complete", data => console.log("DATA: " + data))

bot.on('scoreboardScoreUpdated', (scoreboard, updated) => {
  console.log(scoreboard)
})

// bot.on('chat', function (username, message) {
//   if (username === bot.username) return
//   bot.chat(message)
// })

bot.on('message', msg => {
    if(msg.toString().includes('/register')) {
        bot.chat('/register parola123 parola123')
    }
})

bot.on('message', msg => {
    if(msg.toString().includes('/login')) {
        bot.chat('/login parola123')
        bot.look(90, (Math.pi / 2))
        
    }
})

bot.chatAddPattern = (/(.*) » (.*)/, 'chat')
bot.on('message', msg => console.log(msg.toString()))

inventoryViewer(bot)