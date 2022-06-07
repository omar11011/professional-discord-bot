const models = require('../../models')

module.exports = async (req, res) => {
    const props = req.body
    const pokemon = await models.pokemon.findOne({ where: props })

    if (!pokemon) return res.json({ error: 'No existe este Pokémon.' })
    else return res.json(pokemon)
}