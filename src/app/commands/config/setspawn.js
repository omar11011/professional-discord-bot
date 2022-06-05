const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/config')

const megadb = require('megadb')
const channels_db = new megadb.crearDB('channels', 'spawn')

module.exports = new Command({
    name: "setspawn",
    permissions: {
        user: ['ADMINISTRATOR'],
    },
    run: async (client, message, props) => {
        await channels_db.establecer(message.guild.id, message.channel.id)

        return message.reply(i18n.res('setspawn.success', props.lang, { channel: message.channel.id }))
    }
})