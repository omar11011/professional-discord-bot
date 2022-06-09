const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')

const { captures, user } = require('../../database')
const { Evolution } = require('../../util/functions')

module.exports = new Command({
    name: "play",
    cooldown: 20,
    run: async (client, message, props) => {
        const points = Math.ceil(Math.random() * 10)
        const player = await user.create({ userId: message.member.user.id })

        let currentPokemon = await captures.get({ userId: player.id, current: true })
        if (currentPokemon.error) return message.reply(i18n.res('common.notSelect', props.lang))

        currentPokemon = await Evolution.friendship(currentPokemon, points)

        const change = await captures.update({
            props: { id: currentPokemon.id },
            values: {
                pokemon: currentPokemon.pokemonId,
                friendship: currentPokemon.friendship,
            },
        })
        
        if (change.error) return message.reply(i18n.res('common.error', props.lang))

        return message.reply(i18n.res('play.success', props.lang, { pokemon: currentPokemon.pokemon, points: points }))
    }
})