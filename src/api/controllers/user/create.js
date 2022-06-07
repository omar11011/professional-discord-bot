const models = require('../../models')
const regions = require('../../data/regions')

module.exports = async (req, res) => {
    const data = req.body

    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })
    if (!data.userId) return res.json({ error: "Faltan campos necesarios." })

    const user = await models.user.findOne({ where: { userId: data.userId } })
    if (user) return res.json({ ...user.dataValues, already: true })

    if (!data.username) data.username = String(Date.now() + Math.floor(Math.random() * 10))
    if (!data.region) data.region = regions[Math.floor(Math.random() * regions.length)].name
    if (!data.date) data.date = new Date()
    
    await models.user.create(data).then(e => res.json(e.dataValues))
}