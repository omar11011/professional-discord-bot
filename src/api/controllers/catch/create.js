const models = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })

    const pokemon = {
        pokemon: data.pokemon,
        name: data.name || null,
        shiny: data.shiny || false,
        xp: data.xp || 0,
        level: data.level || 5,
        hp: data.hp || Math.ceil(Math.random() * 31),
        attack: data.attack || Math.ceil(Math.random() * 31),
        defense: data.defense || Math.ceil(Math.random() * 31),
        spattack: data.spattack || Math.ceil(Math.random() * 31),
        spdefense: data.spdefense || Math.ceil(Math.random() * 31),
        speed: data.speed || Math.ceil(Math.random() * 31),
        friendship: data.friendship || 0,
        movements: data.movements || null, 
        item: data.item || null,
        date: new Date(),
        userId: data.userId || null,
    }

    if (!data.gender) pokemon.gender = 'male'
    else {
        if (data.gender.male == 0 && data.gender.female == 0) pokemon.gender = 'none'
        else {
            const prob = Math.floor(Math.random() * 100)
            if (prob < data.gender.male) pokemon.gender = 'male'
            else pokemon.gender = 'female'
        }
    }

    try {
        await models.pokemon.create(pokemon).then(e => res.json(e.dataValues))
    }
    catch(err) {
        return res.json({ error: 'Ocurrió un error al crear el pokémon.' })
    }
}