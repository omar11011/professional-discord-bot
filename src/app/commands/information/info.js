const Command = require('../../util/class/Command')
const dict = require('../../../translate')('dict/common')
const i18n = require('../../../translate')('commands/information')

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
        description += `${dict.res('increase', props.lang)}: ${data.increase.idioms[props.lang]}\n`

        if (data.evolutions.level.length > 0) {
            for (let i = 0; i < data.evolutions.level.length; i++) description += `\n${i18n.res('info.evolutions.level', props.lang, { evolution: data.evolutions.level[i].pokemon, level: data.evolutions.level[i].level })}`
        }
        if (data.evolutions.mega.length > 0) {
            for (let i = 0; i < data.evolutions.mega.length; i++) description += `\n${i18n.res('info.evolutions.mega', props.lang, { evolution: data.evolutions.mega[i].pokemon, item: data.evolutions.mega[i].item.idioms[props.lang] })}`
        }
        if (data.evolutions.giga.length > 0) {
            for (let i = 0; i < data.evolutions.giga.length; i++) description += `\n${i18n.res('info.evolutions.giga', props.lang, { evolution: data.evolutions.giga[i].pokemon })}`
        }

        try {
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
                attachment: { dir: 'pokemon', img: data.name.split(" ").join("_") + '.png' },
                footer: `Pokémon ID: ${data.uuid}`,
            })
            
            return message.reply(embed)
        }
        catch (err) {
            return console.log(err.name)
        }
    }
})