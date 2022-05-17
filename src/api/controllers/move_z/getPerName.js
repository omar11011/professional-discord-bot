const data = require('../../data/move_z')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const result = Object.values(data).find(e => transformWord(e.name) == transformWord(req.params.name))

    if (!result) return res.json({ error: "No se encontró este movimiento z." })
    
    return res.json(result)
}