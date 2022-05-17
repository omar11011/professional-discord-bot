const data = require('../../data/movements')

module.exports = async (req, res) => {
    const result = data.filter(e => e.combat.type.name == req.params.type.toLowerCase())

    if (result.length < 1) return res.json({ error: "No se encontraron movimientos de este tipo." })
    
    return res.json(result)
}