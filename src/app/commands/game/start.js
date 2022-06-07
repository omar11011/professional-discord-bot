const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')
const { user } = require('../../database')

module.exports = new Command({
    name: "start",
    alias: ["empezar"],
    cooldown: 5,
    run: async (client, message, props) => {
        const data = await user.create({ userId: message.member.user.id })
        
        if (data.already) return message.reply(i18n.res('start.error', props.lang))

        return message.reply(i18n.res('start.success', props.lang))
    }
})