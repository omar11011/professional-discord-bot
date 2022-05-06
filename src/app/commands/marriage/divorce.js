const Command = require('../../util/class/Command')
const i18n = require('../../translate')('commands/marriage')
const { marriage } = require('../../database')

module.exports = new Command({
    name: "divorce",
    alias: ["divorciar"],
    cooldown: 10,
    args: true,
    run: async (client, message, props) => {
        const mention = (message.mentions.members.first() || message.guild.members.cache.get(props.args[0]) || message.member).user
        if (!mention || mention.bot || mention.id == message.member.user.username) return message.reply(i18n.res("divorce.not-mention", props.lang))

        const marriages = (await marriage.get(message.member.user.id)).find(e => e.userId == mention.id)
        if (marriages.length == 0) return message.reply(i18n.res("divorce.not-marry", props.lang, { user: mention.username }))
        
        const filter = m => m.author.id === message.member.user.id
        const collector = message.channel.createMessageCollector({ filter, max: 1, time: 6000 })
        message.channel.send(i18n.res("divorce.question", props.lang, { me: message.member.user.id, user: mention.username }))

        collector.on('collect', async m => {
            if (m.content.toLowerCase() == "yes") {
                await marriage.delete(marriages.id)
                m.react('☑️')
                return m.reply(i18n.res("divorce.success", props.lang, { user: mention.username }))
            }
        })
    }
})