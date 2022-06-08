const Command = require('../../util/class/Command')
const dict = require('../../../translate')('dict/common')
const i18n = require('../../../translate')('commands/information')

const { Embed } = require('../../util/functions')
const { user, captures } = require('../../database')

module.exports = new Command({
    name: "info",
    cooldown: 4,
    run: async (client, message, props) => {
        let pokemon = null
        const userId = (await user.create({ userId: message.member.user.id })).id

        if (props.args.length < 1) pokemon = await captures.get({ userId: userId, current: true })
        else {
            const list = await captures.getAll({ userId: userId })
            if (list.length == 0) return message.react('❔')
            if (isNaN(props.args[0]) || parseInt(props.args < 1)) return

            const number = parseInt(props.args[0])
            if (number > list.length)  return message.react('❔')
            console.log(list[ number - 1 ])
            pokemon = await captures.get({ id: list[number - 1].id })
        }

        if (!pokemon) return message.reply(i18n.res('info.notSelect', props.lang))
        
        const obj = {
            title: (pokemon.shiny ? '⭐ ' : '') + pokemon.pokemon,
            description: '',
            attachment: { dir: 'pokemon' + (pokemon.shiny ? '/shiny' : ''), img: pokemon.pokemon.split(" ").join("_") + '.png' },
        }

        obj.description += `${dict.res('globalID', props.lang)}: ${pokemon.id}\n`
        obj.description += `${dict.res('level', props.lang)}: ${pokemon.level} (${pokemon.xp}/${pokemon.needExp})\n`
        obj.description += `${dict.res('gender', props.lang)}: ${dict.res(pokemon.gender, props.lang)}\n`
        obj.description += `${dict.res('nature', props.lang)}: ${pokemon.nature[props.lang]}\n`
        obj.description += `${dict.res('friendship', props.lang)}: ${pokemon.friendship}/1000\n`
        obj.description += `${dict.res('iv', props.lang)}: ${pokemon.iv}%`

        obj.fields = Object.keys(pokemon.power).map(e => {
            return {
                name: dict.res(e, props.lang),
                value: `IV: ${pokemon[e]}/31\nPE: ${pokemon[e + 'PE']}/100\n${dict.res('power', props.lang)}: ${pokemon.power[e]}`,
                inline: true,
            }
        })

        const embed = await Embed.create(obj)

        return message.reply(embed)
    }
})