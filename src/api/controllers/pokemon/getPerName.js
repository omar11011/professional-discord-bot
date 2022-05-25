const data = require('../../data/pokemon')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const result = data.find(e => transformWord(e.name) == transformWord(req.params.name))

    if (!result) return res.json({ error: "No se encontró este pokémon." })
    
    return res.json(result)
}