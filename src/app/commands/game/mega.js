const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')

const { captures, pokemon, user } = require('../../database')

module.exports = new Command({
    name: "mega",
    run: async (client, message, props) => {
        const price = 20000
        const { id, money } = await user.create({ userId: message.member.user.id })
        if (money < price) return message.reply(i18n.res('common.notMoney', props.lang, { price: price }))

        const currentPokemon = await captures.get({ userId: id, current: true })
        if (currentPokemon.error) return message.reply(i18n.res('common.notSelect', props.lang))

        const forms = (await pokemon.getPerName(currentPokemon.pokemon)).evolutions.mega
        if (forms.length < 1) return message.reply(i18n.res('mega.notForms', props.lang, { pokemon: currentPokemon.pokemon }))

        const evolution = await pokemon.getPerName((forms[Math.floor(Math.random() * forms.length)]).pokemon)
        const change = await captures.update({
            props: { id: currentPokemon.id },
            values: { pokemon: evolution.uuid },
        })
        
        if (change.error) return message.reply(i18n.res('common.error', props.lang))
        else await user.update({
            props: { id: id },
            values: { money: money - price },
        })

        return message.reply(i18n.res('mega.success', props.lang, { pokemon: evolution.name }))
    }
})