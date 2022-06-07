const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('dict/common')

const { Embed } = require('../../util/functions')
const { user } = require('../../database')

module.exports = new Command({
    name: "balance",
    alias: ["bal"],
    cooldown: 4,
    run: async (client, message, props) => {
        const { money } = await user.create({ userId: message.member.user.id })
        const embed = await Embed.create({
            color: 'GREEN',
            author: { name: message.member.user.username, iconURL: message.member.user.displayAvatarURL({ format: 'jpg' }) },
            description: `💰 ${i18n.res("money", props.lang)}: ${String(money)}`,
        })

        return message.reply(embed)
    }
})