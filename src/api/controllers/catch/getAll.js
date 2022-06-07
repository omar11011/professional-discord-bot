const models = require('../../models')
const data = require('../../data/pokemon')

module.exports = async (req, res) => {
    let props = req.body
    let pokemon = await models.pokemon.findAll({ where: props })

    pokemon = pokemon.map(e => {
        return {
            id: e.id,
            pokemon: data.find(p => e.pokemon == p.uuid).name,
            level: e.level,
            iv: e.iv,
        }
    })

    return res.json(pokemon)
}