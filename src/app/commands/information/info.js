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

        }

        if (!pokemon) return message.reply(i18n.res('info.notSelect', props.lang))
        
        console.log(pokemon)
        const obj = {
            title: (pokemon.shiny ? '⭐ ' : '') + pokemon.pokemon,
            description: '',
            attachment: { dir: 'pokemon' + (pokemon.shiny ? '/shiny' : ''), img: pokemon.pokemon.split(" ").join("_") + '.png' },
        }

        obj.description += `${dict.res('globalID', props.lang)}: ${pokemon.id}\n`
        obj.description += `${dict.res('level', props.lang)}: ${pokemon.level} (${pokemon.xp}/)\n`
        obj.description += `${dict.res('gender', props.lang)}: ${dict.res(pokemon.gender, props.lang)}\n`
        obj.description += `${dict.res('nature', props.lang)}: ${pokemon.nature[props.lang]}\n`
        obj.description += `${dict.res('friendship', props.lang)}: ${pokemon.friendship}/1000\n`
        obj.description += `${dict.res('iv', props.lang)}: ${pokemon.iv}%`

        const embed = await Embed.create(obj)

        return message.reply(embed)
    }
})