const Event = require('../util/class/Event')
const spawn = require('../util/functions/spawn')
const commandOptions = require('../util/loader/commandOptions/')

const megadb = require('megadb')
const prefix_db = new megadb.crearDB('prefix', 'config')
const lang_db = new megadb.crearDB('lang', 'config')

module.exports = new Event({
    name: "messageCreate",
    run: async (client, message) => {
        if (message.author.bot) return
    
        const props = {
            prefix: await prefix_db.obtener(message.guild.id) || client.bot.prefix,
            lang: await lang_db.obtener(message.member.user.id) || client.bot.lang,
        }
    
        if (!message.content.startsWith(props.prefix)) {
            if (message.content.length > 5) await spawn(client, message)
            return
        }
    
        props.args = message.content.slice(props.prefix.length).split(/ +/)
    
        const nameCommand = props.args.shift().toLowerCase()
        const command = client.commands.filter(cmd => cmd.name === nameCommand || cmd.alias.includes(nameCommand))[0]
        if (!command) return
        
        if (await commandOptions(message, command, props)) return
        
        try {
            await command.run(client, message, props)
        } catch(err) {
            return console.log(err)
        }
    }
})