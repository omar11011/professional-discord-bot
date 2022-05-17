const data = require('../../data/movements')

module.exports = async (req, res) => {
    const result = data.filter(e => e.combat.class.name == req.params.class.toLowerCase())

    if (result.length < 1) return res.json({ error: "No se encontraron movimientos de esta clase." })
    
    return res.json(result)
}