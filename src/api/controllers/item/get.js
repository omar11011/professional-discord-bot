const data = require('../../data/items')

module.exports = async (req, res) => {
    if (data.hasOwnProperty(req.params.category)) {
        const item = data[req.params.category].find(e => e.code == req.params.code)

        if (item) return res.json(item)
        else return res.json({ error: "No se encontró este item." })
    } else {
        return res.json({ error: "No existe esta categoría." })
    }
}