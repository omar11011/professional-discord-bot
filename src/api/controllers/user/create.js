const models = require('../../models')
const regions = require('../../data/regions')

module.exports = async (req, res) => {
    let data = req.body
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })
    if (!data.userId) return res.json({ error: "Faltan campos necesarios." })

    let user = await models.user.findOne({ where: { userId: data.userId } })
    if (user) return res.json({ error: "Usuario ya registrado." })
    
    await models.user.create({
        userId: data.userId,
        username: String(data.username) || "Player#" + Date.now(),
        region: regions[Math.floor(Math.random() * regions.length)].name,
        date: new Date(),
    }).then(e => res.json(e.dataValues))
}