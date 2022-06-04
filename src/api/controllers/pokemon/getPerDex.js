const data = require('../../data/pokemon')
const create = require('./functions/create')

module.exports = async (req, res) => {
    const pokemon = data.filter(e => e._pokedex == parseInt(req.params.id))
    if (pokemon.length < 1) return res.json({ error: "No se encontró ningún pokémon." })

    const result = pokemon.map(e => {
        return create(e)
    })
    
    return res.json(result)
}