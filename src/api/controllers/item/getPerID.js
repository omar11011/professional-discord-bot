const data = require('../../data/items')

module.exports = async (req, res) => {
    const item = data.find(e => e.uuid == parseInt(req.params.id))

    if (!item) return res.json({ error: "Este item no existe." })

    return res.json(item)
}