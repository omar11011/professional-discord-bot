const Command = require('../../util/class/Command')
const i18n = require('../../translate')('commands/marriage')
const { user, marriage, inventory } = require('../../database')

module.exports = new Command({
    name: "marry",
    alias: ["matrimonio"],
    cooldown: 10,
    args: true,
    run: async (client, message, props) => {
        const mention = (message.mentions.members.first() || message.guild.members.cache.get(props.args[0]) || message.member).user
        if (!mention || mention.bot || mention.id == message.member.user.username) return message.reply(i18n.res("marry.not-mention", props.lang))
        
        const person1 = await user.revalidate({
            userId: message.member.user.id,
            username: message.member.user.username,
        })
        const person2 = await user.revalidate({
            userId: mention.id,
            username: mention.username,
        })

        const exists = (await marriage.get(message.member.user.id)).find(e => e.userId == mention.id)
        if (exists) return message.reply(i18n.res("marry.exists", props.lang, { couple: person2.username }))
        
        let ring = await inventory.get({ user: message.member.user.id, item: "ring" })
        if (ring.length == 0) return message.reply(i18n.res("marry.missing-ring", props.lang))
        else ring = ring[0]
        
        const filter = m => m.author.id === mention.id
        const collector = message.channel.createMessageCollector({ filter, max: 1, time: 6000 })
        message.channel.send(i18n.res("marry.question", props.lang, { id: person2.userId, user: message.member.user.username }))

        collector.on('collect', async m => {
            if (m.content.toLowerCase() == "yes") {
                await inventory.transfer({
                    person1: person1.userId,
                    person2: person2.userId,
                    code: ring.code,
                    receivedId: person2.id,
                })
                await marriage.create({
                    person1: person1.id,
                    person2: person2.id,
                })
                m.react('☑️')
                return message.reply(i18n.res("marry.success", props.lang, { couple: person2.username }))
            }
            else return m.react('❌')
        })   
    }
})