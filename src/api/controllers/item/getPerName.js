const data = require('../../data/items')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const item = data.find(e => transformWord(e.name) == transformWord(req.params.name))

    if (!item) return res.json({ error: "Este item no existe." })

    return res.json(item)
}