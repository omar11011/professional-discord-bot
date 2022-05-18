const data = require('../../data/regions')

module.exports = async (req, res) => {
    const result = data.find(e => e.uuid == parseInt(req.params.id))

    if (!result) return res.json({ error: "No se encontró esta región." })
    
    return res.json(result)
}