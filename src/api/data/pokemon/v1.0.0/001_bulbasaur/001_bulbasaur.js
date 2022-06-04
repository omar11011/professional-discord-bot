const Bulbasaur = require('./base')

module.exports = new Bulbasaur({
    uuid: 1,
    name: "Bulbasaur",
    evolutions: {
        level: { pokemon: 'Ivysaur', level: 16 },
    },
})