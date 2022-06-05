const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/config')

const megadb = require('megadb')
const channels_db = new megadb.crearDB('channels', 'spawn')

module.exports = new Command({
    name: "spawn",
    run: async (client, message, props) => {
        const channel = await channels_db.obtener(message.guild.id)
        
        if (!channel) return message.reply(i18n.res('spawn.notChannel', props.lang))
        else return message.reply(i18n.res('spawn.list', props.lang, { channel: channel }))
    }
})