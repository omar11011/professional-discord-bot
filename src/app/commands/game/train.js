const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')

const { captures, pokemon, user } = require('../../database')

module.exports = new Command({
    name: "train",
    cooldown: 20,
    run: async (client, message, props) => {
        const xp = Math.ceil(Math.random() * 10)
        const player = await user.create({ userId: message.member.user.id })

        const currentPokemon = await captures.get({ userId: player.id, current: true })
        if (currentPokemon.error) return message.reply(i18n.res('common.notSelect', props.lang))

        currentPokemon.xp += xp

        if (currentPokemon.xp >= currentPokemon.needExp) {
            currentPokemon.xp -= currentPokemon.needExp
            currentPokemon.level += 1

            let evolutions = (await pokemon.getPerName(currentPokemon.pokemon)).evolutions.level
            evolutions = evolutions.filter(e => currentPokemon.level >= e.level)

            if (evolutions.length > 0) {
                let forms = evolutions.filter(e => Object.keys(e).includes('male') || Object.keys(e).includes('region'))

                if (forms.length == 0) forms = evolutions
                else {
                    forms = forms.filter(e => {
                        if (e.region && e.region == player.region) return e
                        else if (Object.keys(e).includes('male') && ((e.male && currentPokemon.gender == 'male') || (!e.male && currentPokemon.gender == 'female'))) return e
                    })
                }
                
                if (forms.length > 0) {
                    const form = forms[Math.floor(Math.random() * forms.length)].pokemon
                    const evolution = await pokemon.getPerName(form)
                    
                    currentPokemon.pokemonId = evolution.uuid
                    currentPokemon.pokemon = evolution.name
                }
            }
        }

        const change = await captures.update({
            props: { id: currentPokemon.id },
            values: {
                pokemon: currentPokemon.pokemonId,
                xp: currentPokemon.xp,
                level: currentPokemon.level,
            },
        })
        
        if (change.error) return message.reply(i18n.res('common.error', props.lang))

        return message.reply(i18n.res('train.success', props.lang, { pokemon: currentPokemon.pokemon, xp: xp }))
    }
})