const data = require('../../data/pokemon')
const create = require('./functions/create')

module.exports = async (req, res) => {
    const spawnPokemon = data.filter(e => e.spawn == true)
    const pokemon = spawnPokemon[Math.floor(spawnPokemon.length * Math.random())]

    return res.json(create(pokemon))
}