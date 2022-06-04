const Squirtle = require('./base')

module.exports = new Squirtle({
    uuid: 12,
    name: "Squirtle",
    evolutions: {
        level: { pokemon: 'Wartortle', level: 16 },
    },
})