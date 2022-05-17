const data = require('../../data/items')
const transformWord = require('../../util/transformWord')

module.exports = async (req, res) => {
    const items = data.filter(e => transformWord(e.category) == transformWord(req.params.category))

    if (items.length < 1) return res.json({ error: "No hay items en esta categoría." })

    return res.json(items)
}