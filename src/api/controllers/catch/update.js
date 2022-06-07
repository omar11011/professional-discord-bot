const models = require('../../models')

module.exports = async (req, res) => {
    const data = req.body
    const props = data.props
    const values = data.values

    if (!data.token || data.token != process.env.API_TOKEN) return res.json({ error: "Sin autorización." })

    const pokemon = await models.pokemon.findOne({ where: props })
    if (!pokemon) return res.json({ error: "Este pokémon no existe." })

    const nameValues = Object.keys(values)
    for (let i = 0; i < nameValues.lengt; i++) pokemon[nameValues[i]] = values[nameValues[i]]

    try {
        await models.pokemon.update(values, { where: { id: pokemon.id } }).then(() => res.json(pokemon))
    }
    catch(err) {
        return res.json({ error: 'Ocurrió un error con los datos insertados.' })
    }
}