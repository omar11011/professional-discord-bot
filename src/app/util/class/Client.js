const discord = require('discord.js')
const bot = require('../../config')

const intents = new discord.Intents(bot.intents)
const client = new discord.Client({ intents })

client.bot = bot

client.login(process.env.TOKEN)

module.exports = client
