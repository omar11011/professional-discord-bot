const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/information')

const { Embed } = require('../../util/functions')
const { item } = require('../../database')

module.exports = new Command({
    name: "item",
    alias: ["i"],
    cooldown: 4,
    args: true,
    run: async (client, message, props) => {
        const data = await item.getPerID(props.args[0])
        if (data.error) return message.reply(i18n.res('item.notExist', props.lang))

        try {
            const embed = await Embed.create({
                author: data.idioms[props.lang],
                fields: [
                    {
                        name: i18n.res('item.category', props.lang),
                        value: data.category.idioms[props.lang],
                        inline: true
                    },
                    {
                        name: i18n.res('item.purchasePrice', props.lang),
                        value: `${data.purchasePrice ?  "💵 " + String(data.purchasePrice) : i18n.res("shop.notAvailable", props.lang)}`,
                        inline: true
                    },
                    {
                        name: i18n.res('item.salePrice', props.lang),
                        value: `${data.salePrice ?  "💵 " + String(data.salePrice) : i18n.res("shop.notAvailable", props.lang)}`,
                        inline: true
                    },
                ],
                footer: i18n.res('item.footer', props.lang, { prefix: props.prefix }),
                attachment: { dir: 'items', img: data.name.split(" ").join("_") + '.png', position: 'thumb' },
            })

            return message.reply(embed)
        }
        catch (err) {
            return console.log(err.name)
        }
    }
})