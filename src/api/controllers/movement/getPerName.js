const data = require('../../data/movements')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const result = data.find(e => transformWord(e.name) == transformWord(req.params.name))

    if (!result) return res.json({ error: "No se encontró este movimiento." })
    
    return res.json(result)
}