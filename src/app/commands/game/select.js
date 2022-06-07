const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')
const { user, captures, pokemon } = require('../../database')

module.exports = new Command({
    name: "select",
    alias: ["seleccionar"],
    cooldown: 5,
    args: true,
    run: async (client, message, props) => {
        if (isNaN(props.args[0]) || parseInt(props.args[0]) <= 0) return

        const number = parseInt(props.args[0])
        const userId = (await user.create({ userId: message.member.user.id })).id

        const list = await captures.getAll({ userId: userId })
        if (list.length == 0) return message.reply(i18n.res('select.notFound', props.lang))
        if (number > list.length) return message.react('❔')

        await captures.update({
            props: { userId: userId, current: true },
            values: { current: false },
        })
        await captures.update({
            props: { id: list[ number - 1 ].id },
            values: { current: true },
        })

        return message.reply(i18n.res('select.success', props.lang, {
            pokemon: list[ number - 1 ].pokemon,
            level: list[ number - 1 ].level,
        }))
    }
})