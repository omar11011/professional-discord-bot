const models = require('../../models')

module.exports = async (req, res) => {
    const props = req.body
    const data = await models.user.findOne({ where: props })

    if (!data) return res.json({ error: "No se encontró al usuario." })

    return res.json(data)
}