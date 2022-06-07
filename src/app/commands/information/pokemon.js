const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/information')

const { Embed, Pagination } = require('../../util/functions')
const { captures, user } = require('../../database')

module.exports = new Command({
    name: "pokemon",
    cooldown: 5,
    run: async (client, message, props) => {
        let position = 0
        let userId = (await user.create({ userId: message.member.user.id })).id
        let list = await captures.getAll({ userId : userId })

        if (list.length == 0) return message.reply(i18n.res('pokemon.notFound', props.lang))

        list = list.map(e => {
            position += 1
            return {
                name: `[${String(position)}] ${e.pokemon}`,
                value: `Level: ${String(e.level)}\nIV: ${String(e.iv)}%`,
                inline: true
            }
        })
            
        const data = Pagination.separateData(list, 15)
        const embeds = []

        for (let i = 0; i < data.length; i++) {
            embeds.push(await Embed.create({
                color: 'GREEN',
                author: 'Lista de Pokémon de ' + message.member.user.tag,
                description: `Hasta el momento has capturado ${position} Pokémon.`,
                thumbnail: message.member.user.displayAvatarURL({ format: 'jpg' }),
                fields: data[i],
            }))
        }
            
        if (data.length == 1) return message.reply(embeds[0])
        else await Pagination.create(message, embeds)
    }
})