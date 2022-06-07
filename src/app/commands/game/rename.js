const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')
const { user, captures } = require('../../database')

module.exports = new Command({
    name: "rename",
    alias: ["renombrar"],
    cooldown: 5,
    run: async (client, message, props) => {
        const limit = 15
        const userId = (await user.create({userId: message.member.user.id })).id

        let name = null
        if (props.args.length > 0) {
            name = props.args.join(" ")
            if (name.length > limit) return message.reply(i18n.res('rename.length', props.length, { limit: limit }))
        }

        const change = await captures.update({
            props: { userId: userId, current: true },
            values: { name: name },
        })

        if (change.error) return message.reply(i18n.res('rename.notSelect', props.lang))
        
        if (name != null) return message.reply(i18n.res('rename.success.notNull', props.lang, { name: name }))
        else return message.reply(i18n.res('rename.success.null', props.lang))
    }
})