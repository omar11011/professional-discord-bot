const models = require('../../models')
const nature = require('../../data/nature')

module.exports = async (req, res) => {
    const data = req.body
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })

    const stats = {
        hp: Math.ceil(Math.random() * 31),
        attack: Math.ceil(Math.random() * 31),
        defense: Math.ceil(Math.random() * 31),
        spattack: Math.ceil(Math.random() * 31),
        spdefense: Math.ceil(Math.random() * 31),
        speed: Math.ceil(Math.random() * 31),
    }

    data.iv = ((stats.hp + stats.attack + stats.defense + stats.spattack + stats.spdefense + stats.speed) / 6) * 100 / 31
    data.date = new Date()
    data.gender = data.gender == false ? 'none' : ['male', 'female'][Math.floor(Math.random() * 2)]
    data.nature = nature[Math.floor(Math.random() * nature.length)].name

    try {
        await models.pokemon.create(data).then(async e => {
            await models.stat.create({ ...stats, pokemonId: e.id }).then(p => res.json({ ...e.dataValues, stat: p.dataValues }))
        })
    }
    catch(err) {
        return res.json({ error: 'Ocurrió un error al crear el pokémon.' })
    }
}