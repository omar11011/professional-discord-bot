const models = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    const props = data.props
    const values = data.values
    
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })

    const user = await models.user.findOne({ where: props })
    if (!user) return res.json({ error: "Usuario no registrado." })

    if (values.username) user.username = values.username
    if (values.money && !isNaN(values.money)) user.money = parseInt(values.money)
    
    await models.user.update(values, { where: { id: user.id } }).then(() => res.json(user))
}