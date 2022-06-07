const models = require('../../models')
const data_pokemon = require('../../data/pokemon')
const data_nature = require('../../data/nature')

module.exports = async (req, res) => {
    const props = req.body
    const pokemon = await models.pokemon.findOne({ where: props })

    if (!pokemon) return res.json({ error: 'No existe este Pokémon.' })

    const specie = data_pokemon.find(p => pokemon.pokemon == p.uuid)
    const nature = data_nature.find(n => n.name == pokemon.nature)

    pokemon.pokemon = specie.name
    pokemon.nature = nature.idioms

    return res.json(pokemon)
}