const data = require('../../data/items')

module.exports = async (req, res) => {
    if (data.hasOwnProperty(req.params.category)) {
        return res.json(data[req.params.category])
    } else {
        return res.json({ error: "No existe esta categoría." })
    }
}