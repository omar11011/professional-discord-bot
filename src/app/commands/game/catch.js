const Command = require('../../util/class/Command')
const i18n = require('../../../translate')('commands/game')

const megadb = require('megadb')
const pokemon_db = new megadb.crearDB('pokemon', 'spawn')

const { captures, pokemon, user } = require('../../database')

module.exports = new Command({
    name: "catch",
    alias: ["atrapar"],
    args: true,
    run: async (client, message, props) => {
        const name = await pokemon_db.obtener(message.channel.id)

        if (!name) return
        if (name.toLowerCase().trim() !== props.args.join(" ").toLowerCase().trim()) return await message.react('❌')
        else {
            await pokemon_db.eliminar(message.channel.id)
            await message.react('✅')
        }

        const userId = (await user.create({ userId: message.member.user.id })).id
        const e = await pokemon.getPerName(name)
        console.log(e)
        const obj = {
            pokemon: e.uuid,
            level: 5 + Math.floor(Math.random() * 10),
            friendship: e.friendship,
            gender: e.gender,
            category: e.category.name,
            userId: userId,
        }
        const pokemonCreate = await captures.create(obj)

        if (pokemonCreate.error) {
            console.log({
                server: message.guild.id,
                channel: message.channel.id,
                issue: 'catch',
                pokemon: name,
            })
            return message.reply(i18n.res('catch.error', porps.lang))
        }
        else return message.reply(i18n.res('catch.success', props.lang, { pokemon: e.name, level: obj.level }))
    }
})