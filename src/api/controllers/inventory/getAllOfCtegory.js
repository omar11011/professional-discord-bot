const getAll = require('./functions/getAll')

module.exports = async (req, res) => {
    const inventory = await getAll(req.params)

    if (!inventory) return res.json({ error: "Este usuario no existe." })
    else return res.json(inventory)
}