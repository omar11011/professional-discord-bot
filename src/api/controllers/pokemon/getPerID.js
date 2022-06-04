const data = require('../../data/pokemon')
const create = require('./functions/create')

module.exports = async (req, res) => {
    const pokemon = data.find(e => e._uuid == req.params.id)
    if (!pokemon) return res.json({ error: "Pokémon no encontrado." })

    return res.json(create(pokemon))
}