const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/information')
const dict = require('../../../translate')('dict/common')

const { Embed } = require('../../util/functions')
const { pokemon } = require('../../database')

module.exports = new Command({
    name: "info",
    cooldown: 4,
    args: true,
    run: async (client, message, props) => {
        let data = null
        let description = ''

        if (!isNaN(props.args[0])) data = await pokemon.getPerID(props.args[0])
        else data = await pokemon.getPerName(props.args.join(" "))

        if (!data || data.error) return message.reply(i18n.res('info.error', props.lang))

        description += `${dict.res('region', props.lang)}: ${data.region.idioms[props.lang]}\n`
        description += `${dict.res('type', props.lang)}: ${data.type.map(e => e.idioms[props.lang]).join("/")}\n`
        description += `${dict.res('eggGroup', props.lang)}: ${data.eggGroup.map(e => e.idioms[props.lang]).join("/")}\n`
        description += `${dict.res('capture', props.lang)}: ${String(data.capture)}/255\n`

        const embed = await Embed.create({
            author: `${data.name} #${data.pokedex}`,
            description: description,
            fields: Object.keys(data.stats).map(e => {
                return {
                    name: dict.res(e, props.lang),
                    value: `${dict.res('power', props.lang)}: ${data.stats[e]}/255`,
                    inline: true,
                }
            }),
            attachment: { dir: 'pokemon', img: data.name.toLowerCase().split(" ").join("_") + '.png' },
            footer: `ID Pokémon: ${data.uuid}`,
        })
        
        return message.reply(embed)
    }
})