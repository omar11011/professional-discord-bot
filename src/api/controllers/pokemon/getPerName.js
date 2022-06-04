const data = require('../../data/pokemon')
const create = require('./functions/create')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const pokemon = data.find(e => transformWord(e._name) == transformWord(req.params.name))
    if (!pokemon) return res.json({ error: "Pokémon no encontrado." })

    return res.json(create(pokemon))
}