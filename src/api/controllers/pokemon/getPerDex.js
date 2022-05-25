const data = require('../../data/pokemon')

module.exports = async (req, res) => {
    const result = data.filter(e => e.pokedex == parseInt(req.params.id))

    if (result.length < 1) return res.json({ error: "No se encontró ningún pokémon." })
    
    return res.json(result)
}