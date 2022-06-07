const models = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })

    data.hp = Math.ceil(Math.random() * 31)
    data.attack = Math.ceil(Math.random() * 31)
    data.defense = Math.ceil(Math.random() * 31)
    data.spattack = Math.ceil(Math.random() * 31)
    data.spdefense = Math.ceil(Math.random() * 31)
    data.speed = Math.ceil(Math.random() * 31)
    data.iv = ((data.hp + data.attack + data.defense + data.spattack + data.spdefense + data.speed) / 6) * 100 / 31
    data.date = new Date()
    data.gender = data.gender == false ? 'none' : ['male', 'female'][Math.floor(Math.random() * 2)]

    try {
        await models.pokemon.create(data).then(e => res.json(e.dataValues))
    }
    catch(err) {
        return res.json({ error: 'Ocurrió un error al crear el pokémon.' })
    }
}