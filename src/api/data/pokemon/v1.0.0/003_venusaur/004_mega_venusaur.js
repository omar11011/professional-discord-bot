const Venusaur = require('./base')

module.exports = new Venusaur({
    uuid: 4,
    name: "Mega Venusaur",
    stats: {
        hp: 80,
        attack: 100,
        defense: 123,
        spattack: 122,
        spdefense: 120,
        speed: 80,
    },
    spawn: false,
})