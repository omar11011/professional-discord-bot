const models = require('../../models')

module.exports = async (req, res) => { 
    const data = await models.user.findOne({
        where: { id: req.params.id },
    })

    if (!data) return res.json({ error: "No se encontró al usuario." })

    return res.json(data)
}