const data = require('../../data/move_z')

module.exports = async (req, res) => {
    const result = data.find(e => e.uuid == parseInt(req.params.id))

    if (!result) return res.json({ error: "No se encontró este movimiento z." })
    
    return res.json(result)
}