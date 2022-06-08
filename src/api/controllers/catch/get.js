const models = require('../../models')

const data_pokemon = require('../../data/pokemon')
const data_nature = require('../../data/nature')
const data_increase = require('../../data/increase')

const stats = ['hp', 'attack', 'defense', 'spattack', 'spdefense', 'speed']

module.exports = async (req, res) => {
    const props = req.body
    const pokemon = await models.pokemon.findOne({ where: props })

    if (!pokemon) return res.json({ error: 'No existe este Pokémon.' })

    const specie = data_pokemon.find(p => pokemon.pokemon == p.uuid)
    const nature = data_nature.find(n => n.name == pokemon.nature)
    const increase = data_increase.find(i => i.name == specie.increase.name)

    pokemon.pokemon = specie.name
    pokemon.nature = nature.idioms
    pokemon.dataValues.power = {}
    pokemon.dataValues.needExp = increase.needExp(pokemon.level)

    for (let i = 0; i < stats.length; i++) {
        if (stats[i] == 'hp') {
            pokemon.dataValues.power.hp = Math.round(
                10 + (pokemon.level / 100 * ((specie.stats.hp * 2) + pokemon.hp + pokemon.hpPE)) + pokemon.level
            )
        }
        else {
            pokemon.dataValues.power[stats[i]] = Math.round(
                (5 + (pokemon.level / 100 * ((specie.stats[stats[i]] * 2) + pokemon[stats[i]] + pokemon[stats[i] + 'PE']))) * (1 + nature[stats[i]])
            )
        }
    }

    return res.json(pokemon)
}