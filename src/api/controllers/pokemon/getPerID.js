const data = require('../../data/pokemon')

module.exports = async (req, res) => {
    const result = data.find(e => e.uuid == parseInt(req.params.id))

    if (!result) return res.json({ error: "No se encontró este pokémon." })
    
    return res.json(result)
}