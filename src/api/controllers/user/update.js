const models = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    if (!data.userId) return res.json({ error: "Faltó especificar al usuario." })
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })

    const user = await models.user.findOne({ where: { userId: data.userId } })
    if (!user) return res.json({ error: "Usuario no registrado." })

    if (data.username) user.username = data.username
    if (data.money && !isNaN(data.money)) user.money += parseInt(data.money)
    
    await models.user.update(user.dataValues, { where: { id: user.id } })
    return res.json(user.dataValues)
}