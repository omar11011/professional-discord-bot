const Ivysaur = require('./base')

module.exports = new Ivysaur({
    uuid: 2,
    name: "Ivysaur",
    evolutions: {
        level: { pokemon: 'Venusaur', level: 32 },
    },
})