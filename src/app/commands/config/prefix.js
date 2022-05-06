const Command = require('../../util/class/Command')
const i18n = require('../../translate')('commands/config')

const megadb = require('megadb')
const prefix_db = new megadb.crearDB('prefix', 'config')

module.exports = new Command({
    name: "prefix",
    alias: ["prefijo"],
    args: true,
    run: async (client, message, props) => {
        const newPrefix = props.args[0]
    
        if (newPrefix.length > 2) return message.reply(i18n.res('prefix.error', props.lang))
    
        if (newPrefix != props.prefix && newPrefix != client.bot.prefix) await prefix_db.establecer(message.guild.id, newPrefix)
    
        if (newPrefix == client.bot.prefix) await prefix_db.eliminar(message.guild.id)
        
        return message.reply(i18n.res('prefix.success', props.lang, { prefix: newPrefix }))
    }
})