const models = require('../../models')

module.exports = async (req, res) => {
    const id = req.params.id
    const pokemon = await models.pokemon.findOne({ where: { id: id } })

    if (!pokemon) return res.json({ error: 'No existe este Pokémon.' })
    else return res.json(pokemon)
}