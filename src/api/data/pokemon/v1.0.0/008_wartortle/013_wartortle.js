const Wartortle = require('./base')

module.exports = new Wartortle({
    uuid: 13,
    name: "Wartortle",
    evolutions: {
        level: { pokemon: 'Blastoise', level: 36 },
    },
})