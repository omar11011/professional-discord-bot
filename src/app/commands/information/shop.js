const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/information')

const { Embed, Pagination } = require('../../util/functions')
const { item } = require('../../database')

module.exports = new Command({
    name: "shop",
    alias: ["tienda"],
    cooldown: 4,
    run: async (client, message, props) => {
        if (props.args.length == 0) {
            const data = await item.getAll()
            const fields = data.map(e => {
                return {
                    name: e.idioms[props.lang],
                    value: i18n.res('shop.embed1.field', props.lang, { category: e.name }),
                    inline: true,
                }
            })
            const embed = await Embed.create({
                color: 'GREEN',
                author: i18n.res('shop.embed1.author', props.lang),
                description: i18n.res('shop.embed1.description', props.lang),
                fields: fields,
                footer: i18n.res('shop.embed1.footer', props.lang, { prefix: props.prefix }),
            })

            return message.reply(embed)
        } else {
            let category = props.args.join(" ").toLowerCase()
            let items = await item.getPerCategory(category)

            if (items.error) return message.reply(i18n.res('shop.error', props.lang))

            items = items.map(e => {
                return {
                    name: e.idioms[props.lang],
                    value: `ID: ${String(e.uuid)}\n${i18n.res('shop.price', props.lang)}: ${e.purchasePrice ?  "💵 " + String(e.purchasePrice) : i18n.res("shop.notAvailable", props.lang)}`,
                    inline: true
                }
            })
            
            const data = Pagination.separateData(items, 15)
            const embeds = []

            for (let i = 0; i < data.length; i++) {
                embeds.push(await Embed.create({
                    color: 'GREEN',
                    title: i18n.res('shop.embed2.title', props.lang, { page: (i + 1) }),
                    author: i18n.res('shop.embed2.author', props.lang, { category: category }),
                    fields: data[i],
                    footer: i18n.res('shop.embed2.footer', props.lang, { prefix: props.prefix })
                }))
            }
            
            if (data.length == 1) return message.reply(embeds[0])
            else await Pagination.create(message, embeds)
        }
    }
})